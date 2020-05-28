window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
   
    document.getElementById("navbarNav").style.backgroundColor = "white";
    document.getElementById("navbarNav").style.boxShadow = "3px -3px 3px 4px rgba(0,0,0,0.5)";



  } else {
   
    document.getElementById("navbarNav").style.backgroundColor = "transparent";
    document.getElementById("navbarNav").style.boxShadow ="0px 0px 0px 0px rgba(0,0,0,0.5)";

  }

}

$(window).scroll(function(){

    var wScroll = $(this).scrollTop();

    if (wScroll > $('.logo').offset().top - 500) {
    	$('.logo').addClass('muncul');
    }
    if (wScroll > $('.card-deck').offset().top - 500) {
      $('.card-deck .card').each(function(i){
        setTimeout(function(){
          $('.card-deck .card').eq(i).addClass('muncul');
        }, 300 *(i+1));
      });
    }
    if (wScroll > $('.medsos').offset().top - 200) {
      $('.medsos .row').each(function(i){
        setTimeout(function(){
          $('.medsos .row').eq(i).addClass('muncul');
        }, 300 *(i+1));
      });
    }
})
