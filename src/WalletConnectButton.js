// Credentials cache for storing fetched credentials
const credentialsCache = new Map();

class WalletConnectButton {
  constructor(options = {}) {
    this.clientId = options.clientId;
    this.onSuccess = options.onSuccess || (() => {});
    this.apiKey = options.apiKey;
    this.issuance = options.issuance || false;
    this.walletConnectHost = options.walletConnectHost || (this.issuance ? "https://issuance.wallet-connect.eu" : "https://wallet-connect.eu");
    this.buttonText = options.buttonText || "Connect Wallet";
    this.lang = options.lang || "nl";
    this.helpBaseUrl = options.helpBaseUrl;
    
    this.loading = false;
    this.error = null;
    this.searchParams = new URLSearchParams(window.location.search);
    
    this.buttonElement = null;
    this.container = null;
    
    // Bind methods
    this.handleSuccess = this.handleSuccess.bind(this);
    this.handleFailed = this.handleFailed.bind(this);
    this.handlePopState = this.handlePopState.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    
    // Listen for URL changes
    window.addEventListener('popstate', this.handlePopState);
  }

  // URL search params management
  setSearchParams(params) {
    const url = new URL(window.location.href);
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.set(key, value);
    });
    window.history.replaceState({}, '', url.toString());
    this.searchParams = new URLSearchParams(url.search);
  }

  removeSearchParam(paramName) {
    const url = new URL(window.location.href);
    url.searchParams.delete(paramName);
    window.history.replaceState({}, '', url.toString());
    this.searchParams = new URLSearchParams(url.search);
  }

  handlePopState() {
    this.searchParams = new URLSearchParams(window.location.search);
    this.checkForSessionToken();
  }

  async loadWebComponent() {
    try {
      await import("./nl-wallet-web.js");
      if (this.buttonElement) {
        this.buttonElement.addEventListener("success", this.handleSuccess);
        this.buttonElement.addEventListener("failed", this.handleFailed);
        this.buttonElement.addEventListener("click", this.handleButtonClick);
      }
    } catch (error) {
      console.warn('Could not load nl-wallet-web.js:', error);
    }
  }

  handleSuccess(e) {
    if (e.detail && e.detail.length > 1) {
      const session_token = e.detail[0];
      const session_type = e.detail[1];

      // this only works for cross_device without a configured return URL
      if (session_type === "cross_device") {
        this.setSearchParams({ session_token });
        // Trigger the check for session token after setting it
        this.checkForSessionToken();
      }
    }
    console.log("Success event received:", e.detail);
  }

  handleFailed(e) {
    console.log("Failed event received:", e.detail);
  }

  async fetchRequestedCredentials() {
    if (!this.apiKey || !this.clientId) return [];
    
    const cacheKey = `${this.clientId}-${this.walletConnectHost || "default"}`;
    
    // Check if we already have data in cache
    const cached = credentialsCache.get(cacheKey);
    if (cached?.data) {
      return cached.data;
    }
    
    // Check if there's already a request in progress
    if (cached?.promise) {
      return await cached.promise;
    }
    
    const fetchPromise = (async () => {
      try {
        const baseUrl = this.walletConnectHost || "https://wallet-connect.eu";
        const url = `${baseUrl}/api/client/${this.clientId}/requested-credentials`;
        const headers = { 'Authorization': `Bearer ${this.apiKey}` };
        
        const response = await fetch(url, { method: 'GET', headers });
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const responseData = await response.json();
        
        // Extract credentials from the response
        const credentials = responseData?.data?.requestedCredentials || [];
        
        // Cache the result
        credentialsCache.set(cacheKey, { data: credentials });
        return credentials;
      } catch (error) {
        // Remove failed request from cache
        credentialsCache.delete(cacheKey);
        throw error;
      }
    })();
    
    // Cache the promise to prevent duplicate requests
    credentialsCache.set(cacheKey, { promise: fetchPromise });
    
    return await fetchPromise;
  }

  injectCredentialsIntoShadowDOM(credentials, retryCount = 0) {
    const maxRetries = 10;
    const walletButton = this.buttonElement;
    
    if (!walletButton || !walletButton.shadowRoot) {
      return;
    }

    // Remove any existing credential info
    const existingCredentials = walletButton.shadowRoot.querySelector('.required-credentials');
    if (existingCredentials) {
      existingCredentials.remove();
    }

    if (credentials.length === 0) return;

    // Look for the modal and website section
    const modal = walletButton.shadowRoot.querySelector('.modal');
    if (!modal) {
      // Retry if modal not found yet
      if (retryCount < maxRetries) {
        setTimeout(() => {
          this.injectCredentialsIntoShadowDOM(credentials, retryCount + 1);
        }, 200);
        return;
      }
      return;
    }

    const websiteSection = modal.querySelector('.website');

    // Determine language and translations
    const isNL = this.lang === 'nl';
    const headerText = isNL ? 'Benodigde Attestaties:' : 'Required Credentials:';
    const getLinkText = isNL ? '→ Verkrijg attestatie' : '→ Get credential';

    // Create credential info element
    const credentialsDiv = document.createElement('div');
    credentialsDiv.className = 'required-credentials';
    credentialsDiv.innerHTML = `
      <div style="
        background: #f8f9fa;
        border: 1px solid #e9ecef;
        border-radius: 6px;
        padding: 12px;
        font-family: inherit;
        font-size: 13px;
        line-height: 1.4;
      ">
        <div style="margin: 0 0 8px 0; color: #212529; font-size: 14px; font-weight: 600;">${headerText}</div>
        ${credentials.map(credential => {
          const credentialName = isNL ? credential.credentialName.nl : credential.credentialName.en;
          return `
            <div style="margin-bottom: 6px; display: flex; align-items: center; flex-wrap: wrap; gap: 8px;">
              <span style="color: #495057; font-weight: 500;">${credentialName}</span>
              ${credential.websiteUrl ? `
                <a href="${credential.websiteUrl}" target="_blank" rel="noopener noreferrer" style="
                  color: #0066cc;
                  text-decoration: none;
                  font-size: 12px;
                  white-space: nowrap;
                ">${getLinkText}</a>
              ` : ''}
            </div>
          `;
        }).join('')}
      </div>
    `;

    // Insert the credentials div after the website section
    if (websiteSection) {
      websiteSection.insertAdjacentElement('afterend', credentialsDiv);
    } else {
      // Fallback: insert at the beginning of modal
      modal.insertBefore(credentialsDiv, modal.firstChild);
    }
  }

  async handleButtonClick(event) {
    try {
      const credentials = await this.fetchRequestedCredentials();
      
      if (credentials && credentials.length > 0) {
        // Inject credentials into the shadow DOM with multiple attempts
        setTimeout(() => {
          this.injectCredentialsIntoShadowDOM(credentials);
        }, 100);
      }
    } catch (error) {
      console.error('Failed to fetch credentials:', error);
    }
  }

  async fetchDisclosedAttributes(sessionToken, nonce = null) {
    this.setLoading(true);
    
    const host = this.apiKey ? this.walletConnectHost || "https://wallet-connect.eu" : "";
    let url = `${host}/api/disclosed-attributes?session_token=${sessionToken}&client_id=${this.clientId}`;
    if (nonce) url = `${url}&nonce=${nonce}`;

    const headers = this.apiKey ? { 'Authorization': `Bearer ${this.apiKey}` } : {};

    try {
      const response = await fetch(url, { headers });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      
      console.log("Disclosed attributes:", data);
      this.onSuccess(data);
      this.removeSearchParam('session_token');
      this.removeSearchParam('nonce');
      // Small delay to allow the success handler to execute before clearing loading
      setTimeout(() => {
        this.setLoading(false);
      }, 100);
    } catch (error) {
      console.log(error.message);
      this.setError(error.message);
      // Remove query params even when request fails
      this.removeSearchParam('session_token');
      this.removeSearchParam('nonce');
      this.setLoading(false);
    }
  }

  checkForSessionToken() {
    const sessionToken = this.searchParams.get("session_token");
    const nonce = this.searchParams.get("nonce");

    if (sessionToken) {
      this.fetchDisclosedAttributes(sessionToken, nonce);
    }
  }

  setLoading(loading) {
    this.loading = loading;
    this.render();
  }

  setError(error) {
    this.error = error;
    this.render();
  }

  constructURI(session_type) {
    let request_uri = `${this.walletConnectHost}/disclosure/${this.clientId}/request_uri?session_type=${session_type}`;
    let request_uri_method = "post";
    let client_id_uri = `${this.clientId}.example.com`;

    return `walletdebuginteraction://wallet.edi.rijksoverheid.nl/disclosure_based_issuance?request_uri=${encodeURIComponent(
      request_uri
    )}&request_uri_method=${request_uri_method}&client_id=${client_id_uri}`;
  }

  render() {
    if (!this.container) return;

    if (this.loading) {
      this.container.innerHTML = `
        <div class="attributes">
          <div class="verification-card">
            <h2>Checking attributes...</h2>
            <p>Please wait while we verify your attributes.</p>
          </div>
        </div>
      `;
      return;
    }

    if (this.error) {
      this.container.innerHTML = `
        <div class="attributes">
          <div class="verification-card">
            <h2>Error</h2>
            <p>An error occurred while verifying your attributes: ${this.error}</p>
          </div>
        </div>
      `;
      return;
    }

    const startUrl = `${this.walletConnectHost}/api/create-session?lang=en&return_url=${encodeURIComponent(window.location.href)}`;
    
    const helpBaseUrlAttr = this.helpBaseUrl ? ` help-base-url="${this.helpBaseUrl}"` : '';
    const usecaseAttr = this.issuance ? '' : ` usecase="${this.clientId}"`;
    const sameDeviceUl = this.constructURI("same_device");
    const crossDeviceUl = this.constructURI("cross_device");
    
    this.container.innerHTML = `
      <nl-wallet-button
        text="${this.buttonText}"${usecaseAttr}
        start-url="${startUrl}"
        lang="${this.lang}"${helpBaseUrlAttr}
        same-device-ul="${sameDeviceUl}"
        cross-device-ul="${crossDeviceUl}"
      ></nl-wallet-button>
    `;

    // Re-attach event listeners after re-rendering
    this.buttonElement = this.container.querySelector('nl-wallet-button');
    if (this.buttonElement) {
      this.buttonElement.addEventListener("success", this.handleSuccess);
      this.buttonElement.addEventListener("failed", this.handleFailed);
      this.buttonElement.addEventListener("click", this.handleButtonClick);
    }
  }

  mount(containerElement) {
    this.container = containerElement;
    this.loadWebComponent();
    this.render();
    this.checkForSessionToken();
  }

  unmount() {
    if (this.buttonElement) {
      this.buttonElement.removeEventListener("success", this.handleSuccess);
      this.buttonElement.removeEventListener("failed", this.handleFailed);
      this.buttonElement.removeEventListener("click", this.handleButtonClick);
    }
    window.removeEventListener('popstate', this.handlePopState);
    
    if (this.container) {
      this.container.innerHTML = '';
    }
  }
}

// Web Component Definition
class WalletConnectButtonElement extends HTMLElement {
  constructor() {
    super();
    this.walletButton = null;
  }

  static get observedAttributes() {
    return ['clientid', 'client-id', 'apikey', 'api-key', 'walletconnecthost', 'wallet-connect-host', 'label', 'lang', 'helpbaseurl', 'help-base-url', 'issuance'];
  }

  connectedCallback() {
    const isIssuance = this.hasAttribute('issuance');
    const defaultHost = isIssuance ? 'https://issuance.wallet-connect.eu' : 'https://wallet-connect.eu';
    
    // Create the wallet button instance
    this.walletButton = new WalletConnectButton({
      clientId: this.getAttribute('clientId') || this.getAttribute('clientid') || this.getAttribute('client-id'),
      apiKey: this.getAttribute('apiKey') || this.getAttribute('apikey') || this.getAttribute('api-key'),
      walletConnectHost: this.getAttribute('walletConnectHost') || this.getAttribute('walletconnecthost') || this.getAttribute('wallet-connect-host') || defaultHost,
      buttonText: this.getAttribute('label') || 'Connect Wallet',
      lang: this.getAttribute('lang') || 'nl',
      helpBaseUrl: this.getAttribute('helpBaseUrl') || this.getAttribute('helpbaseurl') || this.getAttribute('help-base-url'),
      issuance: isIssuance,
      onSuccess: (attributes) => {
        // Dispatch custom event for success
        this.dispatchEvent(new CustomEvent('success', {
          detail: attributes,
          bubbles: true
        }));
      }
    });

    // Override the original handleFailed to dispatch events
    const originalHandleFailed = this.walletButton.handleFailed.bind(this.walletButton);
    this.walletButton.handleFailed = (e) => {
      originalHandleFailed(e);
      // Dispatch custom event for failure
      this.dispatchEvent(new CustomEvent('failed', {
        detail: e.detail,
        bubbles: true
      }));
    };

    // Mount the wallet button to this element
    this.walletButton.mount(this);
  }

  disconnectedCallback() {
    if (this.walletButton) {
      this.walletButton.unmount();
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (this.walletButton && oldValue !== newValue) {
      // Update the wallet button properties when attributes change
      switch(name.toLowerCase()) {
        case 'clientid':
        case 'client-id':
          this.walletButton.clientId = newValue;
          break;
        case 'apikey':
        case 'api-key':
          this.walletButton.apiKey = newValue;
          break;
        case 'walletconnecthost':
        case 'wallet-connect-host':
          this.walletButton.walletConnectHost = newValue;
          break;
        case 'label':
          this.walletButton.buttonText = newValue;
          break;
        case 'lang':
          this.walletButton.lang = newValue;
          break;
        case 'helpbaseurl':
        case 'help-base-url':
          this.walletButton.helpBaseUrl = newValue;
          break;
        case 'issuance':
          this.walletButton.issuance = this.hasAttribute('issuance');
          break;
      }
      this.walletButton.render();
    }
  }
}

// Register the web component
customElements.define('wallet-connect-button', WalletConnectButtonElement);