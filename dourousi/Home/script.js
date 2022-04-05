//Darkmode
const darkBtn = document.getElementById("darkBtn")
const bodyDM = document.body;
let darkState = localStorage.getItem("dark")

darkBtn.addEventListener('click', darkMode);
function darkMode() {
    bodyDM.classList.toggle("dark-mode");
    let darkState = localStorage.getItem("dark")
    if ( darkState == 0) {
        localStorage.setItem("dark", 1)
    } else if (darkState == undefined) {
        localStorage.setItem("dark", 1)
    }  else if (darkState == 1){
        localStorage.setItem("dark", 0)
    }

}


if (darkState == 1) {
    bodyDM.classList.add("dark-mode")
} else {
    bodyDM.classList.remove("dark-mode")
}

//Hamburger
const hamburger = document.querySelector(".hamburger");
const navRight = document.querySelector(".nav-right");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navRight.classList.toggle("active")
})

document.querySelectorAll('.nav-right a').forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active")
    navRight.classList.remove("active")
}))

