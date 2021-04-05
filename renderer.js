// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.


// let message2Worker = (command, payload) => {
  //     ipc.send('message-from-renderer', {
    //       command: command, payload: payload
    //     });
    //   }
    
// var input1 = document.getElementById('first_number');
// input1.onkeyup = function(){
//      alert(input1.value);
//     // var callcount = 0;
//     //     var action = function(){
//     //          alert(input1.value);
//     //     }
//     //     var delayAction = function(action, time){
//     //         var expectcallcount = callcount;
//     //         var delay = function(){
//     //             if(callcount == expectcallcount){
//     //                 action();
//     //             }
//     //         }
//     //         setTimeout(delay, time);
//     //     }
//     //     return function(eventtrigger){
//     //         ++callcount;
//     //         delayAction(action, 100);
//     //     }

//     // message2Worker('first_number', { value: input1.value });
// };

var worker = new Worker('./worker.js')

// React to message sent by Worker
worker.onmessage = function(event) {
    // Print result on console and <h1> tag
    console.log("Worker : ", event.data);
    document.getElementById('tag_result').innerHTML = 
        "C++ Native addon add() result: " + event.data;

        // Terminate WebWorker
        worker.terminate();

        // Set it to undefined
        worker = undefined;
};

worker.onerror = function (event) {
    console.log(event.message, event);
};
