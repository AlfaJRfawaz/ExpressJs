const express = require('express'); // ngimport dulu sebelum 

const app = express();
const port = 3000

app.get('/home', (req, res) => {
    res.send('Halo saya belajar express')
});

app.listen(port, function() {
    console.log(`Server berjalan di localhost ${port}`);
});