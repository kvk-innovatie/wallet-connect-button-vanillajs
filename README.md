# Wallet Connect Button - Vanilla JS

A vanilla JavaScript web component for NL Wallet Connect integration with Node.js backend example. For further explanation and documentation, visit: https://wallet-connect.eu

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
npm run dev        # Build and start server on http://localhost:4001
```

### 2. Production Usage (CDN)
```html
<script src="https://cdn.jsdelivr.net/gh/kvk-innovatie/wallet-connect-button-vanillajs@v1.0.9/wallet-connect-button.js"></script>

<wallet-connect-button
  clientId="your-client-id"
  apiKey="your-api-key"
  label="Share data with your wallet"
  lang="en"
></wallet-connect-button>
```

## Project Structure

```
├── src/                          # Source files
│   ├── index.html               # Example HTML page
│   ├── WalletConnectButton.js   # Web component source
│   └── nl-wallet-web.js         # NL Wallet library
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
- `clientId` - Your wallet connect client ID (required)
- `apiKey` - Your API key (optional)
- `walletConnectHost` - Wallet connect host URL (optional, defaults to https://wallet-connect.eu)
- `label` - Button text (optional, defaults to "Connect Wallet")
- `lang` - Language for the wallet interface (optional, defaults to "nl", supports "nl" and "en")

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

## License

MIT