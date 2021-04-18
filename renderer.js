// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

// Example 1 - IPC
document.getElementById('submit').addEventListener('click', function() {
   
  let input1 = document.getElementById("first_number").value;
  let input2 = document.getElementById("second_number").value;

  const {ipcRenderer} = require('electron')

  // send username to main.js 
  ipcRenderer.send('asynchronous-message', { 'input1':input1, 'input2':input2} );

  // receive message from main.js
  ipcRenderer.on('asynchronous-reply', (event, arg) => {
    // Address of native addon
    const {add} = require('./Nodejs-Napi-Addon-Using-Cmake/build/Release/addon.node');

    // Calling functions of native addon
    var result = add(parseInt(arg['input1']),parseInt(arg['input2']));

    document.getElementById('tag_result').innerHTML = 
        "C++ Native addon add() result (IPC): " + result;
  })

  });

// Example 2 - Worker JS
// calls worker.js script inside a web worker
var worker = new Worker('./worker.js')

// receive any message from web worker
worker.onmessage = function(event) {
    // Print result on console and <h1> tag
    console.log("Worker : ", event.data);
    document.getElementById('tag_result').innerHTML = 
        "C++ Native addon add() result (Worker): " + event.data;

        // Terminate WebWorker
        worker.terminate();

        // Set it to undefined
        worker = undefined;
};

// catches any error from web worker
worker.onerror = function (event) {
    console.log(event.message, event);
};
