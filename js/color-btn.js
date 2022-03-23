// toggle style
const colorBtnToggle = document.querySelector(".color-btn-toggler");
colorBtnToggle.addEventListener("click",()=>{
    document.querySelector(".color-btn").classList.toggle("on");
})
// hide toggle
window.addEventListener("scroll",()=>{
    if(document.querySelector(".color-btn").classList.contains("on"))
    {
        document.querySelector(".color-btn").classList.remove("on")
    }
})

// color change
const alternateStyles=document.querySelectorAll(".alternate-style");
function setActiveStyle(color){
    alternateStyles.forEach((style) => {
        if(color === style.getAttribute("title")){
            style.removeAttribute("disabled");
        }else{
            style.setAttribute("disabled","true");
        }
    });
}

//background chang
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click",()=>{
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
    
})
window.addEventListener("load",()=>{
    if(document.body.classList.contains("dark")){
        dayNight.querySelector("i").classList.add("fa-sun")
    }else{
        dayNight.querySelector("i").classList.add("fa-moon")
    }
})