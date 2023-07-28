var exbutton = document.getElementById('openDescriptionButton');
var descriptionContainer = document.getElementById('descriptionContainer');

var visual = document.getElementById('visualContainer');
var visual2 = document.getElementById('visualContainer2');

var currentCards = Array.from(document.getElementsByClassName("card-button"));
var curSelected = currentCards[0];

var title = document.getElementById("selectedTitle");
var text = document.getElementById("selectedText");
var image = document.getElementById("selectedImg");
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

function changeSelected(id) {
  if(id == 'remoraCard') {

    title.innerHTML = 'REMORA';
    text.innerHTML = "This project was created as an applicant for the HackIllinois 2022 competition hosted by University of Illinois where the goal was to create anything can be used to aid to a modern day problem. My group decided to create a water reminder app that reminds you to drink water on a regular and healthy basis based on your weight and height. The only difference with our app, is that we decided to give a fun and interactive way to drink water to incentivize it by putting it into augmented reality and right in front of the viewers faces!"
    image.src = "../imgs/remoraView.png";

  } else if(id == 'PTPCard') {

    title.innerHTML = 'PROTECT THE PARK';
    text.innerHTML = "A group of my friends and I created this game when we were making a project in our high school iOS developement app where we learned the basics of app developement. We created it in a matter of a weeks, including the planning process, and the brainstorming and such, and we developed the app using Swift and XCode."
    image.src = "../imgs/gameplay1.png";

  } else if(id == 'websiteCard') {

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
