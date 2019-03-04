function slowScroll (id) {
    var offset = 0;
    $('html,body').animate({
        scrollTop : $(id).offset ().top - offset
    }, 1200);
    return false;
}

function slowScrollHouse (id) {
    var offset = 0;
    $('html,body').animate({
        scrollTop : $(id).offset().top - 70
    },
    1200);
    return false;
}

$('.slides').slick({
    dots: true,
    infinite: false,
    autoplay: false,
    speed: 1500,
    pauseOnHover: true
});

//$('.menu-btn').on('click', function(e) {
//  e.preventDefault;
//  $(this).toggleClass('menu-btn_active');
//});
//
//$('.menu-btn').click(function(){
//  $('.menu').toggleClass('menu_opened');
//})
//$(document).click(function(event) {
//    if ($(event.target).closest(".menu").length ) return;
//    $('.menu').removeClass('menu_opened');
//    event.stopPropagation();
//});

$(document).ready(function() {
		$(document).delegate('.open', 'click', function(event){
			$(this).addClass('oppenned');
			event.stopPropagation();
		})
		$(document).delegate('body', 'click', function(event) {
			$('.open').removeClass('oppenned');
		})
		$(document).delegate('.cls', 'click', function(event){
			$('.open').removeClass('oppenned');
			event.stopPropagation();
		});
	});





$(window).scroll(function(){
	$('.popup-politics').css({'top': $(window).scrollTop() + 70})
});

$('.politics').click(function(){
	$('.popup-politics').css({'top': $(window).scrollTop() + 70}).addClass('active').fadeIn();
	$('.bg-popup').fadeIn();
	$('.gotoup').fadeOut();
    
});

$('.coast').click(function(){
	$('.popup-table').css({'top': $(window).scrollTop() +70}).addClass('active').fadeIn();
	$('.bg-popup').fadeIn();
    $('.gotoup').fadeOut();
});

$(window).scroll(function(){
  $(".mous").stop().animate({"marginTop": "100px"}, "slow" );  
});

$('.d135').click(function(){
	$('.house1').css({'top': $(window).scrollTop() +70}).addClass('active').fadeIn();
	$('.bg-popup').fadeIn();
    $('.gotoup').fadeOut();
});

$('.d131').click(function(){
	$('.house2').css({'top': $(window).scrollTop() +70}).addClass('active').fadeIn();
	$('.bg-popup').fadeIn();
    $('.gotoup').fadeOut();
});    


$('.d136').click(function(){
	$('.house3').css({'top': $(window).scrollTop() +70}).addClass('active').fadeIn();
	$('.bg-popup').fadeIn();
    $('.gotoup').fadeOut();
});

$('.d117').click(function(){
	$('.house4').css({'top': $(window).scrollTop() +130}).addClass('active').fadeIn();
	$('.bg-popup').fadeIn();
    $('.gotoup').fadeOut();
});

$('.b-close').click(function(){
	$('.popup-house').removeClass('active').fadeOut();
	$('.popup-politics').removeClass('active').fadeOut();
	$('.popup-table').removeClass('active').fadeOut();
	$('.bg-popup').fadeOut();
    $('.gotoup').fadeIn();
});

$('.bg-popup').click(function(){
	$('.popup-house').removeClass('active').fadeOut();
    $('.popup-politics').removeClass('active').fadeOut();
    $('.popup-table').removeClass('active').fadeOut();
	$('.bg-popup').fadeOut();
    $('.gotoup').fadeIn();
});

$('.go-d135').click(function(){
	$('.house1').css({'top': $(window).scrollTop() +70}).addClass('active').fadeToggle();
});

$('.go-d131').click(function(){
	$('.house2').css({'top': $(window).scrollTop() +70}).addClass('active').fadeToggle();
});

$('.go-d136').click(function(){
	$('.house3').css({'top': $(window).scrollTop() +70}).addClass('active').fadeToggle();
});

$('.go-d117').click(function(){
	$('.house4').css({'top': $(window).scrollTop() +70}).addClass('active').fadeToggle();
});



