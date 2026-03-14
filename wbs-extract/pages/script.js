//SLICK
$('.news-slide').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: false,
  cssEase: 'linear',
  autoplay: true,
  autoplaySpeed: 6000,
});


$("#logoParade2").smoothDivScroll({
	autoScrollingMode : "always",
	autoScrollingDirection : "endlessLoopRight",
	autoScrollingStep : 1,
	autoScrollingInterval : 50
});
// Logo parade event handlers
$("#logoParade2").bind("mouseover", function() {
	$(this).smoothDivScroll("stopAutoScrolling");
}).bind("mouseout", function() {
	$(this).smoothDivScroll("startAutoScrolling");
});

$(".gallery a[rel^='prettyPhoto']").prettyPhoto();

var el = document.getElementById( '.gray' );
  grayscale( el );


