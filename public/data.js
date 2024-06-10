const mongoose = require('mongoose');
require('dotenv').config();
const Product = require('../models/products'); // Asegúrate de que la ruta sea correcta

const data = {

 "6": {
    "id": 6,
    "nombre": "Refresco",
    "inventario": 90,
    "tipo_producto": "Bebidas",
    "fecha_vencimiento": new Date("2024-09-25"),
    "precio": 1500,
    "fecha_ingreso": new Date("2024-05-12"),
    "estado_actual": "No vencido"
  },
  "7": {
    "id": 7,
    "nombre": "Harina",
    "inventario": 180,
    "tipo_producto": "Granos",
    "fecha_vencimiento": new Date("2024-11-10"),
    "precio": 2200,
    "fecha_ingreso": new Date("2024-05-10"),
    "estado_actual": "No vencido"
  },
  "8": {
    "id": 8,
    "nombre": "Azúcar",
    "inventario": 140,
    "tipo_producto": "Endulzantes",
    "fecha_vencimiento": new Date("2025-01-05"),
    "precio": 2800,
    "fecha_ingreso": new Date("2024-05-08"),
    "estado_actual": "No vencido"
  },
  "9": {
    "id": 9,
    "nombre": "Sal",
    "inventario": 160,
    "tipo_producto": "Condimentos",
    "fecha_vencimiento": null,
    "precio": 1800,
    "fecha_ingreso": new Date("2024-04-25"),
    "estado_actual": "No vencido"
  },
  "10": {
    "id": 10,
    "nombre": "Papel Higiénico",
    "inventario": 220,
    "tipo_producto": "Higiene",
    "fecha_vencimiento": null,
    "precio": 3500,
    "fecha_ingreso": new Date("2024-03-15"),
    "estado_actual": "No vencido"
  },
  "11": {
    "id": 11,
    "nombre": "Pan",
    "inventario": 200,
    "tipo_producto": "Panadería",
    "fecha_vencimiento": new Date("2024-05-20"),
    "precio": 1800,
    "fecha_ingreso": new Date("2024-05-14"),
    "estado_actual": "No vencido"
  },
  "12": {
    "id": 12,
    "nombre": "Yogur",
    "inventario": 80,
    "tipo_producto": "Lácteos",
    "fecha_vencimiento": new Date("2024-06-15"),
    "precio": 2200,
    "fecha_ingreso": new Date("2024-05-10"),
    "estado_actual": "No vencido"
  },
  "13": {
    "id": 13,
    "nombre": "Cereal",
    "inventario": 120,
    "tipo_producto": "Cereales",
    "fecha_vencimiento": new Date("2024-09-30"),
    "precio": 3200,
    "fecha_ingreso": new Date("2024-05-08"),
    "estado_actual": "No vencido"
  },
  "14": {
    "id": 14,
    "nombre": "Jugo de Naranja",
    "inventario": 100,
    "tipo_producto": "Bebidas",
    "fecha_vencimiento": new Date("2024-07-25"),
    "precio": 2800,
    "fecha_ingreso": new Date("2024-05-05"),
    "estado_actual": "No vencido"
  },
  "15": {
    "id": 15,
    "nombre": "Manzanas",
    "inventario": 90,
    "tipo_producto": "Frutas",
    "fecha_vencimiento": new Date("2024-05-18"),
    "precio": 3000,
    "fecha_ingreso": new Date("2024-05-12"),
    "estado_actual": "No vencido"
  },
  "16": {
    "id": 16,
    "nombre": "Café",
    "inventario": 100,
    "tipo_producto": "Bebidas",
    "fecha_vencimiento": new Date("2024-12-31"),
    "precio": 3500,
    "fecha_ingreso": new Date("2024-05-18"),
    "estado_actual": "No vencido"
  },
  "17": {
    "id": 17,
    "nombre": "Tomate enlatado",
    "inventario": 80,
    "tipo_producto": "Conservas",
    "fecha_vencimiento": new Date("2025-03-10"),
    "precio": 2800,
    "fecha_ingreso": new Date("2024-05-20"),
    "estado_actual": "No vencido"
  },
  "18": {
    "id": 18,
    "nombre": "Cepillo de dientes",
    "inventario": 150,
    "tipo_producto": "Higiene",
    "fecha_vencimiento": null,
    "precio": 1200,
    "fecha_ingreso": new Date("2024-04-05"),
    "estado_actual": "No vencido"
  },
  "19": {
    "id": 19,
    "nombre": "Atún en lata",
    "inventario": 120,
    "tipo_producto": "Conservas",
    "fecha_vencimiento": new Date("2025-01-15"),
    "precio": 3200,
    "fecha_ingreso": new Date("2024-05-22"),
    "estado_actual": "No vencido"
  },
  "20": {
    "id": 20,
    "nombre": "Pasta dental",
    "inventario": 200,
    "tipo_producto": "Higiene",
    "fecha_vencimiento": null,
    "precio": 1800,
    "fecha_ingreso": new Date("2024-04-12"),
    "estado_actual": "No vencido"
  },
  "26": {
    "id": 26,
    "nombre": "Café instantáneo",
    "inventario": 120,
    "tipo_producto": "Bebidas",
    "fecha_vencimiento": new Date("2024-10-30"),
    "precio": 2800,
    "fecha_ingreso": new Date("2024-06-12"),
    "estado_actual": "No vencido"
  },
  "27": {
    "id": 27,
    "nombre": "Galletas",
    "inventario": 200,
    "tipo_producto": "Golosinas",
    "fecha_vencimiento": new Date("2024-09-15"),
    "precio": 1800,
    "fecha_ingreso": new Date("2024-06-15"),
    "estado_actual": "No vencido"
  },
  "28": {
    "id": 28,
    "nombre": "Cerveza",
    "inventario": 150,
    "tipo_producto": "Bebidas",
    "fecha_vencimiento": new Date("2025-04-20"),
    "precio": 3500,
    "fecha_ingreso": new Date("2024-06-18"),
    "estado_actual": "No vencido"
  },
  "29": {
    "id": 29,
    "nombre": "Mayonesa",
    "inventario": 100,
    "tipo_producto": "Salsas",
    "fecha_vencimiento": new Date("2024-07-30"),
    "precio": 2500,
    "fecha_ingreso": new Date("2024-06-22"),
    "estado_actual": "No vencido"
  },
  "30": {
    "id": 30,
    "nombre": "Pasta",
    "inventario": 180,
    "tipo_producto": "Granos",
    "fecha_vencimiento": new Date("2024-12-10"),
    "precio": 2200,
    "fecha_ingreso": new Date("2024-06-25"),
    "estado_actual": "No vencido"
  },
  "31": {
    "id": 31,
    "nombre": "Chocolate",
    "inventario": 120,
    "tipo_producto": "Golosinas",
    "fecha_vencimiento": new Date("2024-11-25"),
    "precio": 3000,
    "fecha_ingreso": new Date("2024-06-28"),
    "estado_actual": "No vencido"
  },
  "32": {
    "id": 32,
    "nombre": "Pasta de tomate",
    "inventario": 100,
    "tipo_producto": "Salsas",
    "fecha_vencimiento": new Date("2024-10-15"),
    "precio": 2700,
    "fecha_ingreso": new Date("2024-07-01"),
    "estado_actual": "No vencido"
  },
  "33": {
    "id": 33,
    "nombre": "Pan de molde",
    "inventario": 150,
    "tipo_producto": "Panadería",
    "fecha_vencimiento": new Date("2024-07-20"),
    "precio": 2300,
    "fecha_ingreso": new Date("2024-07-05"),
    "estado_actual": "No vencido"
  },
  "34": {
    "id": 34,
    "nombre": "Salsa de soja",
    "inventario": 80,
    "tipo_producto": "Salsas",
    "fecha_vencimiento": new Date("2025-03-15"),
    "precio": 3200,
    "fecha_ingreso": new Date("2024-07-08"),
    "estado_actual": "No vencido"
  },
  "35": {
    "id": 35,
    "nombre": "Huevos",
    "inventario": 200,
    "tipo_producto": "Huevos",
    "fecha_vencimiento": new Date("2024-07-10"),
    "precio": 2500,
    "fecha_ingreso": new Date("2024-07-12"),
    "estado_actual": "No vencido"
  },
  "36": {
    "id": 36,
    "nombre": "Yogur griego",
    "inventario": 120,
    "tipo_producto": "Lácteos",
    "fecha_vencimiento": new Date("2024-08-30"),
    "precio": 2800,
    "fecha_ingreso": new Date("2024-07-15"),
    "estado_actual": "No vencido"
  },
  "37": {
    "id": 37,
    "nombre": "Palomitas de maíz",
    "inventario": 100,
    "tipo_producto": "Golosinas",
    "fecha_vencimiento": new Date("2024-09-25"),
    "precio": 2000,
    "fecha_ingreso": new Date("2024-07-18"),
    "estado_actual": "No vencido"
  },
  "38": {
    "id": 38,
    "nombre": "Vinagre",
    "inventario": 150,
    "tipo_producto": "Condimentos",
    "fecha_vencimiento": new Date("2025-02-20"),
    "precio": 2200,
    "fecha_ingreso": new Date("2024-07-22"),
    "estado_actual": "No vencido"
  },
  "39": {
    "id": 39,
    "nombre": "Mermelada",
    "inventario": 80,
    "tipo_producto": "Conservas",
    "fecha_vencimiento": new Date("2024-12-15"),
    "precio": 3000,
    "fecha_ingreso": new Date("2024-07-25"),
    "estado_actual": "No vencido"
  },
  "40": {
    "id": 40,
    "nombre": "Cereal para niños",
    "inventario": 180,
    "tipo_producto": "Cereales",
    "fecha_vencimiento": new Date("2024-10-10"),
    "precio": 2600,
    "fecha_ingreso": new Date("2024-07-28"),
    "estado_actual": "No vencido"
  },
  "41": {
    "id": 41,
    "nombre": "Miel",
    "inventario": 100,
    "tipo_producto": "Endulzantes",
    "fecha_vencimiento": new Date("2025-01-30"),
    "precio": 2800,
    "fecha_ingreso": new Date("2024-08-01"),
    "estado_actual": "No vencido"
  },
  "42": {
    "id": 42,
    "nombre": "Chips de tortilla",
    "inventario": 150,
    "tipo_producto": "Golosinas",
    "fecha_vencimiento": new Date("2024-09-20"),
    "precio": 2100,
    "fecha_ingreso": new Date("2024-08-05"),
    "estado_actual": "No vencido"
  },
  "43": {
    "id": 43,
    "nombre": "Sopa instantánea",
    "inventario": 120,
    "tipo_producto": "Conservas",
    "fecha_vencimiento": new Date("2025-03-05"),
    "precio": 2300,
    "fecha_ingreso": new Date("2024-08-08"),
    "estado_actual": "No vencido"
  },
  "44": {
    "id": 44,
    "nombre": "Puré de tomate",
    "inventario": 100,
    "tipo_producto": "Salsas",
    "fecha_vencimiento": new Date("2024-11-15"),
    "precio": 2400,
    "fecha_ingreso": new Date("2024-08-12"),
    "estado_actual": "No vencido"
  },
  "45": {
    "id": 45,
    "nombre": "Gelatina",
    "inventario": 200,
    "tipo_producto": "Postres",
    "fecha_vencimiento": new Date("2024-10-25"),
    "precio": 1900,
    "fecha_ingreso": new Date("2024-08-15"),
    "estado_actual": "No vencido"
  },
  "46": {
    "id": 46,
    "nombre": "Pimienta",
    "inventario": 150,
    "tipo_producto": "Condimentos",
    "fecha_vencimiento": null,
    "precio": 2600,
    "fecha_ingreso": new Date("2024-08-18"),
    "estado_actual": "No vencido"
  },
  "47": {
    "id": 47,
    "nombre": "Crema de cacahuate",
    "inventario": 100,
    "tipo_producto": "Untables",
    "fecha_vencimiento": new Date("2025-02-28"),
    "precio": 3200,
    "fecha_ingreso": new Date("2024-08-22"),
    "estado_actual": "No vencido"
  },
  "48": {
    "id": 48,
    "nombre": "Sardinas en lata",
    "inventario": 80,
    "tipo_producto": "Conservas",
    "fecha_vencimiento": new Date("2025-01-15"),
    "precio": 2700,
    "fecha_ingreso": new Date("2024-08-25"),
    "estado_actual": "No vencido"
  },
  "49": {
    "id": 49,
    "nombre": "Salsa picante",
    "inventario": 120,
    "tipo_producto": "Salsas",
    "fecha_vencimiento": new Date("2024-12-20"),
    "precio": 2400,
    "fecha_ingreso": new Date("2024-08-28"),
    "estado_actual": "No vencido"
  },
  "50": {
    "id": 50,
    "nombre": "Gel de ducha",
    "inventario": 200,
    "tipo_producto": "Higiene",
    "fecha_vencimiento": null,
    "precio": 1800,
    "fecha_ingreso": new Date("2024-09-01"),
    "estado_actual": "No vencido"
  },
  "51": {
    "id": 51,
    "nombre": "Crema de afeitar",
    "inventario": 150,
    "tipo_producto": "Higiene",
    "fecha_vencimiento": null,
    "precio": 2200,
    "fecha_ingreso": new Date("2024-09-05"),
    "estado_actual": "No vencido"
  },
  "52": {
    "id": 52,
    "nombre": "Cereal de arroz",
    "inventario": 100,
    "tipo_producto": "Cereales",
    "fecha_vencimiento": new Date("2024-11-30"),
    "precio": 2500,
    "fecha_ingreso": new Date("2024-09-08"),
    "estado_actual": "No vencido"
  },
  "53": {
    "id": 53,
    "nombre": "Aceitunas en lata",
    "inventario": 80,
    "tipo_producto": "Conservas",
    "fecha_vencimiento": new Date("2025-03-15"),
    "precio": 2900,
    "fecha_ingreso": new Date("2024-09-12"),
    "estado_actual": "No vencido"
  },
  "54": {
    "id": 54,
    "nombre": "Té verde",
    "inventario": 120,
    "tipo_producto": "Bebidas",
    "fecha_vencimiento": new Date("2024-10-25"),
    "precio": 2700,
    "fecha_ingreso": new Date("2024-09-15"),
    "estado_actual": "No vencido"
  },
  "55": {
    "id": 55,
    "nombre": "Puré de papas",
    "inventario": 200,
    "tipo_producto": "Granos",
    "fecha_vencimiento": new Date("2024-09-30"),
    "precio": 2300,
    "fecha_ingreso": new Date("2024-09-18"),
    "estado_actual": "No vencido"
  },
  "56": {
    "id": 56,
    "nombre": "Masa para pizza",
    "inventario": 150,
    "tipo_producto": "Panadería",
    "fecha_vencimiento": new Date("2024-10-10"),
    "precio": 2400,
    "fecha_ingreso": new Date("2024-09-22"),
    "estado_actual": "No vencido"
  },
  "57": {
    "id": 57,
    "nombre": "Crema de cacahuate",
    "inventario": 100,
    "tipo_producto": "Untables",
    "fecha_vencimiento": new Date("2024-12-15"),
    "precio": 3000,
    "fecha_ingreso": new Date("2024-09-25"),
    "estado_actual": "No vencido"
  },
  "58": {
    "id": "58",
    "nombre": "Salsa de barbacoa",
    "inventario": "8",
    "tipo_producto": "Salsas",
    "fecha_vencimiento": new Date("2025-02-28"),
    "precio": "2800",
    "fecha_ingreso": new Date("2024-09-28"),
    "estado_actual": "No vencido"
  },
  "59": {
    "id": 59,
    "nombre": "Agua embotellada",
    "inventario": 120,
    "tipo_producto": "Bebidas",
    "fecha_vencimiento": null,
    "precio": 2000,
    "fecha_ingreso": new Date("2024-10-01"),
    "estado_actual": "No vencido"
  },
  "60": {
    "id": 60,
    "nombre": "Salsa de soja baja en sodio",
    "inventario": 200,
    "tipo_producto": "Salsas",
    "fecha_vencimiento": new Date("2025-01-10"),
    "precio": 3200,
    "fecha_ingreso": new Date("2024-10-05"),
    "estado_actual": "No vencido"
  }
};

// Conecta a MongoDB
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.once('open', async () => {
  console.log('Conectado a MongoDB');

  // Inserta los datos
  try {
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        const product = new Product(data[key]);
        await product.save();
      }
    }
    console.log('Datos insertados correctamente');
  } catch (error) {
    console.error('Error al insertar datos:', error);
  } finally {
    mongoose.connection.close();
  }
});
