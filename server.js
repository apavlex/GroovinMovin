import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
// Serve static files from the 'dist' directory
app.use(express.static(path.join(__dirname, 'dist')));

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

// Handle all other routes by serving 'index.html'
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
