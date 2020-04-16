// Comnado para establecer la conexion
var socket = io();

var label = $('#lblNuevoTicket');

socket.on('connect', function() {
    console.log(`Conectado al servidor`);
});

socket.on('disconnect', function() {
    console.log(`Conexión perdida al servidor`);
});

socket.on('estadoActual', function(resp) {
    label.text(resp.actual);
});

$('button').on('click', function() {
    socket.emit('siguienteTicket', null, function(siguienteTicket) {
        console.log('Server:', siguienteTicket);
        label.text(siguienteTicket.resp);
    });
});