const board = document.querySelector('#board');
const colors = [
  '#c94b4b',
  '#4b134f',
  '#f12711',
  '#f5af19',
  '#a8ff78',
  '#FF8C00',
  '#FF0080',
  '#7F00FF',
];

const sq_num = 500;

for (let i = 0; i < 500; i++) {
  div = document.createElement('div');
  div.classList.add('square');
  board.append(div);
}

function getColor() {
  let i = Math.floor(Math.random() * colors.length);
  return colors[i];
}

function setColor(el) {
  let color = getColor();
  el.style.background = color;
}

function removeColor(el) {
  el.style.background = 'rgb(138, 135, 135)';
}

board.addEventListener('mouseover', (e) => {
  if (e.target.classList.contains('square')) {
    setColor(e.target);
  }
});

board.addEventListener('mouseout', (e) => {
  if (e.target.classList.contains('square')) {
    removeColor(e.target);
  }
});
