$(document).ready(function(){
	$('.sidebar li').on('click', function() {
		$(this).toggleClass('clicado');
		if ($(this).children().height() == 0) {
			$(this).children().css({'height': $(this).children()[0].scrollHeight});
		} else {
			$(this).children().css({'height': '0'});
		};		
	});
	$('.botao').on('click', function(){
		$('.sidebar').addClass('visivel');
	});
	$('.fechar').on('click', function(){
		$('.sidebar').removeClass('visivel');
	});
})