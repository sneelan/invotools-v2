$(document).ready(function(){              
    $(".passclass").click(function(){
      $(".passclass").removeClass("active");
      $(this).addClass("active");
      $(".printclass").removeClass("screen-desktop");$(".printclass").removeClass("screen-mobile");$(".printclass").removeClass("screen-tablet");
      $(".printclass").addClass($(this).attr('target')); $(".printclass").removeClass("mob-land");$(".printclass").removeClass("tab-land");                     
    });              
    $(".tab-rotate").click(function(){$(".printclass").toggleClass("tab-land"); });
    $(".mob-rotate").click(function(){$(".printclass").toggleClass("mob-land"); });

    //section-different responsive screens        
    $(".passclass").hover(function(){
      $(".passclass").removeClass("active");
      $(this).addClass("active");
      $(".printclass").removeClass("screen-desktop");$(".printclass").removeClass("screen-mobile");$(".printclass").removeClass("screen-tablet");
      $(".printclass").addClass($(this).attr('target')); $(".printclass").removeClass("mob-land");$(".printclass").removeClass("tab-land");
                      
    });              
    $(".tab-rotate").hover(function(){$(".printclass").toggleClass("tab-land"); });
    $(".mob-rotate").hover(function(){$(".printclass").toggleClass("mob-land"); });
  //end----section-different responsive screens      

//start----poweredup sponsorship
            slideShow();
            function slideShow(){              
                var current = $('.slider-js .d-block');//If index != 0/false then show next img
              var next = current.next().length ? 
                  current.next() : // if index == false then show first img
                  current.siblings().first();                        
               current.hide().removeClass('d-block').addClass('d-none');
               next.fadeIn("1500").delay("1500").removeClass('d-none').addClass('d-block');               
               
              
              //*** Repeat function every 3 seconds ***//
              setTimeout(slideShow, 3700);              
            };
            
            function slideShow2(){              
                var current = $('.slider-js2 .d-block');//If index != 0/false then show next img
              var next = current.next().length ? 
                  current.next() : // if index == false then show first img
                  current.siblings().first();                        
               current.hide().removeClass('d-block').addClass('d-none');
               next.fadeIn("1500").delay("1500").removeClass('d-none').addClass('d-block');               
               
              
              //*** Repeat function every 3 seconds ***//
              setTimeout(slideShow2, 3700);              
            };slideShow2();
            
            function slideShow1(){              
                var current = $('.slider-js1 .d-block');//If index != 0/false then show next img
              var next = current.next().length ? 
                  current.next() : // if index == false then show first img
                  current.siblings().first();                        
               current.hide().removeClass('d-block').addClass('d-none');
               next.fadeIn("1500").delay("1500").removeClass('d-none').addClass('d-block');               
               
              
              //*** Repeat function every 3 seconds ***//
              setTimeout(slideShow1, 3700);              
            };slideShow1();
  //end----poweredup sponsorship          


    //home-video-circle animation  

    function changimg(){      
      var current = $('.circle-js .d-block');//If index != 0/false then show next img
      var next = current.next().length ? 
          current.next() : // if index == false then show first img
          current.siblings().first();                        
      current.delay().hide().removeClass('d-block').addClass('d-none');
      next.removeClass('d-none').addClass('d-block');          
      //*** Repeat function every 3 seconds ***//
      //setTimeout(changimg, 9000);              
    };
    //changimg();

    function runcircle(){ 
    $("#video-circle").addClass('run-animation');   
    };
    function removcircleclass(){ 
    $("#video-circle").removeClass('run-animation');   
    };

    function NeelanAnimation(){ 
      setTimeout(runcircle);
      setTimeout(changimg, 2800);
      setTimeout(removcircleclass, 6000);
      setTimeout(NeelanAnimation, 9000);
    };NeelanAnimation();


  //start----howwehelp
  $(".accordion-image-js .accordion-button").click(function(){   
    var thisbutton=$(this);
    $(".accordion-image-js .slider-content img").fadeOut('slow',function(){
      $(".accordion-image-js .slider-content").removeClass().addClass(thisbutton.attr('target')+" slider-content");
      $(".accordion-image-js .slider-content img").fadeIn('slow');      
   });
    
    //$(".slider-howwehelp .slider-content").delay("1000").removeClass().addClass($(this).attr('target')+" slider-content");
    //$(".slider-howwehelp .slider-content img").delay("1000").fadeIn();       
  });
  $(".accordion-image-js .accordion-button:nth-child(2)").addClass("d-none");
  //end----howwehelp
  
  //$("#hide-white").css("margin-left",$("#rotating-obj").width()/2);
  //$("#hide-white").css("width",$("#rotating-obj").width()); 
    
  function rotating_margin(){
        //$(".animate-rotate").css("margin-left",$("#rotating-obj").width()*-0.5);  
        $mym=$(".gethiswidthjs").height() * -0.5;
        $("#rotating-obj").css("margin-left",$mym); 
        //$(".zzmybtn").text($(".gethiswidthjs").height()+'  ----  '+$mym); 
   }; rotating_margin();
  $(window).on('resize', function() {
    rotating_margin();
  });
  

  
  if(window.innerWidth<992){
    $('.carousel').removeAttr("data-bs-ride", "carousel");    
  }

  if(window.innerWidth>1024){
      $(window).scroll(function () {
        if ($(this).scrollTop() > 150) {
          $('#back-to-top').fadeIn();
        } else {
          $('#back-to-top').fadeOut();
        }
      });
      // scroll body to 0px on click
      $('#back-to-top').click(function () {
        $('body,html').animate({
          scrollTop: 0
        },10);
        return false;
      });  
  }
  
  function resizecirlce(){
    if(window.innerWidth<540){
      $mywidth=(window.innerWidth - 24) / 527;
      $videowidth=window.innerWidth-24;
      $ml=(527-window.innerWidth)/2;

      $mywidth='scale('+$mywidth+')';
      //alert($mywidth);
      $position='left top';     
      
      $('.video-wrapper-out').css("display","block");
      $('.video-wrapper-new-in').css({"transform":$mywidth,'transform-origin': $position});
      $('.video-wrapper-out').css({width:$videowidth, height:($videowidth+30)});
      $('.video-wrapper-new').css({width:$videowidth, height:($videowidth+30)});
      //$('.video-wrapper-new').css({'margin-left':'-'+($ml-20)+'px', 'margin-top':'-'+($ml+20)+'px'});
      //alert($ml);
    }
    if(window.innerWidth>540){ 
      $('.video-wrapper-new-in').removeAttr("style");
      $('.video-wrapper-out').removeAttr("style");
      $('.video-wrapper-new').removeAttr("style");
      $('.video-wrapper-out').css("display","block");
    }
  } resizecirlce();
  $(window).on('resize', function() {
    resizecirlce();
  });
   

/*
$('.dropdown').hover(function() {
    $('.dropdown-menu').addClass("d-none").slideUp(0);    
    $(this).children('.dropdown-menu').removeClass("d-none").slideDown(400);;
  });
   
  $('.dropdown').hover(function() {
    $('.dropdown-toggle').removeClass('show').removeAttr("aria-expanded","true");
    $('.dropdown-menu').removeClass('show').removeAttr("aria-expanded","true");
    $(this).children('.dropdown-toggle').addClass('show').attr("aria-expanded","true");
    $(this).children('.dropdown-menu').addClass('show').attr("aria-expanded","none");
  });
  $('.dropdown').mouseout(function() {
    //$(this).children('.dropdown-toggle').removeClass('show').attr("data-bs-popper","false");
    //$(this).children('.dropdown-menu').removeClass('show').removeAttr("aria-expanded","none");
  });
*/
  $('a.nav-link.dropdown-toggle').click(function() {
    location.href = this.href;
  });

  //powaindex page
  $(".big-video #youtubethumb .video-play-in").click(function(){
    $(".big-video #youtubethumb").addClass("d-none"); $(".big-video #youtube").removeClass("d-none");
    $(".big-video #youtube-iframe").attr("src",$(".big-video #youtube-iframe").attr("src")+"?autoplay=1");
  }); 
  $(".small-video #youtubethumb .video-play-in").click(function(){
    $(".small-video #youtubethumb").addClass("d-none"); $(".small-video #youtube").removeClass("d-none");
    $(".small-video #youtube-iframe").attr("src",$(".small-video #youtube-iframe").attr("src")+"?autoplay=1");
  }); 




});
  