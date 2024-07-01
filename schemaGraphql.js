// schema.js
const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Product {
    id: ID!
    nombre: String!
    inventario: Int!
    tipo_producto: String!
    fecha_vencimiento: String
    precio: Float!
    fecha_ingreso: String
    estado_actual: String
  }

  type Query {
    products: [Product]
    product(id: ID!): Product
  }

  type Mutation {
    createProduct(nombre: String!, inventario: Int!, tipo_producto: String!, fecha_vencimiento: String, precio: Float!): Product
    updateProduct(id: ID!, nombre: String, inventario: Int, tipo_producto: String, fecha_vencimiento: String, precio: Float): Product
    deleteProduct(id: ID!): Product
    sellProduct(id: ID, nombre: String, cantidad: Int!): Product
  }
`;

module.exports = typeDefs;
