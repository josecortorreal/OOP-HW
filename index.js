const readline = require('readline');
const fs = require('fs');
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