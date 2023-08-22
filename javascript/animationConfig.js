var exbutton = document.getElementById('openDescriptionButton');
var descriptionContainer = document.getElementById('descriptionContainer');

var currentCards = Array.from(document.getElementsByClassName("card-button"));
var curSelected = currentCards[0];

var title = document.getElementById("selectedTitle");
var text = document.getElementById("selectedText");
var image = document.getElementById("selectedImg");
var links = document.getElementById("extLinks");

changeSelected('remoraCard')
const cardbuttons = document.querySelectorAll('.card-button');

  cardbuttons.forEach(cardbutton => {
    cardbutton.addEventListener('click', (event) => {

      if(curSelected.id == cardbutton.id) return; 
      //if cards are the same, do nothing
      else {
        curSelected.classList.toggle('selected');
        cardbutton.classList.toggle('selected');
        curSelected = cardbutton;
        changeSelected(curSelected.id);
      }

    });
  });


//removes any links already present in highlight
function refreshLinks() {
  if (links.childElementCount <= 0) return;
  var existingLinks = Array.from(links.children);

  existingLinks.forEach((child) => {
    child.remove();
  });
}

function createButton(txt, destination) {
  var newButton = document.createElement("button");
  newButton.id = "links";
  newButton.textContent = txt;
  newButton.style = "margin-bottom: 10px; margin-left: 5px; font-weight: bolder; transition: transform 0.3s ease-in-out; width: 40px; height: 40px; border: none; color: black; text-decoration: none; border-radius: 50%; background-color: rgba(255,255,255,0.5);";
  newButton.onclick = function() {
    window.open(destination, "_blank");
  }
  return newButton;
}

function createLogoButton(img, destination) {
  var logoButton = document.createElement("a");
  logoButton.href = destination;
  logoButton.target = "_blank";
  logoButton.id = "links";
  logoButton.style = "display: inline-block; padding: 5px; margin-bottom: 10px; margin-left: 5px; font-weight: bolder; transition: transform 0.3s ease-in-out; border: none; color: black; text-decoration: none; border-radius: 50%; background-color: rgba(255,255,255,0.5);";

  var logo = document.createElement("img");
  logo.src = img;
  logo.style = "vertical-align: middle; width: 30px; height: 30px;"
  logoButton.appendChild(logo);

  return logoButton;
}

function changeSelected(id) {
  refreshLinks();

  if(id == 'remoraCard') {

    var moreInfo = createButton("i", "https://devpost.com/software/remora-stay-hydrated");
    var gitLogo = createLogoButton("imgs/gitlogo.png", "https://github.com/vincentbanguyen/Remora");

    links.appendChild(moreInfo);
    links.appendChild(gitLogo);

    title.innerHTML = 'REMORA';
    text.innerHTML = "This project was created as an applicant for the HackIllinois 2022 competition hosted by University of Illinois where the goal was to create anything can be used to aid to a modern day problem. My group decided to create a water reminder app that reminds you to drink water on a regular and healthy basis based on your weight and height. The only difference with our app, is that we decided to give a fun and interactive way to drink water to incentivize it by putting it into augmented reality and right in front of the viewers faces!"
    image.src = "../imgs/remoraView.png";

  } else if(id == 'PTPCard') {

    var git = createLogoButton("imgs/gitlogo.png", "https://github.com/EPHS-iOS/ProtectThePark");
    links.appendChild(git);

    title.innerHTML = 'PROTECT THE PARK';
    text.innerHTML = "A group of my friends and I created this game when we were making a project in our high school iOS developement app where we learned the basics of app developement. We created it in a matter of a weeks, including the planning process, and the brainstorming and such, and we developed the app using Swift and XCode."
    image.src = "../imgs/gameplay1.png";

  } else if(id == 'websiteCard') {

    var website = createButton("i", "#")

    title.innerHTML = 'EGGS AND STUFF';
    text.innerHTML = "This was one of my college UX design class projects where I planned and designed my own website from scratch, using html, javascript, and css. Through this project, I gained valuable insights into the intricacies of web design and the complexities involved in frontend development."
    image.src = "../imgs/prototypeAll.png";

  }
}

exbutton.addEventListener('click', function() {
    exbutton.classList.toggle('stop-animation');
    exbutton.classList.toggle('clicked');

    var computedStyle = getComputedStyle(descriptionContainer);
    var displayValue = computedStyle.display;

    if (displayValue === 'none') {
        descriptionContainer.style.display = 'flex';
    } else if (displayValue === 'flex') {
        descriptionContainer.style.display = 'none';
    }
});

$(function() {
    $('body').scrollspy({
      target: '#myNavbar',
      offset: 50
    });
});
