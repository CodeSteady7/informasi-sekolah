const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const guruSchema = new mongoose.Schema({
  nip: {
    type: String,
    required: true,
  },
  nameguru: {
    type: String,
    required: true,
  },
  alamat: {
    type: String,
    required: true,
  },
  tanggallahir: {
    type: String,
    required: true,
  },
  siswaId: {
    type: ObjectId,
    ref: 'Siswa',
  },
});

module.exports = mongoose.model('Guru', guruSchema);
