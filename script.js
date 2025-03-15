// Array of background colors for body
const bodyColors = ['#FFCDD2', '#F8BBD0', '#E1BEE7', '#D1C4E9', '#C5CAE9', '#BBDEFB', '#B2EBF2', '#B2DFDB', '#C8E6C9', '#DCEDC8'];

// Array of background colors for container (lighter for contrast)
const containerColors = ['#ffffff', '#fefefe', '#fcfcfc', '#fafafa', '#f7f7f7', '#f5f5f5', '#f3f3f3', '#f0f0f0', '#eeeeee', '#ececec'];

// Array of colors for inputs and button
const inputButtonColors = ['#FF8A80', '#FF80AB', '#EA80FC', '#B388FF', '#8C9EFF', '#82B1FF', '#80D8FF', '#84FFFF', '#A7FFEB', '#CCFF90'];

// Array of colors for heading
const headingColors = ['#D50000', '#C51162', '#AA00FF', '#6200EA', '#304FFE', '#2962FF', '#0091EA', '#00B8D4', '#00BFA5', '#64DD17'];

let index = 0;

// Function to change all colors
function changeBackgroundColors() {
  // Change body background
  document.body.style.backgroundColor = bodyColors[index];

  // Change container background
  document.querySelector('.container').style.backgroundColor = containerColors[index];

  // Change input fields background and text color
  const inputs = document.querySelectorAll('input');
  inputs.forEach(input => {
    input.style.backgroundColor = inputButtonColors[index];
    input.style.color = 'white'; // white text for contrast
    input.style.border = 'none'; // remove borders
  });

  // Change button color
  const button = document.querySelector('button');
  button.style.backgroundColor = inputButtonColors[index];
  button.style.color = 'white'; // white text for contrast

  // Change heading color
  const heading = document.querySelector('h2');
  heading.style.color = headingColors[index];

  // Increment index and loop
  index = (index + 1) % bodyColors.length;
}

// Change colors every 2 seconds
setInterval(changeBackgroundColors, 2000);
