// resolvers.js
const Product = require('./models/products');

const resolvers = {
    Query: {
        products: async () => {
            try {
                const result = await Product.find({});
                return result;
            } catch (error) {
                throw new Error(error.message);
            }
        },
        product: async (_, { id }) => {
            try {
                const result = await Product.findById(id);
                if (!result) {
                    throw new Error('Producto no encontrado');
                }
                return result;
            } catch (error) {
                throw new Error(error.message);
            }
        },
    },
    Mutation: {
        createProduct: async (_, { nombre, inventario, tipo_producto, fecha_vencimiento, precio }) => {
            try {
                const highestIdProduct = await Product.findOne().sort({ id: -1 });
                let newId = 1; // Inicializa el nuevo id en 1 si no hay productos existentes
                if (highestIdProduct) {
                    newId = highestIdProduct.id + 1; // Incrementa el id del producto con el ID más alto
                }
                const newProduct = new Product({ id: newId, nombre, inventario, tipo_producto, fecha_vencimiento, precio });
                await newProduct.save();
                return newProduct;
            } catch (error) {
                throw new Error(error.message);
            }
        },
        updateProduct: async (_, { id, nombre, inventario, tipo_producto, fecha_vencimiento, precio }) => {
            try {
                const updatedProduct = await Product.findByIdAndUpdate(id, { nombre, inventario, tipo_producto, fecha_vencimiento, precio }, { new: true, runValidators: true });
                if (!updatedProduct) {
                    throw new Error('Producto no encontrado');
                }
                return updatedProduct;
            } catch (error) {
                throw new Error(error.message);
            }
        },
        deleteProduct: async (_, { id }) => {
            try {
                const deletedProduct = await Product.findByIdAndDelete(id);
                if (!deletedProduct) {
                    throw new Error('Producto no encontrado');
                }
                return deletedProduct;
            } catch (error) {
                throw new Error(error.message);
            }
        },
        sellProduct: async (_, { id, nombre, cantidad }) => {
            try {
                let product;
                if (id) {
                    product = await Product.findById(id);
                } else if (nombre) {
                    product = await Product.findOne({ nombre });
                }
                if (!product) {
                    throw new Error('Producto no encontrado');
                }
                if (product.inventario < cantidad) {
                    throw new Error('Inventario insuficiente');
                }
                product.inventario -= cantidad;
                await product.save();
                return product;
            } catch (error) {
                throw new Error(error.message);
            }
        },
    },
};

module.exports = resolvers;
