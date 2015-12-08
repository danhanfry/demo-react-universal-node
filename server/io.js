
var func = require('./func')

module.exports = function(io) {

    io.on('connection', function(socket) {

        socket.on('initialAppState', function(){

            const state = func.data()
            socket.emit('initialAppState', state)

        })

    })

}
