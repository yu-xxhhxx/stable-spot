const container = require('rhea');
const crypto = require('crypto');

var express = require('express');
var request = require('request');

var app = express();

request.post({
        url: 'http://localhost:8000/index.js',
        form: {}
    }

)

//Create Connection
var connection = container.connect({
    'host': '1441570457654737.iot-amqp.cn-shanghai.aliyuncs.com',
    'port': 5671,
    'transport': 'tls',
    'reconnect': true,
    'idle_time_out': 60000,
    'username': '12345|authMode=aksign,signMethod=hmacsha1,timestamp=1573489088171,authId=LTAI4FcyhLT5Hhkz1WsrRdq9,consumerGroupId=DEFAULT_GROUP|',
    'password': hmacSha1('iCyqPU5pbtumGvSz2EsoF9GeRAXFNL', 'authId=LTAI4FcyhLT5Hhkz1WsrRdq9&timestamp=1573489088171'),
});

//Create Receiver Link
var receiver = connection.open_receiver();

//handle received message
container.on('message', function (context) {
    var msg = context.message;
    var messageId = msg.message_id;
    var topic = msg.application_properties.topic;
    var content = Buffer.from(msg.body.content).toString();
    exports.messageContent = content;
    //ACK
    context.delivery.accept();
});

//calculate password
function hmacSha1(key, context) {
    return Buffer.from(crypto.createHmac('sha1', key).update(context).digest())
        .toString('base64');
}