// const svgjs = require('svg.js');
// const { SVG, Rect, Text } = svgjs;
// const { Triangle, Circle, Square } = require('./lib/shapes');


// async function generateLogo() {
//     // ...
  
//     const draw = SVG().size(300, 200);
//     const background = draw.rect(300, 200).fill(logoShape.color);
//     const textElement = draw.text(text).move(150, 100).fill(textColor).font({ size: 48, anchor: 'middle', leading: '1em' });
  
//     draw.add(background);
//     draw.add(textElement);
  
//     fs.writeFile('logo.svg', draw.svg(), (err) => {
//       if (err) {
//         console.log('An error occurred while saving the SVG file.');
//       } else {
//         console.log('Generated logo.svg');
//       }
//       rl.close();
//     });
//   }
  