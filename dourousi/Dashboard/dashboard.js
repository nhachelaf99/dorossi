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


//Dashboard
const sideProfile = document.getElementById("dash-profile")
const sideLessons = document.getElementById("dash-lessons")
const sideSub = document.getElementById("dash-sub")
const dashProfile = document.getElementById("dash-profile-content")
const dashLessons = document.getElementById("dash-lessons-content")
const dashSub = document.getElementById("dash-sub-content")

sideProfile.addEventListener("click", ProfileClick)
function ProfileClick() {
    sideProfile.classList.add("active")
    sideLessons.classList.remove("active")
    sideSub.classList.remove("active")
    dashProfile.classList.add("active")
    dashLessons.classList.remove("active")
    dashSub.classList.remove("active")
}

sideLessons.addEventListener("click", LessonsClick)
function LessonsClick() {
    sideLessons.classList.add("active")
    sideProfile.classList.remove("active")
    sideSub.classList.remove("active")
    dashLessons.classList.add("active")
    dashProfile.classList.remove("active")
    dashSub.classList.remove("active")
}

sideSub.addEventListener("click", SideClick)
function SideClick() {
    sideSub.classList.add("active")
    sideProfile.classList.remove("active")
    sideLessons.classList.remove("active")
}

window.onload = ProfileClick()