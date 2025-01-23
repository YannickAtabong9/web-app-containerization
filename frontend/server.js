const express = require('express');
const promClient = require('prom-client');

const app = express();
const port = 3000; // Ensure this matches the port in your Docker setup

// Create a Prometheus Registry
const register = new promClient.Registry();

// Add some example metrics
const httpRequestCounter = new promClient.Counter({
  name: 'http_requests_total',
  help: 'Total number of HTTP requests',
  labelNames: ['method', 'route', 'status'],
});

app.use((req, res, next) => {
  res.on('finish', () => {
    httpRequestCounter.labels(req.method, req.path, res.statusCode).inc();
  });
  next();
});

// Expose the metrics endpoint
app.get('/metrics', async (req, res) => {
  try {
    res.set('Content-Type', register.contentType);
    res.end(await register.metrics());
  } catch (err) {
    res.status(500).end(err.message);
  }
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Frontend server is running on port ${port}`);
});
