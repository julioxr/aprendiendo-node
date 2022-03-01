/**
 * Servidor clasico de NODE
 */

// const http = require("http"); // import http from "http" -- Forma nueva
// const port = 5000;

// const server = http.createServer((req, res) => {
//     res.end("Hola");
// });

// server.listen(port, () => {
//     console.log("Entraron al server ❤");
// });

/**
 * Servidor con Express
 */

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hola WEB");
});

app.get("/inicio", (req, res) => {
    res.send("PAGINA DE INICIO");
});

app.listen(port, () => console.log("escuchando"));
