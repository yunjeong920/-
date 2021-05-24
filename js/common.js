$(function(){
  let swiper = new Swiper(".swiper-container",{
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 30,
    autoplay: {
         delay: 7000,
         disableOnInteraction: false,
       },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
  });
})

$(function(){
  const addTop = 150;
  //script 입력영역
  $("nav ul li a,.back_to_top a,a.button,.footer_top a").click(function(){
    console.log($(this.hash))
    let thisElem = $(this.hash);
    let offsetElem = thisElem.offset();
    console.log(offsetElem.top)
    $("html,body").stop();
    $("html,body").animate({scrollTop : offsetElem.top},1500);
  });

  //scroll 상단 이동버튼 노출/비노출
  $(window).scroll(function(){
    // console.log($(this).scrollTop())
    if( $(this).scrollTop() == 0 ){
      $(".back_to_top").removeClass("on");
    }else{
      $(".back_to_top").addClass("on");
    }
  });

  //section offset top 값으로 class 추가
  let wHeight = $(window).innerHeight();
  console.log("window height: "+wHeight)
  $(window).scroll(function(){
    let thisScrollTop = $(this).scrollTop();
    $("section").each(function(){
      let thisOffset = $(this).offset();
      if( thisOffset.top <= thisScrollTop + addTop && thisScrollTop < thisOffset.top + wHeight ){
        $(this).addClass("active");
      }
    });
  });

});

$(function(){
  $("dd:not(:first)").css("display","none");
  $("dl dt").on("click",function(){
    if( $("+dd",this).css("display") == "none"){
      $("dl dd").slideUp("slow");
      $("+dd",this).slideDown("slow");
    }
  })
})
