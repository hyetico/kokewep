



  const priceOption = document.getElementById('price')

  // const priceValue = priceOption.options[priceOption.selectedIndex].value;

  let price = document.querySelector(".select_price");
  let selectCoffee = document.querySelector(".select_name");
  let numBtn = document.querySelector(".num_btn");



  // priceOption.addEventListener('change',function(){

  //   // let selectClose = document.querySelector(".select_close");
  //   // let spanTxt = document.createTextNode('x')

  //   numBtn.style.display='block'
  //   price.textContent = priceOption.options[priceOption.selectedIndex].value;
  //   selectCoffee.textContent = priceOption.options[priceOption.selectedIndex].text;
  // })

  // const typeOption = document.getElementById('type')
  // let selectType = document.querySelector(".select_type");

  // typeOption.addEventListener('change',function(){
  //   selectType.textContent = typeOption.options[typeOption.selectedIndex].text;
  // })

  // const number = document.getElementById('number')
  // let increaseBtn = document.querySelector(".in");
  // let decreaseBtn = document.querySelector(".de");


  // increaseBtn.addEventListener('click',function(){
  //   const current = parseInt(number.innerText, 10);
  //   number.innerText = current + 1;
  //   price.innerText = priceOption.options[priceOption.selectedIndex].value *1 + price.innerText*1
  // })

  // decreaseBtn.addEventListener('click',function(){
  //   const current = parseInt(number.innerText, 10);
  //   number.innerText = current - 1;
  //   price.innerText = priceOption.options[priceOption.selectedIndex].value *1 - price.innerText*1


  // })


  // decrease.onclick = () => {
  //   const current = parseInt(number.innerText, 10);
  //   number.innerText = current - 1;
  // };


  // console.log(typeOption)




  // var selectValue = options[langSelect.selectedIndex].value;
  // select element에서 선택된 option의 text가 저장된다.
  // var selectText = langSelect.options[langSelect.selectedIndex].text;

  // if (priceOption.){

  //   result.innerHTML= priceValue}



  // var langSelect = document.querySelector(".price_option") 
  
// select element에서 선택된 option의 value가 저장된다.  
// var selectValue = langSelect.options[langSelect.selectedIndex].value;  
  
// select element에서 선택된 option의 text가 저장된다.  
// var selectText = langSelect.options[langSelect.selectedIndex].text;  
  

// console.log(priceOption)






//탑배너
const topbannerBtn = document.querySelector('.top_banner_closebtn')
const topBanner = document.querySelector('.top_banner_outer')
const HeaderMargin = document.querySelector('.header_outer')

  topbannerBtn.addEventListener('click',()=>{
  topBanner.style.display='none'
  HeaderMargin.style.marginTop='0'
})

//픽시드 헤더 

const topHeader = document.querySelector('.top_banner_outer')
const menuFixed = document.querySelector('.sub_gnb_menu')
const hideGnb = document.querySelector('.gnb')
const menuFixedTop= menuFixed.offsetTop 
const body = document.querySelector('.margin')
const subMenu = document.querySelector('.main_menu .item .item__contents')
const logo = document.querySelector('.main_menu .logo_box .logo_ani')

let scrollTop = window.scrollY

window.addEventListener('scroll',(e)=>{
  e.preventDefault();
  let scrollTop = window.scrollY

  if(scrollTop >= menuFixedTop){
    hideGnb.style.display='none'
    menuFixed.classList.add('border')
    menuFixed.classList.add('drop')
    subMenu.classList.add('border01')
    logo.classList.add('drop03')
    body.style.marginTop='110px'
  }

  else {
    hideGnb.style.display='block'
    menuFixed.classList.remove('border')
    menuFixed.classList.remove('drop');
    subMenu.classList.remove('border01')
    logo.classList.remove('drop03')
    body.style.marginTop='0'
  }
})

// 햄버튼 메뉴
const hamBtn = document.querySelector('.main_menu .hambtn')
const allMenu = document.querySelector('.lnb_sub_outer')
let isClicks = false;

hamBtn.addEventListener('click',(e)=>{
  e.preventDefault();
  if(isClicks==false){
    allMenu.style.display='block'
    allMenu.classList.add('dropdown')
    allMenu.classList.add('border02')
    isClicks=true;
  }
  else{
    allMenu.style.display='none'
    allMenu.classList.remove('dropdown')
    allMenu.classList.remove('border02')
  isClicks=false;
  }
})



// 탑,바텀 버튼
let hideBtn = document.querySelector('.side_top_btn')
const topBtn = document.querySelector('.side_top_btn >.top_btn')
const bottomBtn = document.querySelector('.side_top_btn >.bottom_btn')

const footer = document.querySelector('footer')
const footerHeight = footer.offsetTop

window.addEventListener('scroll',()=>{
  let scrollTop = document.documentElement.scrollTop || window.scrollY
      if(scrollTop>500){
          gsap.to(hideBtn, 0.5, { 
            opacity: 1
          })
          }else {
            gsap.to(hideBtn, 0.5, { 
              opacity: 0
            })
          }
      })

      topBtn.addEventListener('click',()=>{
      gsap.to(window, 0.5, { 
        scrollTo:0
      })
    })

      bottomBtn.addEventListener('click',(e)=>{
        e.preventDefault();
      gsap.to(window, 0.5, { 
        scrollTo:footerHeight
      })

    })

// 커피구독하기 뱃지
const coffeeBadge = document.querySelector('.coffee_badge')

  window.addEventListener('scroll',()=>{
    let scrollTop = document.documentElement.scrollTop || window.scrollY

      if(scrollTop>800){
          gsap.to(coffeeBadge, 0.5, { 
            opacity: 1
          })
          }else {
            gsap.to(coffeeBadge, 0.5, { 
              opacity: 0
            })
          }
      })
  

//헤더 검색창 버튼
const searchBtn = document.querySelector('.search_box .search_btn')
const searchBox = document.querySelector('.search_box .search_box_var')
const saerchVar = document.querySelector('.searchvar')
const memberTxt = document.querySelector('.member_txt')

let isClick = false;

searchBtn.addEventListener('click',()=>{
  if(isClick==false){
    memberTxt.style.display='none'
    searchBox.style.display='block'
    searchBox.style.width='180px'
    searchBox.style.paddingLeft='10px'
    saerchVar.addEventListener('focus',()=>{
    saerchVar.setAttribute('placeholder','커피를 검색해보세요')
    })

    saerchVar.addEventListener('blur',()=>{
      saerchVar.setAttribute('placeholder','')
      })
 
    isClick=true;
  }else{
    memberTxt.style.display='block'
    searchBox.style.display='none'
    searchBox.style.width='0px'
    searchBox.style.paddingLeft='0px'
     
  isClick=false;
}
 
})





//탭부분
const tabBtn = document.querySelectorAll('.tab li')
const tabCont = document.querySelectorAll('.tab_conts > div')
let activeConts = ''

for(let i=0; i<tabBtn.length;i++){
  tabBtn[i].querySelector('.tab li>a').addEventListener('click',function(e){
    e.preventDefault();

    for(let j=0; j<tabBtn.length;j++){
      tabBtn[j].classList.remove('tab_on')
      tabCont[j].style.display='none'
    }
    this.parentNode.classList.add('tab_on')
    activeConts = this.getAttribute('href')
    document.querySelector(activeConts).style.display = 'block';
  })
}



//   // hamBtn.addEventListener('click',()=>{
//   //   let isClicks=false;
//   //   if(isClicks==false || menuFixedTop ==0){
//   //     topHeader.style.display='none'
//   //     allMenu.style.display='block'
//   //     allMenu.classList.add('dropdown')
//   //     allMenu.classList.add('border02')
//   //     isClicks=true;
//   //   }else{
//   //     allMenu.style.display='none'
//   //     allMenu.classList.remove('dropdown')
//   //     allMenu.classList.remove('border02')
//   //   isClicks=false;
//   //   }
//   // })
// })







// const tabList = document.querySelectorAll('.tab_menu .list li');
// const contents = document.querySelectorAll('.tab_menu .cont_area .cont')
// let activeCont = ''; // 현재 활성화 된 컨텐츠 (기본:#tab1 활성화)

// for(var i = 0; i < tabList.length; i++){
//   tabList[i].querySelector('.btn').addEventListener('click', function(e){
//     e.preventDefault();
//     for(var j = 0; j < tabList.length; j++){
//       // 나머지 버튼 클래스 제거
//       tabList[j].classList.remove('is_on');

//       // 나머지 컨텐츠 display:none 처리
//       contents[j].style.display = 'none';
//     }

//     // 버튼 관련 이벤트
//     this.parentNode.classList.add('is_on');

//     // 버튼 클릭시 컨텐츠 전환
//     activeCont = this.getAttribute('href');
//     document.querySelector(activeCont).style.display = 'block';
//   });
// }


// let menuHambtn02 = document.querySelector('.homebtn')

// let menu = document.querySelector('.brand_nav'),
//    subMenu = document.querySelector('.brand_search_outer')
//    menuHeight = menu.offsetHeight,
//    subMenuHeight = subMenu.offsetHeight;

//    menu.addEventListener('mouseover',() => {
//     subMenu.style.display='block'
//         // menuHambtn02.style.color='#000'
//         // menu.style.background = '#fff'
//         // menu.style.border='1px solid #ccc'
//         // menuTxts.forEach((text)=>{
//         // text.style.color='#000'
//         // })
//         menu.style.height = menuHeight + subMenuHeight + 'px'
        
//        })
     
//        menu.addEventListener('mouseout',() => {
//         subMenu.style.display='none'
//        })
