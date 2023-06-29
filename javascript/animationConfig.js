var exbutton = document.getElementById('openDescriptionButton');
var descriptionContainer = document.getElementById('descriptionContainer');

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
