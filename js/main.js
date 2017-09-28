$(document).ready(function(){

	$(document).on('click', '.sidebar li', function() {
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

	$('.botao-incluir').on('click', function() {
		if(isNaN(parseFloat($('.incluir').val()))){
			alert('Valor indevido, apenas 0 ou 1');
		} else {
			var valor = parseFloat($('.incluir').val());
			var contador = valor - 1;
			var numMenu = $('.menus>li').length + 1;
			var numSubmenu = $('.menus>li').eq(contador).find('.submenu').children().length + 1;
			if (valor == 0) {
				$('.menus').append('<li>Menu '+ numMenu + '<ul class="submenu"></ul></li>');
			} else {
				$('.menus>li').eq(contador).children().append('<li>Submenu ' + numSubmenu+ '</li>');
				$('.menus>li').eq(contador).addClass('clicado');
				$('.menus>li').eq(contador).children().css({'height': $('.menus>li').eq(contador).children()[0].scrollHeight});
			};
		};
		
	});

	$(window).resize(function(){
		if($(window).width() <= 769) {
			$('.sidebar').css({'width': '100%'});
		} else {
			$('.sidebar').css({'width': '172px'});
		};
	});
})