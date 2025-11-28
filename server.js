import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(__dirname));

// Serve the main HTML file
app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'index.html'));
});

// Health check endpoint for Vercel
app.get('/health', (req, res) => {
    res.json({ status: 'OK', message: 'ANONBUY is running!' });
});

app.listen(PORT, () => {
    console.log(`🚀 ANONBUY server running on http://localhost:${PORT}`);
    console.log('📝 Created by Brian for Computer Science Assignment');
});

export default app;
