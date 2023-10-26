const express = require('express');
const app = express();
const port = 3000;

app.get('/get', (req, res) => {
    res.json({ message: 'GET REQUEST SUCCESSFUL' });
});

app.post('/post', (req, res) => {
    res.json({ message: 'POST REQUEST SUCCESSFUL' });
});

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});
