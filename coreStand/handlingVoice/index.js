module.exports = (io) => { 
    var express = require('express');
    io.on('connection', function(socket){
        console.log('Socket Voice Connected');
        // Gửi random về client!
        
         socket.on('voiceSocketPush', function(msg){
           console.log(msg);
           if(msg.noteContent == 'chuyển hướng'){
            socket.emit('voiceSocketReply', { msg,dataCode: '1' });
          }
           socket.emit('voiceSocketReply', { msg,dataCode: '0' });
        });
      
        socket.on('pingServer', function(msg){
          socket.emit('messageVoice', { msg });
        });
      
      });
      
    return;
}
    