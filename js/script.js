$(document).ready(function() {
	//Открытие меню
	$('.header__nav-btn').click(function() {
		$(this).toggleClass('active')
		$('.nav-wrapper').toggle()
		$('body').toggleClass('popup')
	})
 	
	//Закрыть меню при переходе на якорь
	$('nav a').click(function() {
		$('.nav-wrapper').toggle()
		$('.header__nav-btn').toggleClass('active')
		$('body').toggleClass('popup')
	})

	//Уменьшить высоту меню при скролле, и добавить фон
	$(window).scroll(function() {
		if ($(window).scrollTop() > $('.header__fixed').height()) {
			$('.header__fixed').addClass('fixed')
		}
		else {
			$('.header__fixed').removeClass('fixed')
		}
	})

	//Фиолетовая картинка при фокусе и ховере на инпуты.
	$('.form__input input').focus(function() {
		$(this).parent().children('div').addClass('active')
	})	

	$('.form__input input').mouseover(function() {
		$(this).parent().children('div').addClass('active')
	})	

	$('.form__input input').mouseout(function() {
		$(this).parent().children('div').removeClass('active')
	})	

	$('.form__input input').focusout(function() {
		$(this).parent().children('div').removeClass('active')
	})

	$('.footer__input input').focus(function() {
		$(this).parent().children('button').addClass('active')
	})	
	$('.footer__input input').focusout(function() {
		$(this).parent().children('button').removeClass('active')
	})

	$('.footer__input input').mouseover(function() {
		$(this).parent().children('button').addClass('active')
	})	

	$('.footer__input input').mouseout(function() {
		$(this).parent().children('button').removeClass('active')
	})	

	//Черный текст на label если его чекбокс checked
	$('.form__checkbox input').change(function() {
		if ($(this).prop('checked')) {
			$(this).parent().children('label').css('color','#2a2d2e')
		}
		else {
			$(this).parent().children('label').css('color','#72787a')
		}
	})

  $('a').click( function() { 
  	var target = $(this).attr('href')
    $('html, body').animate({ scrollTop: $(target).offset().top }, 800);
  });




})