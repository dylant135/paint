const container = document.getElementById('container');
let color = document.getElementById('color');
let cell;

function createGrid() {
    for(let i = 0; i < 100; i++) {
        cell = document.createElement('div');
        cell.classList.add('cell');
        container.appendChild(cell);
        cell.addEventListener('mouseover', paint);
    }
}
createGrid();

function paint(e) {
    let targ = e.target;
    if(color.value == 'red') {
        targ.style.backgroundColor = 'red';
    } else if(color.value == 'green') {
        targ.style.backgroundColor = 'green';
    } else if(color.value == 'blue') {
        targ.style.backgroundColor = 'blue';
    } else if(color.value == 'erase') {
        targ.style.backgroundColor = 'white';
    } else if(color.value == 'random') {
        targ.style.backgroundColor = generateRandomColor();
    }

    /*
    switch(color) {
        case 'red': 
            targ.style.backgroundColor = 'red';
            break;
        case 'green':
            targ.style.backgroundColor = 'green';
            break;
        case 'blue':
            targ.style.backgroundColor = 'blue';
            break;

    }*/
}

function generateRandomColor() {
    let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}