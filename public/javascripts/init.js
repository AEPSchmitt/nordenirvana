var hello = 'Would you like to know a secret?';
var yes = 'Okay then. Meet me in noerdenirvana.dk/secret';
var no = 'Are you fucking kidding me?';

$(document).ready(function () {
  console.log('Hello, Friend...');
  $('.left').fadeIn('slow');
  slideshow(5000);

  // Activity hover
  $('.btn-aktiviteter').hover(function(){
    toggleSlideshow();
    $('.imageSlideshow').css("background-image", "url(https://www.dropbox.com/s/vp47lw4m2keura5/aktiviteter.jpg?raw=1)");
  }, function(){
    toggleSlideshow();
    $('.imageSlideshow').css("background-image", "url(https://www.dropbox.com/s/et69hw77or2qbvc/screen_0.png?raw=1)");
  });
  
  // Home hover
  $('.btn-home').hover(function(){
    toggleSlideshow();
    $('.imageSlideshow').css("background-image", "url(../images/tree_background.png)");
  }, function(){
    toggleSlideshow();
    $('.imageSlideshow').css("background-image", "url(https://www.dropbox.com/s/et69hw77or2qbvc/screen_1.png?raw=1)");
  })

});

$(".left2").hover(
  function () {
      console.log("Hovering");
    $(this).hide();
    $(".left").show('medium');
  },
  function(){
      $(".left").hide('medium');
    $(this).show();
  }
)

window.onbeforeunload = function () {   
    $('.info').hide('medium')
}

var open = 'none';
function openMenu(menu_name){
  if (menu_name === 'none'){ // If menu closing
    $(open).hide('medium');
    $(".left2").hide();
    $(".left").show();
  } else if(open !== menu_name){ // If new menu opens
    $(menu_name).show('slow');
    $(open).hide('slow');
    $(menu_name).show('slow');
    $(".left").hide();
    $(".left2").show();
  } else { // If same menu

  }
  open = menu_name;
}

var slideShowRunning = true;
function toggleSlideshow(){
  slideShowRunning = !slideShowRunning;
}

var image = 0;
function slideshow(speed){
  setTimeout(function(){
    let path = 'url('+ screenshots[image] + ')';
    console.log("Switching screenshot to " + path);
    if(slideShowRunning){
      $('.imageSlideshow').css("background-image", path);
      image = (image + 1)%4
    }
    slideshow(speed);
  }, speed)
}

var screenshots = [
  "https://www.dropbox.com/s/et69hw77or2qbvc/screen_0.png?raw=1",
  "https://www.dropbox.com/s/b48lbfts2sxwroa/screen_1.png?raw=1",
  "https://www.dropbox.com/s/xsyqh1t5ozza4rh/screen_2.png?raw=1",
  "https://www.dropbox.com/s/3fk5j9mib2nz2wh/screen_3.png?raw=1"
]

$(document).ready(function() {
        
        var $body = $('body');
        var $target = null;
        var isDraggEnabled = false;

        $body.on("mousedown", "div", function(e) {
           
          $this = $(this);
            isDraggEnabled = $this.data("draggable");

            if (isDraggEnabled) {
              if(e.offsetX==undefined){
            x = e.pageX-$(this).offset().left;
            y = e.pageY-$(this).offset().top;
          }else{
            x = e.offsetX;
            y = e.offsetY;
          };

          $this.addClass('draggable');
              $body.addClass('noselect');
              $target = $(e.target);
            };
   
        });
        
         $body.on("mouseup", function(e) {
            $target = null;
            $body.find(".draggable").removeClass('draggable');
            $body.removeClass('noselect');
        });
        
         $body.on("mousemove", function(e) {
              if ($target) {
                  $target.offset({
                      top: e.pageY  - y,
                      left: e.pageX - x
                  });
              };     
         });

    });

function closeSlideshow(){
  slideShowRunning = false;
  $('.imageSlideshow').hide("medium");
  $('.slideshow-btn').removeClass("inactive");
  $('.slideshow-btn').addClass("active");
}

function openSlideshow(){
  slideShowRunning = true;
  $('.imageSlideshow').show("medium");
  $('.slideshow-btn').removeClass("active");
  $('.slideshow-btn').addClass("inactive");
}