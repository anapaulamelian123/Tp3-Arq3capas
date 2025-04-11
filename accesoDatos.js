let productos = [];

function agregarProducto(nombre) {
  productos.push(nombre);
}

function obtenerProductos() {
  return productos;
}

module.exports = { agregarProducto, obtenerProductos };
