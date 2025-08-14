import express from 'express';
import axios from 'axios';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.json());

// Serve static files from public directory  
app.use(express.static(path.join(__dirname, 'public')));

// Proxy endpoint for disclosed attributes
app.get('/api/disclosed-attributes*', async (req, res) => {
  const apiKey = '27ff4d0ceb03b0cd02a4b4d6fe4fe6436791223be38823bc97b8319a5991c769';
  
  try {
    const response = await axios({
      method: req.method,
      url: `https://wallet-connect.eu${req.url}`,
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
    });
    
    res.status(response.status).json(response.data);
  } catch (error) {
    if (error.response) {
      res.status(error.response.status).json(error.response.data);
    } else {
      res.status(500).json({ error: 'Proxy error', message: error.message });
    }
  }
});

app.listen(4000, () => {
  console.log('Node.js backend running on port 4000');
});