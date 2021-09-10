const board = document.getElementById('board');
const colors = ['#CD5C5C', '#FFA07A', '#DC143C', '#FF0000', '#B22222', '#8B0000', '#FFC0CB', '#FFB6C1', '#FF69B4', '#FF1493', '#C71585', '#DB7093', '#FFA07A', '#FF7F50', '#FF4500', '#FFFF00', '#FFD700', '#FFFFE0', '#F0E68C', '#DDA0DD', '#FF00FF', '#DA70D6', '#9370DB', '#4B0082', '#6A5ACD', '#808000', '#DAA520', '#7FFF00', '#7CFC00', '#32CD32', '#008000', '#006400', '#9ACD32', '#556B2F', '#8FBC8F', '#0000CD', '#000080']
const SQUARES_NUMBER = 1512;

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div')
  square.classList.add('square')

  square.addEventListener('mouseover', () => setColor(square))
  square.addEventListener('mouseleave', () => removeColor(square))

  board.append(square)
}

function setColor(element) {
  const color = getRandomColor()
  element.style.backgroundColor = color
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
  element.style.backgroundColor = ''
  element.style.boxShadow = ``
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)]
}