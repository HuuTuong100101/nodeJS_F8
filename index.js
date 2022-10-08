const express = require('express');
const app = express();
const port = 3000;

app.get('/trangchu', (req,res) => res.send('Hello word!'));

app.listen(port, () => console.log(`Server running at http://localhost:${port}`))