// let closeoffer = document.querySelector(".close")
// let offer = document.querySelector(".offer")

// closeoffer.addEventListener("click",function(){
//     offer.style.display = "none"
// })

let closenav = document.querySelector(".close-navbar")
let sidenav = document.querySelector(".sidenav")
let menu = document.getElementById("menu")
closenav.addEventListener("click",function(){
    sidenav.style.left = "-70%"
    
})
menu.addEventListener("click",function(){
    sidenav.style.left = "0"
})
