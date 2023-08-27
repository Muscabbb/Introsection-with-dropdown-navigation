document.querySelector(".click").addEventListener('click',() => {
    console.log("click")

    document.querySelector(".menu").classList.toggle("remove")


    document.querySelector(".angle").classList.toggle("fa-angle-up")


})

//!---------------------------------------------------
document.querySelector(".clickk").addEventListener('click',() => {
    console.log("click")

    document.querySelector(".second").classList.toggle("removee")


    document.querySelector(".anglee").classList.toggle("fa-angle-up")

})

var count = 0;


document.querySelector(".toggle-bar").addEventListener('click',() => {

    document.querySelector(".body").classList.toggle("body-active")

    count++

    document.querySelector(".toggle-bar").classList.toggle("fa-x")

    document.querySelector(".header-links").style.display = "flex"

    document.querySelector(".header-links").classList.toggle("header-active")

    if(count == 2){
        document.querySelector(".header-links").style.display = "none"
        count = 0
    }



})