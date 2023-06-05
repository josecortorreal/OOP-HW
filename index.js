const readline = require('readline');
const fs = require('fs');
const SVG = require('svg.js');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function promptUser(question) {
  return new Promise((resolve) => {
    rl.question(question, resolve);
  });
}

async function generateLogo() {
  const text = await promptUser('Enter up to three characters: ');
  const textColor = await promptUser('Enter the text color (keyword or hexadecimal): ');
  const shape = await promptUser('Choose a shape (circle, triangle, square): ');
  const shapeColor = await promptUser('Enter the shape color (keyword or hexadecimal): ');

  const svg = SVG().size(300, 200);
  
  // Draw the shape
  switch (shape.toLowerCase()) {
    case 'circle':
      svg.circle(200).fill(shapeColor);
      break;
    case 'triangle':
      svg.polygon('0,200 100,0 200,200').fill(shapeColor);
      break;
    case 'square':
      svg.rect(200, 200).fill(shapeColor);
      break;
    default:
      console.log('Invalid shape choice. Exiting...');
      rl.close();
      return;
  }

  svg.circle(150)
    .fill('green')
    .center(150, 100);


  // Draw the text
  svg.text(text)
    .fill(textColor)
    .font({ size: 48 })
    .center(150, 100);

  fs.writeFile('logo.svg', svg.svg(), (err) => {
    if (err) {
      console.log('An error occurred while saving the SVG file.');
    } else {
      console.log('Generated logo.svg');
    }
    rl.close();
  });
}


generateLogo();