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

    create: async function(req, res) {
        try {
            const { id } = req.body;
            const existingProduct = await products.findOne({ id });
            if (existingProduct) {
                return res.status(400).json({ message: 'Product with this ID already exists' });
            }
    
            const newProduct = new products(req.body);
            await newProduct.save();
            return res.status(201).json({ data: newProduct });
        } catch (error) {
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

    // Eliminar un producto por ID
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
    }
};
