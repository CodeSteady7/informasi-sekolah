const router = require('express').Router();
const adminControllers = require('../controllers/adminControllers');
const auth = require('../middlewares/auth');

router.get('/login', adminControllers.viewLogin);
router.get('/register', adminControllers.viewRegister);
router.post('/register', adminControllers.addRegister);
//Endpoint Biodata Siswa
router.get('/biodatasiswa', adminControllers.viewbiodataSiswa);
router.post('/biodatasiswa', adminControllers.addbiodataSiswa);
router.put('/biodatasiswa', adminControllers.editbiodataSiswa);
router.delete('/biodatasiswa/:id', adminControllers.deletebiodataSiswa);
//Endpoint Biodata Guru
router.get('/biodataguru', adminControllers.viewbiodataGuru);
router.post('/biodataguru', adminControllers.addbiodataGuru);
router.put('/biodataguru', adminControllers.editbiodataGuru);
router.delete('/biodataguru/:id', adminControllers.deletebiodataGuru);

//Endpoint Kelas
router.get('/kelas', adminControllers.viewKelas);

module.exports = router;
