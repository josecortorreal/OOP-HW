// const readline = require('readline');
// const fs = require('fs');
// const SVG = require('@svgdotjs/svg.js');
// //const { createSVGWindow } = require('svgdom');
// const { Triangle, Circle, Square } = require('./lib/shapes');



// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// function promptUser(question) {
//   return new Promise((resolve) => {
//     rl.question(question, resolve);
//   });
// }

// async function generateLogo() {
//   const text = await promptUser('Enter up to three characters: ');
//   const textColor = await promptUser('Enter the text color (keyword or hexadecimal): ');
//   const shape = await promptUser('Choose a shape (circle, triangle, square): ');
//   const shapeColor = await promptUser('Enter the shape color (keyword or hexadecimal): ');

//   const svg = SVG().size(300, 200);
  
//   // Draw the shape
//   switch (shape.toLowerCase()) {
//     case 'circle':
//       svg.circle(200).fill(shapeColor);
//       break;
//     case 'triangle':
//       svg.polygon('0,200 100,0 200,200').fill(shapeColor);
//       break;
//     case 'square':
//       svg.rect(200, 200).fill(shapeColor);
//       break;
//     default:
//       console.log('Invalid shape choice. Exiting...');
//       rl.close();
//       return;
//   }

//   svg.circle(150)
//     .fill('green')
//     .center(150, 100);


//   // Draw the text
//   svg.text(text)
//     .fill(textColor)
//     .font({ size: 48 })
//     .center(150, 100);

//   fs.writeFile('logo.svg', svg.svg(), (err) => {
//     if (err) {
//       console.log('An error occurred while saving the SVG file.');
//     } else {
//       console.log('Generated logo.svg');
//     }
//     rl.close();
//   });
// }


// generateLogo();

const readline = require('readline');
const fs = require('fs');
const SVG = require('svg.js');
const { Triangle, Circle, Square } = require('./lib/shapes');

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

  let logoShape;
  switch (shape.toLowerCase()) {
    case 'circle':
      logoShape = new Circle(shapeColor);
      break;
    case 'triangle':
      logoShape = new Triangle(shapeColor);
      break;
    case 'square':
      logoShape = new Square(shapeColor);
      break;
    default:
      console.log('Invalid shape choice. Exiting...');
      rl.close();
      return;
  }

  const draw = SVG().size(300, 200);
  const background = draw.rect(300, 200).fill(logoShape.color);
  const textElement = draw.text(text).move(150, 100).fill(textColor).font({ size: 48, anchor: 'middle', leading: '1em' });

  draw.add(background);
  draw.add(textElement);

  const svgMarkup = draw.svg();
  fs.writeFile('logo.svg', wrapInSVGTemplate(svgMarkup), (err) => {
    if (err) {
      console.log('An error occurred while saving the SVG file.');
    } else {
      console.log('Generated logo.svg');
      console.log('Open logo.svg in a browser to view the logo.');
    }
    rl.close();
  });
}

function wrapInSVGTemplate(svgMarkup) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="300" height="200" viewBox="0 0 300 200">
  ${svgMarkup}
</svg>`;
}

generateLogo();


