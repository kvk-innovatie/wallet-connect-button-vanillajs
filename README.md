# Wallet Connect Button - Vanilla JS

A vanilla JavaScript web component for NP Wallet Connect integration with Node.js backend example. For further explanation and documentation, visit: https://wallet-connect.eu

## Features

- 🚀 **Web Component** - Works with any framework or vanilla HTML
- 🔄 **Auto-build** - Source files in `src/` automatically build to `public/`
- 🖥️ **Dev Server** - Includes Node.js backend with API proxy
- 📦 **CDN Ready** - Automated releases to GitHub/jsDelivr
- 🌍 **Multi-language** - Supports Dutch ("nl") and English ("en")
- ⚡ **Fast Development** - One command to build and start

## Quick Start

### 1. Development Setup
```bash
git clone <repository-url>
npm install
npm run dev        # Build and start server on http://localhost:5031
```

### 2. Production Usage (CDN)
```html
<script src="https://cdn.jsdelivr.net/gh/kvk-innovatie/wallet-connect-button-vanillajs@v1.0.33/wallet-connect-button.js"></script>

<wallet-connect-button
  service-id="your-service-id"
  apiKey="your-api-key"
  label="Share data from your wallet"
  lang="en"
></wallet-connect-button>
```

## Project Structure

```
├── src/                          # Source files
│   ├── index.html               # Example HTML page
│   ├── WalletConnectButton.js   # Web component source
│   └── nl-wallet-web.js         # NP Wallet library
├── public/                       # Auto-generated (gitignored)
│   ├── index.html               # Built from src/
│   └── wallet-connect-button.js # Combined component
├── server.mjs                    # Node.js development server
├── build.js                      # Build script
├── release.sh                    # Automated release script
└── package.json                  # Dependencies and scripts
```

## Web Component API

### Attributes
- `service-id` - The registration's identifier. NB Wallet Connect calls it a
  **service id**: one company registers a service per website or application.
- `client-id` - The original name for the same value, still fully supported.
  Give either one; `service-id` wins when both are set.

With the `nbwallet` attribute the button talks to NB Wallet Connect, which has renamed
this identifier throughout its API (`service_id`, `/api/service/...`). Every other
variant still calls its host with `client_id`. That switch is automatic; you only
choose which prop name to write.
- `apiKey` - Your API key (optional)
- `walletConnectHost` - Wallet connect host URL (optional, defaults to https://wallet-connect.eu)
- `label` - Button text (optional, defaults to "Connect Wallet")
- `lang` - Language for the wallet interface (optional, defaults to "nl", supports "nl" and "en")
- `return-url` - Where the wallet app sends the user after a same-device disclosure; the
  verifier appends `session_token` to it (optional, defaults to the address of the page the
  button is on). Set it when the button lives in an iframe (see below).

### Embedding in an iframe

Cross-device (QR code) works in an iframe as is. Same-device needs two things, because the
wallet app returns the user to a page and the button inside the iframe cannot see the
address of the page around it:

1. Set `return-url` to the full address of the page that contains the iframe.
2. On that page, when it loads with `session_token` (and, if present, `nonce`) in its query
   string, hand them to the iframe. Either append them to the iframe's `src`, or post them in:

```javascript
const params = new URLSearchParams(window.location.search);
const sessionToken = params.get("session_token");
if (sessionToken) {
  const iframe = document.querySelector("iframe#wallet");
  iframe.addEventListener("load", () => {
    iframe.contentWindow.postMessage(
      { type: "wallet-connect-session", session_token: sessionToken, nonce: params.get("nonce") ?? undefined },
      new URL(iframe.src).origin,
    );
  });
  // Optional: drop the used token from the page's address so a reload doesn't retry it.
  params.delete("session_token");
  params.delete("nonce");
  history.replaceState({}, "", `${location.pathname}${params.size ? `?${params}` : ""}`);
}
```

The button only accepts the message when it comes from the origin of `return-url`. It then
fetches the disclosed attributes and dispatches the `success` event inside the iframe,
exactly as it does when the token is in its own query string.

### Events
```javascript
const walletButton = document.querySelector('wallet-connect-button');

// Successful wallet connection
walletButton.addEventListener('success', (event) => {
  const attributes = event.detail;
  console.log('Received attributes:', attributes);
});

// Failed wallet connection
walletButton.addEventListener('failed', (event) => {
  console.log('Connection failed:', event.detail);
});
```

## Development Commands

```bash
# Development
npm run dev          # Build and start development server
npm run build        # Build source files to public/
npm start            # Start server only (assumes files are built)

# Release (maintainers only)
./release.sh         # Auto-increment version, build, and release to GitHub
```

## Backend Integration

The included Node.js server (`server.mjs`) provides:

- **Static file serving** from `public/` folder
- **API proxy** to wallet-connect.eu (handles CORS and authentication)
- **Development environment** for testing the web component

### API Proxy Endpoint
```
GET /api/disclosed-attributes?session_token=...&client_id=...
```

This proxies requests to `wallet-connect.eu` with proper authentication headers.

## Build Process

1. **Source files** (`src/`) are combined into a single web component
2. **Built files** are output to `public/` folder
3. **Development server** serves files from `public/`
4. **Release process** copies to root for CDN access

## Browser Support

- Modern browsers with Web Components support
- Chrome 67+, Firefox 63+, Safari 13.1+, Edge 79+
- Uses native Custom Elements and ES6 modules

## Contributing

1. Edit files in `src/` directory
2. Run `npm run dev` to test changes
3. Commit source files only (`public/` is gitignored)
4. Releases are handled automatically via `./release.sh`

## Changes

### 1.0.33
- New `return-url` attribute: where the wallet returns the user after a same-device disclosure (defaults to the page's own address, as before).
- The button accepts a `wallet-connect-session` message with the `session_token` from the page named by `return-url`, so it works inside an iframe. See "Embedding in an iframe".

### 1.0.26
- Pass the `clientId` attribute through to the embedded `<nl-wallet-button>` as `client-id`, so the "No app yet?" link under the QR code becomes `<help-base-url>?client_id=<clientId>` (employee onboarding hand-off).
- NB Wallet (`nbwallet`) issuance deep links now use the https universal link base `https://nbwallet.org/deeplink/...` instead of the custom `businesswalletdebuginteraction://` scheme. Business Wallet and NL Wallet links are unchanged.

## License

MIT