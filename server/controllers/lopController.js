require('../models/database'); 
const Lop = require('../models/Lop');


/**
 * danhSachLop
 * @param {*} req 
 * @param {*} res 
 */
 exports.danhSachLop = async(req, res) => {
  const lops = await Lop.find();

  // gửi data lop qua file ejs danh-sach-lop.ejs
  res.render('danh-sach-lop', {lops: lops});
}

/**
 * danhSachLop
 * @param {*} req 
 * @param {*} res 
 */
 exports.formThemLop = async(req, res) => {

  // gửi data lop qua file ejs form-them-lop.ejs
  res.render('form-them-lop', {});
}


/**
 * POST /thêm lớp
 * Submit Lop
*/
exports.themLop = async(req, res) => {
  const newLop = new Lop({
    tenLop: req.body.tenLop,
    soHocSinh: req.body.soHocSinh, 
  });

  console.log('phuong', req.body.tenLop);
  
  await newLop.save();
  res.redirect('/danh-sach-lop');
}




 