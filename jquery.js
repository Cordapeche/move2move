$(document).ready(function(){

    $(window).on("scroll", function() {
      if($(window).scrollTop() > 50) {
          $("#header").addClass("active-header");
          $(".menu-link").addClass("active-menu-links");
          $("#header-img").attr("src", "img/LogoNoir.svg");
      } else {
          //remove the background property so it comes transparent again (defined in your css)
         $("#header").removeClass("active-header");
         $(".menu-link").removeClass("active-menu-links");
         $("#header-img").attr("src", "img/LogoBlanc.svg");
      }
  });
  
    // Responsive menu
    $("#responsive-nav-bar").hide();
  
    $("#image-button-black").click(function(){
      $("#responsive-nav-bar").slideToggle();
    });
  
    $("#responsive-home-item , #responsive-features-item , #responsive-products-item , #responsive-media-item , #responsive-pricing-item").click(function(){
      $("#responsive-nav-bar").slideToggle(200);
    })
  
  
  
  
  
    // Default sections visibility
    $('.product-content').hide();
    $('#product-container-one').show();
  


  
  
    // First Button Styling hidden/visible
    if (firstVisible === true) {
      firstButton.addClass('product-button-active');
    }
  
  });