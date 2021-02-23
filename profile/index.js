const navMenuItems =document.querySelectorAll("#nav-menu a")
const indicator = document.querySelector(".indicator");
function handleMenuItemClick(target){
    navMenuItems.forEach(item => {
        item.classList.remove("active");
        item.style="";
    });
 target.classList.add('active');
indicator.style.width=`${target.offsetWidth}px`;
indicator.style.left=`${target.offsetLeft}px`;
const currentSection = document.querySelector(".active-section");
currentSection.classList.remove("active-section");
const newCurrentSection = document.querySelector(`.${target.getAttribute("data-rel")}`);
newCurrentSection.classList.add("active-section")
}
navMenuItems.forEach(item => {
    item.addEventListener("click",e =>handleMenuItemClick(e.target));
 item.classList.contains('active') && handleMenuItemClick(item)   
})

// 返回上一页
const back = document.getElementById("back");
back.onclick = function(){
    window.history.back(-1);
}