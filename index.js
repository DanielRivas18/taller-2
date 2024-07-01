const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./schemaGraphql');
const resolvers = require('./resolvers');

require('./drivers/connect-db')

const app = express()
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

app.set('PORT', process.env.PORT || 3000)


// Configurar Apollo Server
const server = new ApolloServer({
    typeDefs,
    resolvers
});

async function startApolloServer() {
    await server.start();  // Asegúrate de esperar a que Apollo Server se inicie completamente
    server.applyMiddleware({ app });
}

startApolloServer().then(() => {
    // ...definición de otras rutas y middlewares...
    app.listen({ port: 4000 }, () =>
        console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
    );
}).catch(err => {
    console.error('Error starting Apollo Server:', err);
});



app.use('/api/products', require('./routes/routes-products'))

const swaggerUI = require('swagger-ui-express')
const swaggerSpec = require('./swagger')
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec))




app.listen(app.get('PORT'), () => console.log(`Server Ready al port ${app.get('PORT')}`))