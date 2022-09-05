




        $(document).ready(function(){
        $(function() {
            $('a[href*=\\#]:not([href=\\#])').on('click', function() {
                
              
                    if ($(window).width() < 950) {
                      var customOffset = 64;
                    }
                 

                
                    else {
                        var customOffset = 70;
                    }
                
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.substr(1) +']');
                if (target.length) {
                    $('body,html,document').animate({
                        scrollTop: target.offset().top - customOffset
                    },  { duration: 300
                      
                      });
                    return false;
                   
                }
            
            });
           
        });
      });
     


$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 100){
            $('#scroll').fadeIn();
        }else{
            $('#scroll').fadeOut();
        }
    });
    $('#scroll').click(function(){
        $("body,html,document").animate({ scrollTop: 0 }, { duration: 300
                      
        });
        return false;
    });
});


$(document).ready(function(){
  $(".burger").add('.burger_link').click(function(){
    $(".burger_menu").slideToggle(300);
    $(".burger_menu_wrapper").fadeToggle(200);
    $(".bar").toggleClass('change');

  });
});

$(window).resize(function() {
  if ($(window).width() > 950) {
    $(".burger_menu").slideUp(300);
    $(".burger_menu_wrapper").fadeOut(200);
    $(".bar").removeClass('change');
  }
});






$(document).ready(function(){
    $("#lighthouse_event1").hover(function(){
        if ($(window).width() > 950) {
      $(".lighthouse_event_bg1").stop().slideToggle(300);
      $(".lighthouse_event_text1").stop().fadeToggle(500);
        }
        else {

        }
    });
  });

  $(document).ready(function(){
    $("#lighthouse_event2").hover(function(){
        if ($(window).width() > 950) {
      $(".lighthouse_event_bg2").stop().slideToggle(300);
      $(".lighthouse_event_text2").stop().fadeToggle(500);
        }
        else {

        }
    });
  });

  $(document).ready(function(){
    $("#lighthouse_event3").hover(function(){
        if ($(window).width() > 950) {
      $(".lighthouse_event_bg3").stop().fadeToggle(300);
      $(".lighthouse_event_text3").stop().fadeToggle(500);
        }
        else {

        }
    });
  });


  $(window).resize(function() {
    if ($(window).width() > 950) {
      $(".lighthouse_event_bg").hide();
      $(".lighthouse_event_text").hide();
     
    }
  });
 
  $(window).resize(function() {
    if ($(window).width() < 950) {
      $(".lighthouse_event_bg").show();
      $(".lighthouse_event_text").show();
     
    }
  });


  
    $('.slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    
    responsive: [
        {
                breakpoint:1150,
                settings: {
               
                arrows:false,

            }


        },
        {
          breakpoint:850,
          settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite:true,
          dots:true,
          arrows:false,

      }


  },
    ]
  });
      
  
  
  $('.phanspective_slider').slick({
   
    
    dots: true,


speed:600,
autoplay: true,
autoplaySpeed: 4000,
responsive: [
  {
          breakpoint:1150,
          settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite:true,
          dots:true,
          arrows:false,

      }


  },
]


});


  $(document).ready(function(){
    $(".phan_slide1").click(function(){
      $(".module1").fadeIn(300);
      $(".module_bg").fadeIn(300);
      
      
      var video = $("#PhanVid1")[0]; // id or class of your <video> tag
      if (video.paused) {
        video.play();
        }

    });
  });

  $(document).ready(function(){
    $(".module_bg").click(function(){
      $(".module1").fadeOut(300);
      $(".module_bg").fadeOut(300);
      
      
      var video = $("#PhanVid1")[0]; // id or class of your <video> tag
  if (video.play) {
    video.pause();
    video.currentTime = 0;
video.load();
  }   

    });
  });








  /* Second Video */


  $(document).ready(function(){
    $(".phan_slide2").click(function(){
      $(".module2").fadeIn(300);
      $(".module_bg").fadeIn(300);
      
      
      var video = $("#PhanVid2")[0]; // id or class of your <video> tag
      if (video.paused) {
        video.play();
        }

    });
  });

  $(document).ready(function(){
    $(".module_bg").click(function(){
      $(".module2").fadeOut(300);
      $(".module_bg").fadeOut(300);
      
      
      var video = $("#PhanVid2")[0]; // id or class of your <video> tag
  if (video.play) {
    video.pause();
    video.currentTime = 0;
video.load();
  }   

    });
  });


    /* Third Video */


    $(document).ready(function(){
      $(".phan_slide3").click(function(){
        $(".module3").fadeIn(300);
        $(".module_bg").fadeIn(300);
        
        
        var video = $("#PhanVid3")[0]; // id or class of your <video> tag
        if (video.paused) {
          video.play();
          }
  
      });
    });
  
    $(document).ready(function(){
      $(".module_bg").click(function(){
        $(".module3").fadeOut(300);
        $(".module_bg").fadeOut(300);
        
        
        var video = $("#PhanVid3")[0]; // id or class of your <video> tag
    if (video.play) {
      video.pause();
      video.currentTime = 0;
  video.load();
    }   
  
      });
    });
  



  $(".phan_module").add(".module_bg").add(".burger_menu").on( 'mousewheel DOMMouseScroll', function ( e ) {
    var e0 = e.originalEvent,
        delta = e0.wheelDelta || -e0.detail;

    this.scrollTop += ( delta < 0 ? 1 : -1 ) * 30;
    e.preventDefault();
});
   