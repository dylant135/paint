const container = document.getElementById('container');
let cell;

function createGrid() {
    for(let i = 0; i < 100; i++) {
        cell = document.createElement('div');
        cell.classList.add('cell');
        container.appendChild(cell);
    }
}
createGrid();