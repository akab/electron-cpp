// Address of native addon
const {add} = require('./Nodejs-Napi-Addon-Using-Cmake/build/Release/addon.node');

// Calling functions of native addon
var result = add(3,4);

// Communicating with main process of Electron App
postMessage(result);
