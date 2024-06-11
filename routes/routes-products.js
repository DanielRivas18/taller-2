// routes/products.js

// Importar controladores
const { findAll, findById, create, update, deleteProduct, sellProduct, searchByName } = require('../controllers/controll-products');

// Importar Express Router
const routes = require('express').Router();

// Definir las etiquetas personalizadas
/**
 * @swagger
 * tags:
 *   name: Productos
 *   description: Operaciones relacionadas con productos
 */

// Ruta para obtener todos los productos
/**
 * @swagger
 * /:
 *   get:
 *     summary: Obtener todos los productos
 *     description: Devuelve todos los productos disponibles.
 *     tags: [Productos]
 *     responses:
 *       '200':
 *         description: OK. Devuelve un array de productos.
 *       '500':
 *         description: Error del servidor. No se pudieron recuperar los productos.
 */
routes.get('/', findAll);

// Ruta para obtener un producto por su ID
/**
 * @swagger
 * /{id}:
 *   get:
 *     summary: Obtener un producto por ID
 *     description: Devuelve un producto según su ID.
 *     tags: [Productos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del producto a recuperar.
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: OK. Devuelve el producto solicitado.
 *       '404':
 *         description: Producto no encontrado. No se encontró ningún producto con el ID especificado.
 *       '500':
 *         description: Error del servidor. No se pudo recuperar el producto.
 */
routes.get('/:id', findById);

// Ruta para crear un nuevo producto
/**
 * @swagger
 * /:
 *   post:
 *     summary: Crear un nuevo producto
 *     description: Crea un nuevo producto con los datos proporcionados en el cuerpo de la solicitud.
 *     tags: [Productos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               inventario:
 *                 type: number
 *               tipo_producto:
 *                 type: string
 *               fecha_vencimiento:
 *                 type: string
 *                 format: date
 *               precio:
 *                 type: number
 *     responses:
 *       '201':
 *         description: Producto creado exitosamente. Devuelve el nuevo producto creado.
 *       '400':
 *         description: Error de validación. Los datos del producto no son válidos.
 *       '500':
 *         description: Error del servidor. No se pudo crear el producto.
 */
routes.post('/', create);

// Ruta para actualizar un producto existente por su ID
/**
 * @swagger
 * /{id}:
 *   put:
 *     summary: Actualizar un producto por ID
 *     description: Actualiza un producto existente según su ID.
 *     tags: [Productos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del producto a actualizar.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               inventario:
 *                 type: number
 *               tipo_producto:
 *                 type: string
 *               fecha_vencimiento:
 *                 type: string
 *                 format: date
 *               precio:
 *                 type: number
 *     responses:
 *       '200':
 *         description: Producto actualizado exitosamente. Devuelve el producto actualizado.
 *       '400':
 *         description: Error de validación. Los datos del producto no son válidos.
 *       '404':
 *         description: Producto no encontrado. No se encontró ningún producto con el ID especificado.
 *       '500':
 *         description: Error del servidor. No se pudo actualizar el producto.
 */
routes.put('/:id', update);

// Ruta para eliminar un producto por su ID
/**
 * @swagger
 * /{id}:
 *   delete:
 *     summary: Eliminar un producto por ID
 *     description: Elimina un producto según su ID.
 *     tags: [Productos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del producto a eliminar.
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Producto eliminado exitosamente.
 *       '404':
 *         description: Producto no encontrado. No se encontró ningún producto con el ID especificado.
 *       '500':
 *         description: Error del servidor. No se pudo eliminar el producto.
 */
routes.delete('/:id', deleteProduct);

// Ruta para vender un producto
/**
 * @swagger
 * /sell:
 *   post:
 *     summary: Vender un producto
 *     description: Vende un producto reduciendo la cantidad del inventario según la cantidad especificada.
 *     tags: [Productos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *                 description: ID del producto a vender.
 *               nombre:
 *                 type: string
 *                 description: Nombre del producto a vender.
 *               cantidad:
 *                 type: number
 *                 description: Cantidad del producto a vender.
 *     responses:
 *       '200':
 *         description: Producto vendido exitosamente. Devuelve el producto actualizado.
 *       '400':
 *         description: Inventario insuficiente o error de validación. No se pudo vender el producto.
 *       '404':
 *         description: Producto no encontrado. No se encontró ningún producto con el ID especificado o el nombre proporcionado.
 *       '500':
 *         description: Error del servidor. No se pudo procesar la venta del producto.
 */
routes.post('/sell', sellProduct)

// Ruta para buscar productos por nombre
/**
 * @swagger
 * /search:
 *   get:
 *     summary: Buscar productos por nombre
 *     description: Devuelve una lista de productos cuyo nombre coincide con el texto dado.
 *     tags: [Productos]
 *     parameters:
 *       - in: query
 *         name: nombre
 *         required: true
 *         description: Texto para buscar en los nombres de los productos.
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: OK. Devuelve un array de productos.
 *       '500':
 *         description: Error del servidor. No se pudieron recuperar los productos.
 */
routes.get('/search', searchByName);

// Exportar rutas
module.exports = routes;
