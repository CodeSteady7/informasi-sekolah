const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const kelasSchema = new mongoose.Schema({
  matematika: {
    type: Number,
    required: true,
  },

  bahasaindonesia: {
    type: Number,
    required: true,
  },

  bahasainggris: {
    type: Number,
    required: true,
  },

  siswaId: [
    {
      type: ObjectId,
      ref: 'Siswa',
    },
  ],
});

module.exports = mongoose.model('Kelas', kelasSchema);
// <% for(let i = 0; i < kelas.length; i++){ %>
//   <tr>
//     <td><%= i + 1 %></td>
//     <td></td>
//     <td><%= kelas[i].matematika %></td>
//     <td><%= kelas[i].bahasaindonesia %></td>
//     <td><%= kelas[i].bahasainggris %></td>
//     <td></td>
//   </tr>
//   } %>
