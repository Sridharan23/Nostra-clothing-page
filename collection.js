let closeoffer = document.querySelector(".close")
let offer = document.querySelector(".offer")

closeoffer.addEventListener("click",function(){
    offer.style.display = "none"
})

let closenav = document.querySelector(".close-navbar")
let sidenav = document.querySelector(".sidenav")
let menu = document.getElementById("menu")
closenav.addEventListener("click",function(){
    sidenav.style.left = "-70%"
    
})
menu.addEventListener("click",function(){
    sidenav.style.left = "0"
})




let productContainer = document.querySelector(".col-cards")
let search = document.getElementById("search")
let productlist = productContainer.querySelectorAll("div")

search.addEventListener("keyup",function(){
    var enteredValue = event.target.value.toUpperCase()

    for(count = 0; count<productlist.length; count=count+1)
    {
        var productname = productlist[count].querySelector("h4").textContent

        if(productname.toUpperCase().indexOf(enteredValue)<0)
        {
            productlist[count].style.display ="none"
        }
        else{
            productlist[count].style.display ="block"
        }
    }
})


let summer = document.getElementById("summer")

let beach = document.getElementById("beach")

let party = document.getElementById("party")

let red = document.getElementById("red")

let blue = document.getElementById("blue")

let green = document.getElementById("green")

let white = document.getElementById("white")

let N = document.getElementById("N")

let O = document.getElementById("O")


let summershirt = document.getElementById("summershirt")
let partyshirt = document.getElementById("partyshirt")
let beachshirt = document.getElementById("beachshirt")
let redshirt= document.getElementById("redcolor")
let blueshirt = document.getElementById("bluecolor")
let whiteshirt= document.getElementById("whitecolor")
let greenshirt = document.getElementById("greencolor")
let ns = document.getElementById("latest")
let os = document.getElementById("oldest")

summer.addEventListener("click",function(){
    summershirt.style.display ="block"
    redshirt.style.display ="none"
     blueshirt.style.display ="none"
      whiteshirt.style.display ="none"
       greenshirt.style.display ="none"
        ns.style.display ="none"
         os.style.display ="none"
         beachshirt.style.display="block"
         partyshirt.style.display="none"
})

red.addEventListener("click",function(){
    summershirt.style.display ="none"
    redshirt.style.display ="block"
     blueshirt.style.display ="none"
      whiteshirt.style.display ="none"
       greenshirt.style.display ="none"
        ns.style.display ="none"
         os.style.display ="none"
          beachshirt.style.display="none"
})

blue.addEventListener("click",function(){
    summershirt.style.display ="none"
    redshirt.style.display ="none"
     blueshirt.style.display ="block"
      whiteshirt.style.display ="none"
       greenshirt.style.display ="none"
        ns.style.display ="none"
         os.style.display ="none"
          beachshirt.style.display="none"
})
white.addEventListener("click",function(){
    summershirt.style.display ="none"
    redshirt.style.display ="none"
     blueshirt.style.display ="none"
      whiteshirt.style.display ="block"
       greenshirt.style.display ="none"
        ns.style.display ="none"
         os.style.display ="none"
          beachshirt.style.display="none"
})
green.addEventListener("click",function(){
    summershirt.style.display ="none"
    redshirt.style.display ="none"
     blueshirt.style.display ="none"
      whiteshirt.style.display ="none"
       greenshirt.style.display ="block"
        ns.style.display ="none"
         os.style.display ="none"
          beachshirt.style.display="none"
})

party.addEventListener("click",function(){
    summershirt.style.display ="none"
    redshirt.style.display ="block"
     blueshirt.style.display ="none"
      whiteshirt.style.display ="none"
       greenshirt.style.display ="none"
        ns.style.display ="block"
         os.style.display ="none"
          beachshirt.style.display="none"
})


beach.addEventListener("click",function(){
    summershirt.style.display ="none"
    redshirt.style.display ="none"
     blueshirt.style.display ="none"
      whiteshirt.style.display ="none"
       greenshirt.style.display ="none"
        ns.style.display ="none"
         os.style.display ="block"
          beachshirt.style.display="block"
})
N.addEventListener("click",function(){
    summershirt.style.display ="none"
    redshirt.style.display ="none"
     blueshirt.style.display ="none"
      whiteshirt.style.display ="none"
       greenshirt.style.display ="none"
        ns.style.display ="block"
         os.style.display ="none"
          beachshirt.style.display="none"
})
O.addEventListener("click",function(){
    summershirt.style.display ="none"
    redshirt.style.display ="none"
     blueshirt.style.display ="none"
      whiteshirt.style.display ="none"
       greenshirt.style.display ="none"
        ns.style.display ="none"
         os.style.display ="block"
          beachshirt.style.display="none"
})
