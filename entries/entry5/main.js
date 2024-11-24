// Get the cursor element
const cursor = document.querySelector('.cursor');

// Update the cursor position based on mouse movement
document.addEventListener('mousemove', (e) => {
  cursor.style.left = `${e.pageX}px`;
  cursor.style.top = `${e.pageY}px`;
});

// Add event listener to make the text visible when hovering inside the circle
const texts = document.querySelectorAll('.text');

// When the cursor moves over the text, reveal it inside the circle
texts.forEach(text => {
  text.addEventListener('mouseenter', () => {
    text.classList.add('visible'); // Reveal text inside the circle
  });

  text.addEventListener('mouseleave', () => {
    text.classList.remove('visible'); // Hide text when the cursor moves away
  });
});
