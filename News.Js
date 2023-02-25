// Example JS code to add a click event listener to the cards
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('click', () => {
    console.log('Card clicked!');
  });
});
