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
const fs = require("fs");
const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// Peticion get y llevar los datos del form con query
// app.get("/formulario", (req, res) => {
//     console.log(req.query);
//     res.send("Gracias " + req.query.nombre + ", Formulario enviado...");
// });

// Peticion post
app.post("/formulario", (req, res) => {
    // console.log(req.query); // para post no se usa query sino body por que la info viaja en el cuerpo del mensaje
    // console.log(req.body);
    const { nombre, apellido } = req.body;
    if (!nombre || !apellido) {
        return res.redirect("/error.html");
    }
    fs.writeFile(`${nombre}.txt`, apellido, (error) => {
        if (error) {
            return res.send("Fallo al crear el archivo");
        }
        res.send("Se creo el archivo");
    });
});

app.get("/", (req, res) => {
    res.send("Hola WEB");
});

app.get("/inicio", (req, res) => {
    res.send("PAGINA DE INICIO");
});

app.listen(port, () => console.log("escuchando"));
