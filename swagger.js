const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'MyAPI',
        version: '1.0.0',
        description: 'Documentacion de API Proyecto 1 Electiva II',
        contact: {
            name: 'Jose Daniel Rivas Soraca',
            url: 'https://github.com/DanielRivas18',
            email: 'jose.rivas@uptc.edu.co'
        }
      
    },
    servers: [
        {
            url: 'https://taller-2-sigma.vercel.app/api/products',
            description: 'Servidor de desarrollo'
        }
    ]
};

const options = {
    swaggerDefinition,
    apis: ['./routes/*.js'], // Aquí defines la ubicación de tus archivos de rutas
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
