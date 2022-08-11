const mongoose = require('mongoose');

const lopSchema = new mongoose.Schema({
  tenLop: {
    type: String,
    required: 'This field is required.'
  },
  soHocSinh: {
    type: Number
  } 
});

module.exports = mongoose.model('Lop', lopSchema);