const username = document.getElementById("name-input")
const para = document.getElementById("para")
const clickButton = document.getElementById("clickButton")

clickButton.addEventListener('click', ()=>{

    const val = username.value;
    localStorage.setItem("name",val);
    location.reload();
})

window.addEventListener("load", ()=>{
    const val = localStorage.getItem("name");
    para.innerText = " Hey There, my name is "+val;
})