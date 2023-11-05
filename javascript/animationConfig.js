const hoverEvent = (event, color, zind) => {
  const hoveredElement = event.target.closest('.piece');
  hoveredElement.style.backgroundColor = color;
  hoveredElement.style.zIndex = zind;
};

$('.projectImageHead').hover(function() {

  this.addEventListener('mouseover', event => hoverEvent(event, "#46b0d4", 1));

  $(this).css({
    transform: "scale(1.1)"
  })
}, function() {
  // Define what happens when the mouse leaves the element (e.g., reset the transform)
  $('.piece').css({
    backgroundColor: "#2A2D34",
    zIndex: "0"
  });

  $(this).css({
    transform: "scale(1)"
  })
});

$('.icon').hover(function() {
  $(this).css({
    transform: "scale(1.1)"
  })
}, function() {
  $(this).css({
    transform: "scale(1)"
  })
})