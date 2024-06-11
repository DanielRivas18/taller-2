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
            // Consulta el último producto para obtener su id y luego incrementa para el nuevo producto
            const lastProduct = await Product.findOne().sort({ id: -1 });
            let newId = 1; // Inicializa el nuevo id en 1 si no hay productos existentes
            if (lastProduct) {
                newId = lastProduct.id + 1; // Parsea el id como un número antes de incrementarlo
            }
    
            // Crea un nuevo objeto de producto con el nuevo id y los datos del cuerpo de la solicitud
            const newProduct = new Product({ id: newId, ...req.body });
    
            // Guarda el nuevo producto en la base de datos
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
