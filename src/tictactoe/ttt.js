// Player 1 clicks square
// 'X' or 'O' is added to specified square

var previousPlay = '';


function addGamePiece(selectedElement)
{
  console.log('selectedElement', selectedElement);
  //turn 1 or turn 3
  if((selectedElement.innerText == '' && previousPlay == '') || previousPlay == 'O')
  {
    //creating element
    var xo = document.createElement('h1');

    //add text to element
    xo.innerText = 'X';
    previousPlay = 'X';
    selectedElement.appendChild(xo);
  }
  //turn 2
  if(selectedElement.innerText == '' && previousPlay == 'X')
  {
    var xo = document.createElement('h1');
    xo.innerText = 'O'; 
    selectedElement.appendChild(xo);
  }

}
