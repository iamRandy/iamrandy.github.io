const artButton = document.getElementById("artButton");
const projectsButton = document.getElementById("projectsButton")
const contentSection = document.getElementById("contentSection");
const artSection = document.getElementById("artSection")

projectsButton.addEventListener('click', function(){
    artSection.style = "display: none;"
    contentSection.style = "display: inline-block;";
})

artButton.addEventListener('click', function(){
    contentSection.style = "display: none;";
    artSection.style = "display: inline-block;";
})