const { Circle, Triangle, Square } = require('./shapes');

describe('Circle', () => {
  test('should create a Circle instance with the given color', () => {
    const circle = new Circle('red');
    expect(circle.color).toBe('red');
  });
});

describe('Triangle', () => {
  test('should create a Triangle instance with the given color', () => {
    const triangle = new Triangle('blue');
    expect(triangle.color).toBe('blue');
  });
});

describe('Square', () => {
  test('should create a Square instance with the given color', () => {
    const square = new Square('green');
    expect(square.color).toBe('green');
  });
});