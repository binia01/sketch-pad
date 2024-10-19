const container = document.getElementById('container');
const resetButton = document.getElementById('reset-button');

function createGrid(size){
    container.innerHTML = '';

    const squareSize = 960/size;

    for(let i = 0; i < size * size; i++){
        const square = document.createElement('div');
        square.classList.add('grid-square');
        square.style.width =`${squareSize}px`;
        square.style.height =`${squareSize}px`;
        square.addEventListener('mouseover', colorSquare);
        container.appendChild(square);
    }
}
function colorSquare(e){
    let currentcolor =e.target.style.backgroundColor;
    if(!currentcolor){
        const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`; 
        e.target.style.backgroundColor = randomColor;
        e.target.setAttribute('data-darkness', 0);
    }else{
        let darkness = parseInt(e.target.getAttribute('data-darkness'));
        if (darkness < 10) {
            e.target.style.filter = `brightness(${100 - (darkness + 1) * 10}%)`;
            e.target.setAttribute('data-darkness', darkness + 1);
        }
    }
}
function resetGrid(){
    let newSize = prompt('Enter the number of squares per side(max 100):');
    newSize = parseInt(newSize);

    if(newSize && newSize > 0 && newSize <= 100){
        createGrid(newSize);
    }
    else{
        alert('Please enter a number between 1 and 100: ')
    }
}
createGrid(16);

resetButton.addEventListener('click',resetGrid);

