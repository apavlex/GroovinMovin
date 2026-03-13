import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
// Serve static files from the 'dist' directory with cache control
app.use(express.static(path.join(__dirname, 'dist'), {
  maxAge: '1y',
  setHeaders: (res, path) => {
    if (path.endsWith('.html')) {
      res.setHeader('Cache-Control', 'no-cache');
    }
  }
}));

// Also serve from '/GroovinMovin' to handle cases where build artifacts use the old base path
app.use('/GroovinMovin', express.static(path.join(__dirname, 'dist'), {
  maxAge: '1y',
  setHeaders: (res, path) => {
    if (path.endsWith('.html')) {
      res.setHeader('Cache-Control', 'no-cache');
    }
  }
}));

app.post('/api/submit-quote', async (req, res) => {
  const { data } = req.body;
  const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSdXs1pSqaHgDNDhByaLXHQV-yVRxYRjD6A1x0jFqk7-potGgQ/formResponse';
  
  try {
    const params = new URLSearchParams();
    for (const [key, value] of Object.entries(data)) {
      params.append(key, value);
    }

    const response = await fetch(formUrl, {
      method: 'POST',
      body: params,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    });

    if (response.ok || response.status === 0) {
      res.json({ success: true });
    } else {
      res.status(response.status).json({ success: false });
    }
  } catch (error) {
    console.error('Submission error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Handle SPA routing - return index.html EXCEPT for requests that look like assets
app.get('*', (req, res) => {
  // If the request has an extension (like .js, .css, .png), it's a missing asset
  if (req.path.includes('.')) {
    return res.status(404).send('Asset Not Found');
  }
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
