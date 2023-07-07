var exbutton = document.getElementById('openDescriptionButton');
var descriptionContainer = document.getElementById('descriptionContainer');

var collapseButton = document.getElementById('collapseButton');
var visualUnderlay = document.getElementById('projectVisUnderlay');
var content = document.getElementById('content1');
var visual = document.getElementById('visualContainer');
var background = document.getElementById('blurBackground')

collapseButton.addEventListener('click', function(){

    collapseButton.classList.toggle('move');
    visualUnderlay.classList.toggle('move');
    content.classList.toggle('background');
    visual.classList.toggle('dis');
    background.classList.toggle('show');

})


exbutton.addEventListener('click', function() {
    exbutton.classList.toggle('stop-animation');
    exbutton.classList.toggle('clicked');

    var computedStyle = getComputedStyle(descriptionContainer);
    var displayValue = computedStyle.display;

    if (displayValue === 'none') {
        console.log("none");
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
