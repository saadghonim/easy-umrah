$(document).ready(function(){

/* ~~~~~~~~~~~~~~~start header~~~~~~~~~~~~~~~~~~~~~~ */

$(".bt_bars").click(function(){
  $(".navbar_").toggle("500");
  $(".moboverlay").fadeIn(500);
  $("body").addClass("over");
});
$(".moboverlay").click(function(){
  $(".navbar_").toggle("500");
  $(".moboverlay").fadeOut(500);
  $("body").removeClass("over");

});
$(".fa-times").click(function(){
  $(".moboverlay ").trigger("click");

});
$("#ul_drop_").click(function(){
  $(".ul_drop").slideToggle("500");

});
$(".bt_lang").click(function(){
  $(".drop_lang").slideToggle("500");

});
/* ~~~~~~~~~~~~~~~end header~~~~~~~~~~~~~~~~~~~~~~ */


/* ~~~~~~~~~~~~~~~start offers~~~~~~~~~~~~~~~~~~~~~~ */

$('.offers .owl-carousel').owlCarousel({
  loop:true,
  margin:30,
  nav:true,
  Loop:true,
  autoplay:true,
  autoplaySpeed:5000,
  loop:true,
  speed:6000,
  rtl: $("html").attr("dir") == "rtl" ? true : false,
  navText: ["<i class='fas fa-angle-right'></i>", "<i class='fas fa-angle-left'></i>"],
  responsive:{
      0:{
          items:1,
          margin:15
      },
      600:{
          items:2
      },
      1000:{
          items:3,
          loop:true
      }
  }
});

/* ~~~~~~~~~~~~~~~end offers~~~~~~~~~~~~~~~~~~~~~~ */


   
  

    /* Works xs slider */
    // $(".gallery_parant").ticker({
    //   item:'anc_gallery',
    // });





  //   $('.marquee').marquee({
  //     duration: 10000,
  //     gap: 15,
  //     delayBeforeStart: 0,
  //     direction: 'right',
  //     duplicated: true,
  //     pauseOnHover: true
  // });

  $(".input_pickr").flatpickr();

  $('.input_select').selectpicker();

  $(window).load(function() {
    $(".preloader-sa ").fadeOut();
  });
  
});

