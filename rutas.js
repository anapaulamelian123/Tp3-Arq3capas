const express = require('express');
const router = express.Router();
const { procesarNuevoProducto, listarProductos } = require('./logicaNegocio');

router.post('/agregar', (req, res) => {
  const nombre = req.body.nombre;
  const resultado = procesarNuevoProducto(nombre);

  if (resultado.error) {
    res.status(400).json(resultado);
  } else {
    res.status(201).json(resultado);
  }
});

router.get('/productos', (req, res) => {
  const productos = listarProductos();
  res.json({ productos });
});

module.exports = router;
