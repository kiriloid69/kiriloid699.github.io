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
    autoplay: true,
    speed: 1000,
    pauseOnHover: true
});

$('.politics').click(function(){
	$('.popup-politics').css({'top': $(window).scrollTop() +130}).addClass('active').fadeIn();
	$('.bg-popup').fadeIn();
});

$('.coast').click(function(){
	$('.popup-table').css({'top': $(window).scrollTop() +130}).addClass('active').fadeIn();
	$('.bg-popup').fadeIn();
});

$(window).scroll(function(){
  $(".mous").stop().animate({"marginTop": "100px"}, "slow" );  
});

$('.d135').click(function(){
	$('.house1').css({'top': $(window).scrollTop() +130}).addClass('active').fadeIn();
	$('.bg-popup').fadeIn();
});

$('.d131').click(function(){
	$('.house2').css({'top': $(window).scrollTop() +130}).addClass('active').fadeIn();
	$('.bg-popup').fadeIn();
});    


$('.d136').click(function(){
	$('.house3').css({'top': $(window).scrollTop() +130}).addClass('active').fadeIn();
	$('.bg-popup').fadeIn();
});

$('.d117').click(function(){
	$('.house4').css({'top': $(window).scrollTop() +130}).addClass('active').fadeIn();
	$('.bg-popup').fadeIn();
});

$('.b-close').click(function(){
	$('.popup-house').removeClass('active').fadeOut();
	$('.popup-politics').removeClass('active').fadeOut();
	$('.popup-table').removeClass('active').fadeOut();
	$('.bg-popup').fadeOut();
});

$('.bg-popup').click(function(){
	$('.popup-house').removeClass('active').fadeOut();
    $('.popup-politics').removeClass('active').fadeOut();
    $('.popup-table').removeClass('active').fadeOut();
	$('.bg-popup').fadeOut();
});

$('.go-d135').click(function(){
	$('.house1').css({'top': $(window).scrollTop() +130}).addClass('active').fadeToggle();
});

$('.go-d131').click(function(){
	$('.house2').css({'top': $(window).scrollTop() +130}).addClass('active').fadeToggle();
});

$('.go-d136').click(function(){
	$('.house3').css({'top': $(window).scrollTop() +130}).addClass('active').fadeToggle();
});

$('.go-d117').click(function(){
	$('.house4').css({'top': $(window).scrollTop() +130}).addClass('active').fadeToggle();
});



