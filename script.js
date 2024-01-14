// var crsr = document.querySelector("#cursor");
// var blur = document.querySelector("#cursor-blur");

// document.addEventListener("mousemove", function (dets) {
//   crsr.style.left = dets.x + "px";
//   crsr.style.top = dets.y + "px";
//   blur.style.left = dets.x - 250 + "px";
//   blur.style.top = dets.y - 250 + "px";
// });

// alert("This site is in under development and it is Not developed for an Mobile yet :)");



var menu = document.querySelector("h4")
var blank = document.querySelector(".blank")
var icon = document.querySelector("h4")


var flag = 0


menu.addEventListener("click",()=>{

    if(flag == 0){
     blank.style.top = 0 ;
     icon.innerHTML = '"<i class="ri-close-line"></i>"'
     flag = 1
    }else{
        blank.style.top = "-100%" ;
        icon.innerHTML = '"<i class="ri-menu-3-line"></i></i>"'
        flag = 0 
    }
})
