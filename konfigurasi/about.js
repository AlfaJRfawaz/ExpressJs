require("dotenv").config()
const express = require('express');
const app = express();

// app.get('/about', (req, res) => {
//     res.send('Woyy lahh ngopi!!!')
// });

// app.listen(port, function() {
//     console.log(`Kalo gak ngopi ngeteh! ${port}`);
// });

// external configuration

// cara mengakses dotenv

app.get('/about', (req, res) => {
    let status = process.env.PORT == 5000 ? "Production" : "Development"
    res.send(`Halo, anda sedang di halaman : ${status} page.`)
})

app.listen(process.env.PORT, function() {
    console.log(`Anda sedang berjalan menggunakan port : ${process.env.PORT}`);
})