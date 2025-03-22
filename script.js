const textElement = document.getElementById('marquee');
const sayings = [
  "Don't miss out on all the fun!",
  "Step into the past with our chatroom app!",
  "Coming Soon- Sign up for the deets!"
];
let index = 0;

setInterval(() => {
  textElement.textContent = sayings[index];
  index = (index + 1) % sayings.length; // Cycle through the sayings
}, 10000); // Change every 2 seconds (2000 milliseconds)


// Plans to add more JavaScript to the project later

