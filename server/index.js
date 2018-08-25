var app = require('express')();
var http = require('http').Server(app);
var artists = require('./controllers/artists');
var http = require('http').Server(app);
var io = require('socket.io')(http);


app.use('/artists', artists)

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/controllers/artists.html');
});

io.on('connection', function (socket) {
    socket.on('greeting', function (msg) {
        console.log('message recieved: ' + msg);
        setTimeout(() => {
            io.emit('greeting', { type: 'new-message', text: msg });
        }, 1500);
    });
});

io.on('connection', function (socket) {
    socket.on('chat', function (chat) {
        console.log('chat: ', chat);
        io.emit('chatEvent', { type: 'chat-msg', text: 'response chat msg: ' + chat })
    });
    
})


http.listen(3000, function () {
    console.log('listening on http://localhost:3000');
});