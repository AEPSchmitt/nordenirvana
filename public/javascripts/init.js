var hello = 'Would you like to know a secret?';
var yes = 'Okay then. Meet me in noerdenirvana.dk/secret';
var no = 'Are you fucking kidding me?';

$(document).ready(function () {
    console.log('Hello, Friend...');
    $('.left').fadeIn('medium');
});

window.onbeforeunload = function () {   
    $('.info').hide('medium')
}

var open = 'none';
function openMenu(menu_name){
	console.log($(menu_name));
	if (open != 'none'){
		$(open).hide('medium');
	}
	$(menu_name).show('medium');
	open = menu_name;
	console.log(open);
}