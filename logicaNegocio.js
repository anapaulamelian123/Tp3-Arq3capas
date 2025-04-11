const { agregarProducto, obtenerProductos } = require('./accesoDatos');

function procesarNuevoProducto(nombre) {
  if (!nombre) {
    return { error: 'Falta el nombre del producto' };
  }

  agregarProducto(nombre);
  return { mensaje: `Producto '${nombre}' agregado.` };
}

function listarProductos() {
  return obtenerProductos();
}

module.exports = { procesarNuevoProducto, listarProductos };
