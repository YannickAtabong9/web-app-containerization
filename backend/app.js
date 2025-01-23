const express = require('express');
const promClient = require('prom-client');

const app = express();
const port = 3001; // Ensure this is set to 3001

// Metrics route for Prometheus to scrape
app.get('/metrics', async (req, res) => {
  try {
    const metrics = await promClient.register.metrics();
    res.set('Content-Type', promClient.register.contentType);
    res.end(metrics);
  } catch (err) {
    res.status(500).end(err.message);
  }
});

// Start the server and listen on port 3001
app.listen(port, '0.0.0.0', () => {
  console.log(`Backend server is running on port ${port}`);
});
