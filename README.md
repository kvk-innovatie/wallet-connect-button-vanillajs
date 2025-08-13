# Wallet Connect Button - Vanilla JS

A vanilla JavaScript web component for NL Wallet Connect integration.

## Usage

### Via CDN (Recommended for Production)

```html
<script src="https://cdn.jsdelivr.net/gh/kvk-innovatie/wallet-connect-button-vanillajs@v1.0.0/wallet-connect-button.js"></script>
```

### HTML

```html
<wallet-connect-button
  clientId="your-client-id"
  apiKey="your-api-key"
  walletConnectHost="https://wallet-connect.eu"
  label="Connect with NL Wallet"
></wallet-connect-button>
```

### JavaScript Event Handling

```javascript
const walletButton = document.querySelector('wallet-connect-button');

walletButton.addEventListener('success', (event) => {
  console.log('Wallet connected:', event.detail);
});

walletButton.addEventListener('failed', (event) => {
  console.log('Connection failed:', event.detail);
});
```

## Attributes

- `clientId` - Your wallet connect client ID
- `apiKey` - Your API key (optional)
- `walletConnectHost` - Wallet connect host URL (optional, defaults to https://wallet-connect.eu)
- `label` - Button text (optional, defaults to "Connect Wallet")

## Events

- `success` - Fired when wallet connection succeeds, contains attribute data in `event.detail`
- `failed` - Fired when wallet connection fails, contains error info in `event.detail`

## Development

```bash
npm install
npm run build
```

## License

MIT