//Initialize Variables
var previousPlay = '';

//Add Game Piece Function
function addGamePiece(selectedElement)
{
  console.log('selectedElement', selectedElement);

  //Check first turn (X)
  if(selectedElement.innerText == '' && previousPlay == '')
  {
    //Place turn 1 (X)
    var xo = document.createElement('p');
    xo.innerText = 'X';
    previousPlay = 'X';
    selectedElement.appendChild(xo);
  }
  //Check second turn (O)
  if(selectedElement.innerText == '' && previousPlay == 'X')
  {
    //Place turn 2 (O)
    var xo = document.createElement('p');
    xo.innerText = 'O';
    previousPlay = 'O';
    selectedElement.appendChild(xo);
  }
  //Check next turn (Check and repeat)
  if(selectedElement.innerText == '' && previousPlay == 'O')
  {
    var xo = document.createElement('p');
    xo.innerText = 'X';
    previousPlay = 'X';
    selectedElement.appendChild(xo);
  }
}
