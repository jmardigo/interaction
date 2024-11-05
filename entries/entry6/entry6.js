// Function to trigger hover-like behavior on tap
function onHoverEffect() {
    element.classList.add('active');  // Adds a class for hover-like styling
  }
  
  // Function to remove hover-like effect when interaction ends
  function offHoverEffect() {
    element.classList.remove('active');
  }
  
  // For mobile devices, use touch events
  if ('ontouchstart' in window) {
    // Handle touch (tap) events for mobile
    element.addEventListener('touchstart', onHoverEffect);
    element.addEventListener('touchend', offHoverEffect);
  } else {
    // For desktop, handle hover events
    element.addEventListener('mouseenter', onHoverEffect);
    element.addEventListener('mouseleave', offHoverEffect);
  }
  