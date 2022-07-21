
let filterBtns = document.querySelectorAll('[data-value]')
let alls = document.querySelectorAll('.coffee_product_cont a');

filterBtns.forEach(filterBtn =>{
  filterBtn.addEventListener('click',function(e){
    e.preventDefault();

    let val = e.target.dataset.value;

    alls.forEach(all => {
      let arr = all.dataset.group.split(' ');
      for(let a of arr){
        if(a==val){
          all.setAttribute('class','show')
         break;

        }else {
          all.setAttribute('class','hide')
        }
      }
    })
  })
})



//커피찾기 메뉴
const subBtns = document.querySelectorAll('.aside_nav> li >a')
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







