const mongoose = require('mongoose');

const siswaSchema = new mongoose.Schema({
  nis: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  kelas: {
    type: String,
    required: true,
  },
  tempatlahir: {
    type: String,
    required: true,
  },
  tanggallahir: {
    type: String,
    required: true,
  },
  alamat: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Siswa', siswaSchema);
