var mongoose = require('mongoose');

var settingAcountOpenLiveSchema = new mongoose.Schema({
  _id: String,
  _idUser: String,
  typeAccountLive: String, // Loại tài khoản khi Live
  typeCodeProduct: String, // Loại mã sản phẩm khi Live
  userReserve: { type: Number, default: '2' }, // Số người dự bị
  typeProductShop: { type: String, default: 'multiple' }, // Nhiều sản phẩm hay ít sản phẩm
  created_date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('settingaccoutopenlive', settingAcountOpenLiveSchema);
