module.exports = (io) => { 
    var express = require('express');
    io.on('connection', function(socket){
        console.log('Socket Random Connected');
        // Gửi random về client!
        
        var randomQuery = require("randomstring");
        var randomNumber = randomQuery.generate({
          length: 4,
          charset: 'hex',
          capitalization: 'uppercase'
        });
        socket.emit('randomNumber', { randomNumber });
      
        socket.on('replyRandom', function(msg){
          var upMessage = msg.messageFB;
          var uppercaseMes = upMessage.toUpperCase();
          var randomCheckMessage = uppercaseMes.indexOf(randomNumber);
          
          if(randomCheckMessage != '-1'){
            
            CartPerson.push(msg);
            console.log(CartPerson);
            if(CartPerson.length == '2'){
              randomNumber = randomQuery.generate({
                length: 4,
                charset: 'hex',
                capitalization: 'uppercase'
              });
              CartPerson = [];
              socket.emit('randomNumber', { randomNumber });
            }
          }
        });
      });
      
    return;
}
    