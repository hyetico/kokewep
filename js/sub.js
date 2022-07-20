

// $(window).scroll(function () {
// 	var headerHeight = $('.site-header').innerHeight();
// 	var contentHeight = $('.site-main').innerHeight();
// 	var sidebarHeight = $('.side-navigation').height();
//   var sidebarBottomPos = contentHeight - sidebarHeight; 
//   var trigger = $(window).scrollTop() - headerHeight;

//       	if ($(window).scrollTop() >= headerHeight) {
//           	$('.side-navigation').addClass('fixed');
//       	} else {
//           	$('.side-navigation').removeClass('fixed');
//       	}

//       	if (trigger >= sidebarBottomPos) {
//           	$('.side-navigation').addClass('bottom');
//       	} else {
//           	$('.side-navigation').removeClass('bottom');
//       	}
// });


// const fixedMenu = document.querySelector('.aside_menu')
// const fixedPoint = document.querySelector('.content')
// const fixedPointHeight = fixedPoint.offsetHeight
// const fixedPointTop = fixedPoint.offsetTop
// const rightCont = document.querySelector('.right_conts')
// const rightContHeight = rightCont.height
// const rightContTop = rightCont.offsetTop
// // const footer = document.querySelector('.header_outer')
// // const footer = document.querySelector('.header_outer')

// let sidebarBottomPos = rightContHeight - fixedPointHeight; 
// const footer = document.querySelector('footer')
// const footerHeight = footer.offsetHeight
// const footerTop = footer.offsetTop


// // let MenuHeight = ''

// window.addEventListener('scroll',function(){
//   let scrollTop = window.scrollY || document.documentElement.scrollTop;
//   // let trigger = scrollTop - 100;

//   // fixedPointTop
//   if(scrollTop >= fixedPoint.offsetTop) {
//     fixedMenu.classList.add('fixed')
//     rightCont.style.marginLeft='330px'
  
//   }else{
//     fixedMenu.classList.remove('fixed')
//     rightCont.style.marginLeft='0'
//   }

// })






//커피찾기 메뉴
const subBtns = document.querySelectorAll('.aside_nav> li')
const toggleIcon = document.querySelectorAll('.aside_nav li>a>i')
const subMenus = document.querySelectorAll('.aside_nav > li >.sub_box')

let isState = false;
for(let i=0;i <subBtns.length;i++){
  subBtns[i].addEventListener('click',function(e){
    e.preventDefault();
    if(isState == false){
      subMenus[i].style.display='block'
      toggleIcon[i].classList.add('rotate')
      isState = true
    } else {
      subMenus[i].style.display='none'
      toggleIcon[i].classList.remove('rotate')
      isState = false
    }
  })

}
const filterBtn = document.querySelector('.aside_sub li.filtab >a')
const filterCont = document.querySelector('.right_conts .filter_tab')
const bestCont = document.querySelector('.best_tab_conts')

let isStates = false
filterBtn.addEventListener('click',function(e){
  e.preventDefault();

  if(isStates == false){
    filterCont.style.display='block'
    bestCont.style.display='none'
    isStates = true
  } else {
    filterCont.style.display='none'
    bestCont.style.display='block'
    bestCont.style.display='none'
    isStates = false
  }
})
   
console.log(filterBtn)
console.log(filterCont)







