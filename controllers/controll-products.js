const products = require('./../models/products');
const Product = require('./../models/products');

module.exports = {
    // Obtener todos los productos
    findAll: async (req, res) => {
        try {
            const result = await Product.find({});
            return res.status(200).json({ data: result });
        } catch (error) {
            return res.status(500).json({ err: error.message });
        }
    },

    // Obtener un producto por ID
    findById: async (req, res) => {
        try {
            const result = await Product.findById(req.params.id);
            if (!result) {
                return res.status(404).json({ message: 'Producto no encontrado' });
            }
            return res.status(200).json({ data: result });
        } catch (error) {
            return res.status(500).json({ err: error.message });
        }
    },

    create: async function (req, res) {
        try {
            // Consulta el producto con el ID más alto
            const highestIdProduct = await Product.findOne().sort({ id: -1 });
            let newId = 1; // Inicializa el nuevo id en 1 si no hay productos existentes
            if (highestIdProduct) {
                newId = highestIdProduct.id + 1; // Incrementa el id del producto con el ID más alto
            }


            const newProduct = new Product({ id: newId, ...req.body });


            await newProduct.save();

            return res.status(201).json({ data: newProduct });
        } catch (error) {
            if (error.code === 11000) { // Manejo de error de clave duplicada
                return res.status(400).json({ message: 'Duplicate ID Error', error: error });
            }
            if (error.name === 'ValidationError') {
                return res.status(400).json({ message: 'Validation Error', errors: error.errors });
            }
            return res.status(500).json({ message: 'Internal Server Error', error: error });
        }
    },




    // Actualizar un producto por ID
    update: async (req, res) => {
        try {
            const result = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
            if (!result) {
                return res.status(404).json({ message: 'Producto no encontrado' });
            }
            return res.status(200).json({ data: result });
        } catch (error) {
            return res.status(400).json({ err: error.message });
        }
    },


    deleteProduct: async (req, res) => {
        try {
            const result = await Product.findByIdAndDelete(req.params.id);
            if (!result) {
                return res.status(404).json({ message: 'Producto no encontrado' });
            }
            return res.status(200).json({ message: 'Producto eliminado' });
        } catch (error) {
            return res.status(500).json({ err: error.message });
        }
    },
    sellProduct: async (req, res) => {
        try {
            const { id, nombre, cantidad } = req.body;

            let product;

            if (id) {

                product = await Product.findById(id);
            } else if (nombre) {

                product = await Product.findOne({ nombre });
            }

            if (!product) {
                return res.status(404).json({ message: 'Producto no encontrado' });
            }


            if (product.inventario < cantidad) {
                return res.status(400).json({ message: 'Inventario insuficiente' });
            }

            inventario
            product.inventario -= cantidad;


            await product.save();

            return res.status(200).json({ message: 'Producto vendido', data: product });
        } catch (error) {
            return res.status(500).json({ err: error.message });
        }
    },
    searchByName: async (req, res) => {
        try {
            const { nombre } = req.query;
            const productos = await Product.find({ nombre: { $regex: new RegExp(nombre, 'i') } });
            return res.status(200).json({ data: productos });
        } catch (error) {
            return res.status(500).json({ err: error.message });
        }
    }

};
