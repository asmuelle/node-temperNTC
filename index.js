var HID = require('HID');
var readExternalCommand=[0x01, 0x80, 0x33, 0x01, 0x00, 0x00, 0x00, 0x00];

exports.getDevices=function() {
 var devices=HID.devices();
 var list=[];
 devices.forEach(function(item) {
   if(item.product==="TEMPerNTC1.1" && 
      item.vendorId===3141 && 
      item.interface===1){  list.push(item.path);
  }
 });
 return list;
}

exports.readTemperature=function(path, callback){
 var device = new HID.HID(path);
 device.write(readExternalCommand);
 device.read(function(err,response){
   console.log([err,response]);
   if(err) {
    callback.call(this,err,null); 
   } else {
    callback.call(this,null, [response[4]+response[5]/100,response[6]+response[7]/100]);
   }
 });
}

