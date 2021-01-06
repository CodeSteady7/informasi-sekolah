const mongoose = require('mongoose');

const kelasSchema = new mongoose.Schema({
  mtk: {
    type: String,
    required: true,
  },

  bhsindonesia: {
    type: String,
    required: true,
  },

  bhsinggris: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Kelas', kelasSchema);
