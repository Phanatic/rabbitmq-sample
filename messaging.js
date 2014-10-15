var amqp = require('amqp')
  , amqp_hacks = require('./amqp-hacks');

exports.sendMessage = function (newMessage, sent, errorhandler) {
  var connectionString = process.env.RABBITMQ_URL || "amqp://localhost";
  //Connect to RabbitMQ.
  var rabbitMqConnection = amqp.createConnection({ url: connectionString });

  rabbitMqConnection.on('error', function(error) {
    if(errorhandler) {
      errorhandler(error);
    }
  });

  rabbitMqConnection.once('ready', function() {
    rabbitMqConnection.queue('msg-queue', {} , function(queue) {
      rabbitMqConnection.publish('msg-queue', { message: newMessage });

      //Close the connection to rabbitMQ.
      amqp_hacks.safeEndConnection(rabbitMqConnection);
      if(sent) {
        sent();
      }
    });
  });

};

exports.recieveMessage = function(onMessageRecieved, errorhandler) {

  var connectionString = process.env.RABBITMQ_URL || "amqp://localhost";

  //Connect to RabbitMQ.
  var rabbitMqConnection = amqp.createConnection({ url: connectionString });

  rabbitMqConnection.on('error', function(error) {
    if(errorhandler) {
      errorhandler(error);
    }
  });

  rabbitMqConnection.once('ready', function() {
    rabbitMqConnection.queue('msg-queue', {} , function(queue) {
      queue.subscribe(function(msg) {
        var message = msg.message;

        //Close the connection to rabbitMQ.
        amqp_hacks.safeEndConnection(rabbitMqConnection);
        if(onMessageRecieved) {
          onMessageRecieved(message);
        }
      });
    });
  });

};
