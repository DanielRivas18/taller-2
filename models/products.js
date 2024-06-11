const mongoose = require('mongoose');

const { Schema } = mongoose;

const schemaProducts = new Schema({
  id: { type: Number, required: true, unique: true }, // Asegúrate de que el campo 'id' sea único
  nombre: { type: String, required: true },
  inventario: { type: Number, required: true },
  tipo_producto: { type: String, required: true },
  fecha_vencimiento: { type: Date, default: null },
  precio: { type: Number, required: true },
  fecha_ingreso: { type: Date, default: Date.now }, // Puedes establecer 'fecha_ingreso' como la fecha actual por defecto
  estado_actual: { type: String, default: 'No vencido' }
});

schemaProducts.methods.actualizarEstado = function () {
  const hoy = new Date();
  if (this.fecha_vencimiento && new Date(this.fecha_vencimiento) < hoy) {
    this.estado_actual = 'Vencido';
  } else {
    this.estado_actual = 'No vencido';
  }
};

// Middleware para actualizar el estado antes de guardar
schemaProducts.pre('save', function (next) {
  this.actualizarEstado();
  next();
});

// Middleware para actualizar el estado antes de actualizar
schemaProducts.pre('findOneAndUpdate', function (next) {
  if (this._update.fecha_vencimiento) {
    const hoy = new Date();
    if (new Date(this._update.fecha_vencimiento) < hoy) {
      this._update.estado_actual = 'Vencido';
    } else {
      this._update.estado_actual = 'No vencido';
    }
  }
  next();
});

module.exports = mongoose.model('Product', schemaProducts);
