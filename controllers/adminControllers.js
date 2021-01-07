const Siswa = require('../models/siswa');
const Guru = require('../models/Guru');
const Users = require('../models/Users');
const Kelas = require('../models/Kelas');
const bcrypt = require('bcryptjs');

module.exports = {
  viewLogin: (req, res) => {
    res.render('admin/authentication/Login');
  },

  actionLogin: async (req, res) => {
    try {
      const { username, password } = req.body;
      const user = await Users.findOne({
        username: username,
        password: password,
      });
      if (!user) {
        res.redirect('/admin/login');
        console.log('User is Undefined');
      }
      // const isPasswordMatch = await bcrypt.compare(password, user.password);
      // if (!isPasswordMatch) {
      //   console.log('Password tidak cocok');
      //   console.log('admin/login');
      // }
      console.log('Sukses');
      res.redirect('/admin/biodatasiswa');
    } catch (error) {
      console.log(error);
    }
  },

  viewRegister: (req, res) => {
    try {
      res.render('admin/authentication/Register');
      // console.log(res);
    } catch (error) {
      console.log(error);
    }
  },

  addRegister: async (req, res) => {
    try {
      const { username, email, password } = req.body;
      console.log(req.body);
      await Users.create({
        username,
        password,
        email,
      });
      console.log(Users);
      res.redirect('/admin/login');
    } catch (error) {
      console.log(error);
    }
  },

  viewbiodataSiswa: async (req, res) => {
    try {
      const siswa = await Siswa.find();
      res.render('admin/biodataSiswa/viewbiodataSiswa', {
        siswa,
      });
      // console.log(res);s
    } catch (error) {
      console.log(error);
    }
  },

  deletebiodataSiswa: async (req, res) => {
    try {
      const { id } = req.params;
      console.log(req.params);
      const siswa = await Siswa.findOne({ _id: id });
      await siswa.remove();
      res.redirect('admin/biodatasiswa');
    } catch (error) {
      console.log(error);
    }
  },

  addbiodataSiswa: async (req, res) => {
    try {
      const { nis, name, kelas, tempatlahir, tanggallahir, alamat } = req.body;
      console.log(req.body);
      await Siswa.create({
        nis,
        name,
        kelas,
        tempatlahir,
        tanggallahir,
        alamat,
      });
      console.log(Siswa);

      res.redirect('/admin/biodatasiswa');
    } catch (error) {
      console.log(error);
    }
  },

  editbiodataSiswa: async (req, res) => {
    try {
      const {
        id,
        nis,
        name,
        kelas,
        tempatlahir,
        tanggallahir,
        alamat,
      } = req.body;

      console.log(req.body);
      const siswa = await Siswa.findOne({ _id: id });
      console.log(siswa);
      siswa.nis = nis;
      siswa.name = name;
      siswa.kelas = kelas;
      siswa.tempatlahir = tempatlahir;
      siswa.tanggallahir = tanggallahir;
      siswa.alamat = alamat;
      await siswa.save();
      console.log(siswa);
      res.redirect('/admin/biodatasiswa');
    } catch (error) {
      console.log(error);
      res.redirect('/admin/biodatasiswa');
    }
  },

  //Biodata Guru
  viewbiodataGuru: async (req, res) => {
    try {
      const guru = await Guru.find();
      res.render('admin/guru/viewbiodataGuru', {
        guru,
      });
    } catch (error) {
      console.log(error);
    }
  },

  addbiodataGuru: async (req, res) => {
    try {
      const { nip, nameguru, alamat, tanggallahir, kelas } = req.body;
      console.log(req.body);
      await Guru.create({
        nip,
        nameguru,
        alamat,
        tanggallahir,
      });
      console.log(Guru);
      res.redirect('/admin/biodataguru');
    } catch (error) {
      console.log(error);
    }
  },

  editbiodataGuru: async (req, res) => {
    try {
      const { id, nip, nameguru, alamat, tanggallahir, kelas } = req.body;
      console.log(req.body);
      const guru = await Guru.findOne({ _id: id });
      console.log(guru);
      guru.nip = nip;
      guru.nameguru = nameguru;
      guru.alamat = alamat;
      guru.tanggallahir = tanggallahir;
      guru.kelas = kelas;
      await guru.save();
      console.log(guru);
      res.redirect('/admin/biodataguru');
    } catch (error) {
      console.log(error);
    }
  },

  deletebiodataGuru: async (req, res) => {
    try {
      const { id } = req.params;
      console.log(req.params);
      const guru = await Guru.findOne({ _id: id });
      await guru.remove();
      res.redirect('/admin/biodataguru');
    } catch (error) {
      console.log(error);
    }
  },
  //Kelas
  viewKelas: async (req, res) => {
    try {
      // const kelas = await Kelas.find().populate({
      //   path: 'siswaId',
      //   select: 'id name',
      // });
      const kelas = await Kelas.find();
      console.log('Hasil', kelas);
      const siswa = await Siswa.find();
      // console.log('Siswa : ', siswa);
      res.render('admin/kelas/viewkelas', {
        kelas,
        siswa,
      });
    } catch (error) {
      console.log(error);
    }
  },

  kelas3A: async (req, res) => {
    try {
      const { siswaId, matematika, bahasaindonesia, bahasainggris } = req.body;
      console.log(req.body);
      await Kelas.create({
        siswaId,
        matematika,
        bahasaindonesia,
        bahasainggris,
      });
      res.redirect('/admin/kelas');
    } catch (error) {
      console.log(error);
    }
  },

  viewraport: async (req, res) => {
    try {
      res.render('admin/raport/viewraport');
    } catch (error) {}
  },
};
