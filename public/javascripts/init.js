var hello = 'Would you like to know a secret?';
var yes = 'Okay then. Meet me in noerdenirvana.dk/secret';
var no = '';

$(document).ready(function () {
    console.log('Hello, Friend...');
    $('#info').show('medium');
});

window.onbeforeunload = function () {   
    $('#info').hide('medium')
}