
$('#image1').hover(function() {
  $('#project1').css({
    transform: "rotate(135deg) scale(1.15)",
    backgroundColor: "#46b0d4",
    zIndex: "1"
  });
  $(this).css({
    transform: "scale(1.5)"
  })
}, function() {
  // Define what happens when the mouse leaves the element (e.g., reset the transform)
  $('#project1').css({
    transform: "none",
    backgroundColor: "#2A2D34",
    zIndex: "0"
  });
  $(this).css({
    transform: "scale(1)"
  })
});
