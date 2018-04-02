var mongoose = require('mongoose');

var settingAcountOpenLiveSchema = new mongoose.Schema({
  _idUser: String,
  typeAccountLive: String, // Loại tài khoản khi Live
  typeFanpageAccountLive: String, // Tên Fanpage nếu có
  typeCodeProduct: String, // Loại mã sản phẩm khi Live
  userReserve: { type: Number, default: '2' }, // Số người dự bị
  typeProductShop: String, // Nhiều sản phẩm hay ít sản phẩm
  created_date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('settingaccountopenlive', settingAcountOpenLiveSchema);
