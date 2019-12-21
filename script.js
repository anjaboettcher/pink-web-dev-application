$(window).scroll(function(){
  console.log(window.innerWidth);

  if (window.innerWidth > 740) {
    $(".fade-out-block-1-heading").css("opacity", 5.5 - $(window).scrollTop() / 250);
    $(".fade-out-block-1-one").css("opacity", 1.5 - $(window).scrollTop() / 250);
    $(".fade-out-block-1-two").css("opacity", 4 - $(window).scrollTop() / 250);
    $(".fade-out-block-1-three").css("opacity", 5.5 - $(window).scrollTop() / 250);
    $(".fade-out-block-2").css("opacity", 9.5 - $(window).scrollTop() / 250);
  } else { 
    $('body').css('opacity', 1)
  }
});

console.log("connected!!!")