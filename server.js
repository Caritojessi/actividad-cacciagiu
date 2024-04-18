const express = require('express');
const app = express();
const PORT = process.env.PORT || 2023;

// Array con el top 5 de tecnologías
const topTecnologias = ["JavaScript", "Python", "React", "Node.js", "php"];

// Recurso para manejar la ruta "/stack" con parámetro
app.get('/stack/:tecnologia', (req, res) => {
    const tecnologia = req.params.tecnologia;
    if (topTecnologias.includes(tecnologia)) {
        res.send('¡Donde te dejo el CV?');
    } else {
        res.send('A leer la documentación entonces...');
    }
});

// Definir las rutas antes de la definición de las rutas "/stack/:tecnologia"
app.get('/', (req, res) => {
    res.send('Carolina Cacciagiu');
});

app.get('/materia', (req, res) => {
    res.send('Esta materia es Aplicaciones Híbridas');
});

app.get('/profesor', (req, res) => {
    res.send('La profe de esta materia es: Camila Belen');
});

// http://localhost:2023/productos?id=3
const productos = [
    { id: 1, nombre: 'Remera', precio: 15000 },
    { id: 2, nombre: 'Pollera', precio: 20000 },
    { id: 3, nombre: 'Pantalón', precio: 38000 },
    { id: 4, nombre: 'Celular', precio: 700000 },
    { id: 5, nombre: 'Zapatos', precio: 60000 },
    { id: 6, nombre: 'Campera', precio: 100000 },
    { id: 7, nombre: 'Tablet', precio: 400000 },
    { id: 8, nombre: 'Short', precio: 25000 },
    { id: 9, nombre: 'Bufanda', precio: 9000 },
    { id: 10, nombre: 'Botas', precio: 120000 }
];


app.get('/productos', (req, res) => {
    let filteredProducts = productos;

    if (req.query.id) {
        const id = parseInt(req.query.id);
        filteredProducts = productos.filter(producto => producto.id === id);
    }

    if (req.query.minimo) {
        const minimo = parseFloat(req.query.minimo);
        filteredProducts = filteredProducts.filter(producto => producto.precio >= minimo);
    }

    if (req.query.maximo) {
        const maximo = parseFloat(req.query.maximo);
        filteredProducts = filteredProducts.filter(producto => producto.precio <= maximo);
    }

    res.json(filteredProducts);
});

// Recurso para manejar cualquier otra ruta
app.get('*', (req, res) => {
    res.status(404).send('Página no encontrada');
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
