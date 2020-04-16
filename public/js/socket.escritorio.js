// Comnado para establecer la conexion
var socket = io();

var label = $('small');
var searchParams = new URLSearchParams(window.location.search);

if (!searchParams.has('escritorio')) {
    window.location = 'index.html';
    throw new Error('el escritorio es requerido');
}

var escritorio = searchParams.get('escritorio');
console.log(escritorio);

$('h1').text('Escritorio: ' + escritorio);

$('button').on('click', function() {

    socket.emit('atenderTicket', {
        escritorio: escritorio
    }, function(resp) {

        if (resp === 'No hay tickets pendientes.') {
            alert(resp);
            label.text("Sin ticket asignado");
            return;
        }
        label.text("Ticket " + resp.numero);
    });

});