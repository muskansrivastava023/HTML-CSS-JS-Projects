let boxClass = document.querySelectorAll(".box");
let resetBtn= document.querySelector(".reset");
let winnerMsgClass= document.querySelector(".winner-msg");
let winnerClass= document.querySelector(".winner");
let newGameBtn= document.querySelector(".new-game");

let turnO=true;
let count=1;

const winPattern=[
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
];


boxClass.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            // box.style.color="Blue";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
        counts();

    });
    
});
const counts = ()=>{
    if(count==9){
        winnerMsgClass.classList.remove("hide");
        winnerClass.innerText="Draw";
        count=1;
    }
    else{
        count++;
    }
}
function checkWinner(){
    for(let i of winPattern){
      let posVal1= boxClass[i[0]].innerText;
      let posVal2= boxClass[i[1]].innerText;
      let posVal3= boxClass[i[2]].innerText;
      if(posVal1!="" && posVal2!="" && posVal3!=""){
          if(posVal1==posVal2 && posVal2==posVal3){
              let w=posVal1
              showWinner(posVal1);
          }
      }
    }   
  };
  
  const showWinner= (winner)=>{
      winnerClass.innerText=`Congratulations!! winner is: ${winner}`;
      winnerMsgClass.classList.remove("hide");
      disableBoxes();
      count=1;
  };

  const disableBoxes= ()=>{
    for(let box of boxClass){
        box.disabled=true;
    }
  }

  const resetGame= ()=>{
    turnO=true;
    count=1;
    winnerMsgClass.classList.add("hide");
    boxClass.forEach((box)=>{
        box.innerText="";
        box.disabled=false;
    })
  }
resetBtn.addEventListener("click",resetGame);

newGameBtn.addEventListener("click",resetGame);