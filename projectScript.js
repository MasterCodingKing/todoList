//Tic Tac Toe
let board = document.querySelector(".tiktaktoeBoard");
let disPlay = document.querySelector('#Showresult');

let squares = ["", "", "","", "", "","", "", ""]
let results = 'box';
function Board(){
    squares.forEach((area, index) =>{
        let section = document.createElement('div');
        section.classList.add('square');
        section.id = index;
        section.addEventListener('click', players);
        board.appendChild(section)
    })
}
Board()
function players(event){
    let Items = document.createElement('div');
    results = results === 'circle' ? 'box' : 'circle';
    Items.classList.add(results);
    event.target.appendChild(Items)
    event.target.removeEventListener('click', players);
    evaluteWinner()
}
function evaluteWinner(){
    let tiles = document.querySelectorAll('.square');
    let combinations = [[0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]]

    combinations.forEach(combo =>{
        let circleWin = combo.every(item => 
            tiles[item].firstChild?.classList.contains('circle')
        );
        if(circleWin){
            disPlay.textContent = "Circle Win"
            tiles.forEach(tile => tile.replaceWith(tile.cloneNode(true)))
        }
        
    })
    combinations.forEach(combo =>{
        let BoxWin = combo.every(item => 
            tiles[item].firstChild?.classList.contains('box')
        );
        if(BoxWin){
            disPlay.textContent = "Box Win"
            tiles.forEach(tile => tile.replaceWith(tile.cloneNode(true)))
        }
        
    })
}

//Digital Calculator Script
function compute(buttons){
    let num1 = parseFloat(document.querySelector('#Num1').value)
    let num2 =  parseFloat(document.querySelector('#Num2').value)
    let result = 0
   
    switch(buttons){
        case 'add':
            result = num1 + num2
            break;
        case 'subtract':
            result = num1 - num2
            break;
        case 'multiply':
            result = num1 * num2
            break;
        case 'divide':
            result = num1 / num2
            break;
    }
    document.getElementById('result').innerHTML = result;
    let reseT = document.getElementById('clear');
    let deletenum1 = document.getElementById('Num1')
    let deletenum2 = document.getElementById('Num2')
    reseT.addEventListener('click', () =>{
        document.getElementById('result').innerHTML = '' ;
        deletenum1.value = ""
        deletenum2.value = ""
    })

}

