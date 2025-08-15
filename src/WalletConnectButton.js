class WalletConnectButton {
  constructor(options = {}) {
    this.clientId = options.clientId;
    this.onSuccess = options.onSuccess || (() => {});
    this.apiKey = options.apiKey;
    this.walletConnectHost = options.walletConnectHost || "https://wallet-connect.eu";
    this.buttonText = options.buttonText || "Connect Wallet";
    this.lang = options.lang || "nl";
    
    this.loading = false;
    this.error = null;
    this.searchParams = new URLSearchParams(window.location.search);
    
    this.buttonElement = null;
    this.container = null;
    
    // Bind methods
    this.handleSuccess = this.handleSuccess.bind(this);
    this.handleFailed = this.handleFailed.bind(this);
    this.handlePopState = this.handlePopState.bind(this);
    
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
      this.setLoading(false);
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
    
    this.container.innerHTML = `
      <nl-wallet-button
        text="${this.buttonText}"
        usecase="${this.clientId}"
        start-url="${startUrl}"
        lang="${this.lang}"
      ></nl-wallet-button>
    `;

    // Re-attach event listeners after re-rendering
    this.buttonElement = this.container.querySelector('nl-wallet-button');
    if (this.buttonElement) {
      this.buttonElement.addEventListener("success", this.handleSuccess);
      this.buttonElement.addEventListener("failed", this.handleFailed);
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
    return ['clientid', 'apikey', 'walletconnecthost', 'label', 'lang'];
  }

  connectedCallback() {
    // Create the wallet button instance
    this.walletButton = new WalletConnectButton({
      clientId: this.getAttribute('clientId') || this.getAttribute('clientid'),
      apiKey: this.getAttribute('apiKey') || this.getAttribute('apikey'),
      walletConnectHost: this.getAttribute('walletConnectHost') || this.getAttribute('walletconnecthost') || 'https://wallet-connect.eu',
      buttonText: this.getAttribute('label') || 'Connect Wallet',
      lang: this.getAttribute('lang') || 'nl',
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
          this.walletButton.clientId = newValue;
          break;
        case 'apikey':
          this.walletButton.apiKey = newValue;
          break;
        case 'walletconnecthost':
          this.walletButton.walletConnectHost = newValue;
          break;
        case 'label':
          this.walletButton.buttonText = newValue;
          break;
        case 'lang':
          this.walletButton.lang = newValue;
          break;
      }
      this.walletButton.render();
    }
  }
}

// Register the web component
customElements.define('wallet-connect-button', WalletConnectButtonElement);