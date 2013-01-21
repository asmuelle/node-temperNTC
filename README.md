# node-temper1

A node module to measure temperatures with a temperNTC usb thermometer from pcsensors.com. 
## Prerequisites:

* Mac OS  or Linux (kernel 2.6+) or Windows XP+
* node.js v0.8
* libudev-dev (Linux only)
* git

## Usage

```js
thermometers=require("..");

var devices=thermometers.getDevices();

console.log("Devices found:"+devices);

thermometers.readTemperature(devices[0], function(err, value) {
  console.log("Result:"+value);
});
```

## To Do
* read internal thermometer

## Sponsors
node-temperNTC is sponsored by http://kwiqly.com
