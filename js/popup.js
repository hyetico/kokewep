
//로그인팝업
const btnClose = document.querySelectorAll('.btn_close')
const pupup = document.querySelector('.pupup_outer')
const btnHeart = document.querySelectorAll('.xi-heart')

      btnHeart.forEach((btnHearts)=>{
      btnHearts.addEventListener('click',(e)=>{
        e.preventDefault();
        pupup.style.display='block'
      })
  })

  btnClose.forEach((btnClose)=>{
          btnClose.addEventListener('click',(e)=>{
            e.preventDefault();
            pupup.style.display='none'
            // addPupup.style.display='none'
        })
      })
    

  //디테일팝업
//   const btnAdd = document.querySelector('.add')
// const addPupup = document.querySelector('.detail_pupup_outer')
//     btnAdd.addEventListener('click',(e)=>{
//       e.preventDefault();
//       addPupup.style.display='block'
//     })

// 