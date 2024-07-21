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
