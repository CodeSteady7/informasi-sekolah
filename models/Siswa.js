const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

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
  kelasId: [
    {
      type: ObjectId,
      ref: 'Kelas',
    },
  ],
});

module.exports = mongoose.model('Siswa', siswaSchema);
// <% for(let i = 0; i < kelas.length; i++) {%>
//   <tr>
//     <td><%= i = 1 %></td>
//     <td><%= kelas[i].siswaId %></td>
//     <td><%= kelas[i].matematika %></td>
//     <td><%= kelas[i].bahasaindonesia %></td>
//     <td><%= kelas[i].bahasainggris %></td>

//     <td>
//       <a
//         href="javascript:void()"
//         type="button"
//         class="btn btn-warning btn-circle btn-sm button-update1"
//       >
//         <i class="fas fa-edit"></i
//       ></a>

//       <button type="submit" class="btn btn-danger btn-circle btn-sm">
//         <i class="fas fa-trash"></i>
//       </button>
//     </td>
//   </tr>
//   <%}%>
