var coldown = 0;

function SelectType(){
    $("#web-container").on("click", function(){
      if (coldown == 0) {
        if (!$(".profile-img").hasClass("compact")) {
          $(".profile-img").addClass("compact")
        }
        if ($(this).hasClass("unselected")) {
           Selected($(this), $("#web-container"));
        }else if (!$(this).hasClass("selected")){
          $(this).addClass("unselected");
          $(this).removeClass("selected");
          $("#web-container").removeClass("unselected");
          $("#web-container").addClass("selected");
          ColdownTime();
        }
      }
  });
    $("#games-container").on("click", function(){
      if (coldown == 0) {
        if (!$(".profile-img").hasClass("compact")) {
          $(".profile-img").addClass("compact")
        }
        if ($(this).hasClass("unselected")) {
           Selected($(this), $("#games-container"));
        }else if (!$(this).hasClass("selected")){
          $(this).addClass("unselected");
          $(this).removeClass("selected");
          $("#games-container").removeClass("unselected");
          $("#games-container").addClass("selected");
          ColdownTime();
        }
      }
  });
}

function Selected(sel, unsel){
  ColdownTime();
  CleanElem(unsel);
  CleanElem(sel);
  $(sel).removeClass("unselected");
  $(unsel).removeClass("selected");
}

function CleanElem(element){
  $(element).removeClass("unselected");
  $(element).removeClass("selected");
  $(element).removeClass("unselected-selected");
  $(element).removeClass("selected-unselected");
}

function ColdownTime(){
  coldown = 2;
  setTimeout(function(){
    coldown = 0;
  }, 2000);
}

function CalcHeight(){
  var windowH = $(window).height();
  console.log(windowH);
  $(".list-category").height(windowH);
  $(".list-category").css("top", windowH/2);
}

$("document").ready(function () {
  // CalcHeight();
  SelectType();
  $(".owl-carousel").owlCarousel({
    items:1,
    dots:false,
    nav: true,
    rewind: true,
    navText:["<",">"]
  });
  $(".scroll-img").mCustomScrollbar({
    axis:"y"
  });
});
