let closeoffer = document.querySelector(".close")
let offer = document.querySelector(".offer")

closeoffer.addEventListener("click",function(){
    offer.style.display = "none"
})

let closenav = document.querySelector(".close-navbar")
let sidenav = document.querySelector(".sidenav")
let menu = document.getElementById("menu")
closenav.addEventListener("click",function(){
    sidenav.style.display = "none"
})
menu.addEventListener("click",function(){
    sidenav.style.display = "block"
})

let wrapper = document.querySelector(".wrapper")
let onel= document.querySelector("#one-l")
let oner= document.querySelector("#one-r")

let twol= document.querySelector("#two-l")
let twor= document.querySelector("#two-r")


let threel= document.querySelector("#three-l")
let threer= document.querySelector("#three-r")


oner.addEventListener("click",function(){
    wrapper.style.transform ="translateX(-100vw)";
})

twor.addEventListener("click",function(){
    wrapper.style.transform ="translateX(-200vw)";
})

threer.addEventListener("click",function(){
    wrapper.style.transform ="translateX(0vw)";
})





onel.addEventListener("click",function(){
    wrapper.style.transform ="translateX(-200vw)";
})

twol.addEventListener("click",function(){
    wrapper.style.transform ="translateX(0vw)";
})

threel.addEventListener("click",function(){
    wrapper.style.transform ="translateX(-100vw)";
})


let heart = document.getElementById("heart")

heart.addEventListener("click",function(){
   heart.style.color="red"
})

let heart2 = document.getElementById("heart2")

heart2.addEventListener("click",function(){
   heart2.style.color="red"
})
let heart3 = document.getElementById("heart3")

heart3.addEventListener("click",function(){
   heart3.style.color="red"
})
let heart4 = document.getElementById("heart4")

heart4.addEventListener("click",function(){
   heart4.style.color="red"
})
let heart5 = document.getElementById("heart5")

heart5.addEventListener("click",function(){
   heart5.style.color="red"
})
let heart6 = document.getElementById("heart6")

heart6.addEventListener("click",function(){
   heart6.style.color="red"
})
let heart7 = document.getElementById("heart7")

heart7.addEventListener("click",function(){
   heart7.style.color="red"
})
let heart8 = document.getElementById("heart8")

heart8.addEventListener("click",function(){
   heart8.style.color="red"
})


let scroll = document.getElementById("scroll")
let body = document.getElementById("body")

body.addEventListener("scroll",function(){
    scroll.style.display="block top-10"
    
})




