

//썸네일이미지 속성 바꾸기

let tabThumnails = document.querySelectorAll('.tab_thumbnail > img')
let tabImg = document.querySelector('.tab_thumbnail_img >img')

tabThumnails.forEach((tabThumnail)=>{
    tabThumnail.addEventListener('click',function(){
        let newImg = this.src
        tabImg.setAttribute('src',newImg)
    })
})

// 디테일 탭메뉴 스크롤 이동
const detailTabmenus = document.querySelectorAll('.detail_tab >li>a')

detailTabmenus.forEach((detailTabmenu)=>{
    detailTabmenu.addEventListener('click',function(e){
        e.preventDefault();
        const scrollPosition = document.querySelector(this.dataset.target).offsetTop;
        window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
        })
    })

        
//커피원두옵션 버튼 on 
    const coffeeOptions = document.querySelectorAll('.option_coffee > a')
        coffeeOptions.forEach((coffeeOption)=>{
            coffeeOption.addEventListener('click',function(e){
                e.preventDefault();
                for(let j = 0; j < coffeeOptions.length; j++){
                    coffeeOptions[j].classList.remove('on');
                }
                this.classList.add('on');
            })
        })

//커피타입옵션 버튼 on 
    const typeOptions = document.querySelectorAll('.option_type > a')
    for(let i=0; i<typeOptions.length; i++){
        typeOptions[i].addEventListener('click',function(e){
            e.preventDefault();
            for(let j = 0; j < typeOptions.length; j++){
                typeOptions[j].classList.remove('on');
                this.classList.add('on');
              }
        })
    }
    
//날짜옵션 버튼 on 
    const dateOptions = document.querySelectorAll('.option_date > a')
    for(let i=0; i<dateOptions.length; i++){
        dateOptions[i].addEventListener('click',function(e){
            e.preventDefault();
            for(let j = 0; j < dateOptions.length; j++){
                dateOptions[j].classList.remove('on');
                this.classList.add('on');
              }
        })
    }


    

   

    

             

        