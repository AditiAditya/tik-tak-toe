console.log("welcome to Tic Tak Toe")
let audioturn=  new Audio ("new.wav")
let gameover= new Audio("gameover.mp3 U ")
let turn = "X";

const changeTurn= ()=>{
return  turn=== "X"? " 0" : X

}

const checkwin =()=>{

}

let  boxes   =  document .getElementByClassName("box");
Array.from(boxes).forEach(elements => {
    let boxtext= element.querySelector(".boxtex");
      element.addEventListener('click', ()=>{
      if (boxtext. innerTex=== ' ' ){
        boxtext.innerText = turn;
        changeTurn ();
         audioturn.play();
         checkWin();
         document.getElementsByClassName("info")[0].innerText  = ' TURN FOR' + turn
      }
      
      })
})


