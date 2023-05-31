function createNewGame (){
    const grid = document.getElementById('grid');

    //RECUPERO IL LIVELLO DI DIFFICOLTA'
    const difficulty = parseInt(document.getElementById('difficulty').value);
    

    //rIGENERATORE GRIGLIA
    grid.innerHTML = '';



    //INVOCO FUNZIONE createCell PER CREARE LE SINGOLE CASELLE DI GIOCO
    createCells(difficulty);

}

//FUNZIONE CREA CASELLE GRIGLIA
function createCells (level){

    let cellsNumber;

  switch(level){
    case 1:
        cellsNumber = 100;
        break;

    case 2:
        cellsNumber = 81;
        break; 
    
    case 3:
        cellsNumber = 49;
        break;    
  }
  

    // CASELLE GRIGLIA
  for(let i = 0; i < cellsNumber; i++){
    const square = document.createElement('div');

    let cellsPerRow = Math.sqrt(cellsNumber);
    console.log(cellsPerRow);


    square.classList.add('square');
    square.style.width = `calc(100% / ${cellsPerRow})`;
    square.style.height = square.style.width;
    square.innerText = i + 1;

    square.addEventListener('click', function(){
        this.classList.add('clicked');
        console.log(this.innerText);


    })

    grid.append(square);
  }


}

const button = document.getElementById('play');

button.addEventListener('click' , function(){
    
    


    //AL CLICK DEL PULSANTE SI CREA LA GRIGLIA DI GIOCO 

    createNewGame();
})