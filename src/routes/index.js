const express = require('express');
const router = express.Router();
const multer = require('multer');

const { addPengalaman,getPengalamans,getPengalaman,updatePengalaman,deletePengalaman } = require('../controller/pengalaman'); //import function

const {uploadFile} = require('../middlewares/uploadFile');

router.post('/pengalaman', uploadFile('image'), addPengalaman);
router.get('/pengalamans', getPengalamans);
router.get('/pengalaman/:id', getPengalaman);
router.patch('/pengalaman/:id', updatePengalaman);
router.delete('/pengalaman/:id', deletePengalaman);


module.exports = router;