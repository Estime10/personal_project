// display the menu on small screen
const sidemeu = document.getElementById("sidemenu")

function openmenu(){
    sidemeu.style.left = "0"
}
function closenmenu(){
    sidemeu.style.left = "-200px"
}

// toggle the about Me menu 
const tablinks = document.getElementsByClassName("tab-links");
console.log( tablinks)
const tabcontents = document.getElementsByClassName("tab-contents")
console.log(tabcontents)

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
}
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
}
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}











