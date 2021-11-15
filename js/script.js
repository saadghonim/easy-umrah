$(document).ready(function(){

/* ~~~~~~~~~~~~~~~start header~~~~~~~~~~~~~~~~~~~~~~ */

$(".bt_bars").click(function(){
  $(".navbar_").toggle("500");
  $(".moboverlay").fadeIn(500);
  $("body").addClass("over");
});
$(".moboverlay").click(function(){
  $(".navbar_").hide("500");
  $(".moboverlay").fadeOut(500);
  $("body").removeClass("over");
  $(".drop_user").hide("500");


});
$(".close_").click(function(){
  $(".moboverlay ").trigger("click");

});
$(".drop_down_menu").click(function(){
  $(this).children().next().slideToggle("500")

});
$(".bt_lang").click(function(){
  $(".drop_lang").slideToggle("500");
});
/*~~~~~~~~~~~~~start form~~~~~~~~~~~~~`*/


$(".user_hover").click(function(){
  $(".drop_user").toggle("500");
  $(".moboverlay").fadeIn(500);
})
$(".fa-times").click(function(){
  $(".moboverlay").fadeOut(500);
  $(".drop_user").hide("500");
});
$(".moboverlay").click(function(){
  $(".drop_user").hide("500");
})
$("#signin_").click(function(){
  $(".sign_in").slideUp(300);
  $(".forgot_").slideDown(300);
})
$("#sign_up_").click(function(){
  $(".sign_in").slideUp(300);
  $(".sign_up").slideDown(300);
})
$("#signup_2").click(function(){
  $(".sign_in").slideDown(300);
  $(".sign_up").slideUp(300);

})
$("#signup_").click(function(){
  $(".sign_in").slideDown(300);
  $(".forgot_").slideUp(300);

})

/*~~~~~~~~~~~~~end form~~~~~~~~~~~~~`*/

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

  $(".input_pickr").flatpickr();

  $('.input_select').selectpicker();

  $(window).on( "load", function() {
    $(".preloader-sa").fadeOut();
  });
  


  
});

// google map

let map;
let data_shal = document.getElementById("map").dataset;

function initMap() {
  const myLatLng = { lat: parseFloat(data_shal.lat), lng: parseFloat(data_shal.lng)  };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: myLatLng,
  });
  const infowindow = new google.maps.InfoWindow({
    content: data_shal.title,

  });

  const marker = new google.maps.Marker({
    position: myLatLng,
    map,
    icon:  'images/pin.png'

  });
  window.addEventListener('load', function() {
    infowindow.open({
      anchor: marker,
      map,
    });

})

$( function() {
  $( "#datepicker" ).datepicker();
  $( "#datepicker_" ).datepicker();

} );

} 