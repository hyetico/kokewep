const visualElements = document.querySelectorAll('.visual_main_inner>div')


//index가 필요하기때문에 불러줘여함
visualElements.forEach((visualElement, index)=>{
  gsap.to(visualElement, 1.3 , {
    delay:index * 0.2,
    opacity:1
  })

})


const scrollEls =document.querySelectorAll('.scroll_el')

scrollEls.forEach((scrollEl)=>{
  new ScrollMagic
  //Scene위치감지 메소드
    .Scene({
      triggerElement:scrollEl,
      //어떤객체를 적용할지
      triggerHook:0.5
      //어디위치 70프로에서 훅을 감지하는걸 적용한다.
    })
    .setClassToggle(scrollEl,'show')
    .addTo(new ScrollMagic.Controller())
})




//HOT tab
const hotBtn = document.querySelectorAll('.hot_outer .hot_tab >li >a')
const hotCont = document.querySelectorAll('.hot_conts > .hot_tab_cont')
let activeCont = ''

for(let i=0; i< hotBtn.length;i++){
  hotBtn[i].addEventListener('click',function(e){
    e.preventDefault();

    for(let j=0; j<hotBtn.length;j++){
      hotBtn[j].classList.remove('on')
      hotCont[j].style.display='none'
    }
  
    this.classList.add('on')
    activeCont = this.getAttribute('href')
    document.querySelector(activeCont).style.display = 'block';
  })
}


//메인슬라이드
  new Swiper('.visual_main_outer .visual_main_slide',{
    slidesPerView: 1,
    direction:'vertical',
    autoplay:true,
    delay:7000,
    loop:true,

    navigation: {
      prevEl: ".visual_main_outer .visual_main_arrow .arrow_up",
      nextEl: ".visual_main_outer .visual_main_arrow .arrow_down"
    }
  })

  new Swiper('.roastery_outer .roastery_right',{
    slidesPerView: 1,
    autoplay:true,
    delay:3000,
    // loop:true,

    navigation: {
      prevEl: ".roastery_outer .roastery_arrow div.arrow_left",
      nextEl: ".roastery_outer .roastery_arrow div.arrow_right"
    }
  })



//hot_outer
  var galleryTop = new Swiper(".hot_outer .hot_right_swiper_outer", {
    loop: true,
    autoplay:true,
    spaceBetween: 0,
    loopedSlides:3,
    // centeredSlides: true,
    controller: {
      control: galleryThumbs
    },

    navigation: {
      prevEl: ".hot_outer .hot_right_arrow div.arrow_left",
      nextEl: ".hot_outer .hot_right_arrow div.arrow_right"
    }

  });

 var galleryThumbs = new Swiper(".hot_outer .hot_right_bottom", {
    loop: true,
    spaceBetween: 0,
    slidesPerView: 3,
    watchSlidesVisibility: true,
    loopedSlides:3, 
    freeMode: true,
    // centeredSlides: true,
    watchSlidesProgress: true,
    // centeredSlides: true,
    slideToClickedSlide: true,
    controller: {
      control: galleryTop
    },
  });

  galleryTop[0].controller.control = galleryThumbs;
  galleryThumbs[0].controller.control = galleryTop;

  // galleryTop[0].params.control = galleryThumbs;
  // galleryThumbs[0].params.control = galleryTop;



  //리뷰 슬라이드
  new Swiper('.review_outer .review_swiper',{
    slidesPerView: 1,
    autoplay:false,
    delay:6000,
    loop:true,

    pagination: {
      el: ".review_outer .swiper-pagination",
      type: "fraction",
    },

    navigation: {
      prevEl: ".review_outer .review_arrow div.arrow_left",
      nextEl: ".review_outer .review_arrow div.arrow_right"
    }
  })


