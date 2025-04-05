const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors());

app.get('/apps', async (req, res) => {
  try {
    const response = await fetch('https://api.steampowered.com/ISteamApps/GetAppList/v2/');
    const data = await response.json();
    res.json(data.applist.apps);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch Steam apps' });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server running at http://localhost:${PORT}`);
});
