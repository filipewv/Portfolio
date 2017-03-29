var coldown = 0;

function SelectType(){
    $("#games-container").on("click", function(){
      if (coldown == 0) {
        if (!$(".profile-img").hasClass("compact")) {
          $(".profile-img").addClass("compact")
        }
        if ($(this).hasClass("unselected") || $(this).hasClass("selected-unselected")) {
           Selected($(this), $("#web-container"));
        }else if (!$(this).hasClass("selected-unselected") && !$(this).hasClass("unselected-selected") ){
          $(this).addClass("selected");
          $(this).removeClass("unselected");
          $("#web-container").removeClass("selected");
          $("#web-container").addClass("unselected");
          ColdownTime();
        }
      }
  });
    $("#web-container").on("click", function(){
      if (coldown == 0) {
        if (!$(".profile-img").hasClass("compact")) {
          $(".profile-img").addClass("compact")
        }
        if ($(this).hasClass("unselected") || $(this).hasClass("selected-unselected")) {
           Selected($(this), $("#games-container"));
        }else if (!$(this).hasClass("selected-unselected") && !$(this).hasClass("unselected-selected") ){
          $(this).addClass("selected");
          $(this).removeClass("unselected");
          $("#games-container").removeClass("selected");
          $("#games-container").addClass("unselected");
          ColdownTime();
        }
      }
  });
}

function Selected(sel, unsel){
  ColdownTime();
  CleanElem(unsel);
  CleanElem(sel);
  $(sel).addClass("unselected-selected");
  $(sel).removeClass("unselected");
  $(unsel).addClass("selected-unselected");
  $(unsel).removeClass("selected");
  $(unsel).removeClass("unselected-selected");
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
  CalcHeight();
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
