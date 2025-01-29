const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  childAgeGroup: { type: String, enum: ['Bebê (0-3 anos)', 'Criança (4-14 anos)', 'Jovem Adulto (14-18 anos)'], required: true },
  season: { type: String, enum: ['Verão', 'Inverno'], required: true },
  clothingItems: {
    upperWear: { size: String, quantity: Number },
    lowerWear: { size: String, quantity: Number },
    footwear: { size: String, quantity: Number }
  },
  pickupLocation: { type: String, enum: ['Porto', 'Lisbon', 'Sintra', 'Algarve'], required: true },
  status: { type: String, enum: ['Pendente', 'Aceito', 'Arquivado'], default: 'Pendente' }
});

module.exports = mongoose.model('Order', orderSchema);
