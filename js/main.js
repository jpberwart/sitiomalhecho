var identero=0;


function galeria(){
	var active = $('.item.active').attr('id');
	var ThisBtn = $('a.botn[href="#'+active+'"]').parent('.navibtn');
	
	
	if(!$(".navCarou li a:last").is(".activeBtn")){
		$('.navCarou a.botn').removeClass('activeBtn');
		ThisBtn.next().children('.botn').addClass('activeBtn').trigger('click');
		console.debug("no ultimo");
		
	}else{
		$('.navCarou a.botn').removeClass('activeBtn');
		$('.navCarou').find('.botn:first').addClass('activeBtn').trigger('click');
		console.debug("Ultimo");
	}

	
}

$(function(){
	$(window).load(function(){
		$('#Portada').addClass('opacitylow');
		$('.item h3, .item p').removeClass('fadeInLeft');
		$('.active h3, .active p').addClass('fadeInLeft');
		identero = setInterval(galeria,5000);
	});
	
	/*Carrusel*/
	$('.navCarou a').on('click', function(e){
		e.preventDefault();
		$('.navCarou a').removeClass('activeBtn');
		$(this).addClass('activeBtn');
		$('.item').removeClass('active');
		var ThisId = $('.activeBtn').attr('href');
		$(ThisId).addClass('active');
		$('.item h3, .item p').removeClass('fadeInLeft');
		$(ThisId+'.item h3, '+ThisId+'.item p').addClass('fadeInLeft');
		clearInterval(identero);
		identero = setInterval(galeria,5000);
	});
});