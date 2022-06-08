$(function(){
	$('.main__slider').slick({
		dots:true,
		arrows:false
	});

	$('.header__burger').click(function(event){
		$('.header__burger, .header__nav').toggleClass('active');
		$('body').toggleClass('lock');
	})
})