$(document).ready(function(){


   

    // Products 
    var owl = $("#hero_sliders");

    owl.owlCarousel({

        itemsCustom: [
            [0, 1],
            [450, 1],
            [600, 1],
            [700, 2],
            [1000, 1],
            [1200, 1],
            [1400, 1],
            [1600, 1]
        ],
        lazyLoad : true,
        padding:20,
        autoPlay : true,
        pagination: false,
        transitionStyle:"fade",
        navigation: true

    });


      //NEWS
      $("#featured-events").owlCarousel({
      autoPlay:false,
      items :3,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,2],
      itemsTablet : [768, 2],
      itemsMobile : [479, 1],
      navigation: true,
      navigationText:["<i class='pe-7s-angle-left pe-5x pe-va'></i>","<i class='pe-7s-angle-right pe-5x pe-va'></i>"],
      pagination: false
      });
     

          //NEWS
      $("#testimonials").owlCarousel({
      autoPlay:false,
      items :1,
      itemsDesktop : [1199,1],
      itemsDesktopSmall : [979,1],
      itemsTablet : [768, 1],
      itemsMobile : [479, 1],
      navigation: false,
      pagination: true
      }); 



     //NEWS
      $("#events").owlCarousel({
      autoPlay:false,
      items :3,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,2],
      itemsTablet : [768, 2],
      itemsMobile : [479, 1],
      navigation: true,
      navigationText:["<i class='pe-7s-angle-left pe-5x pe-va'></i>","<i class='pe-7s-angle-right pe-5x pe-va'></i>"],
      pagination: false
      });

    /*
   *   Nicescroll 
   **/

    jQuery("body").niceScroll({
    cursorcolor:"#6D2746",
    cursorborder:"0px",
    cursorwidth :"8px",
    zindex:"9999"
  });

});