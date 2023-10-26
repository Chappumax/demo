const express = require('express');
const app = express();
const port = 3000;

app.get('/get', (req, res) => {
    res.json({ message: 'GET request successful' });
});

app.post('/post', (req, res) => {
    res.json({ message: 'POST request successful' });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
