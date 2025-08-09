let boxes=document.querySelectorAll(".box");
let resetGameBtn=document.querySelector("#reset-game");
let msg=document.querySelector("#msg");
let msgContainer=document.querySelector(".msg-container");
let newGameBtn = document.querySelector("#new-game");

let turn="X";

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
    [2,4,6],
]

const resetGame=()=>{
    turn="X";
    enableBoxes();
    msgContainer.classList.add("hide");
}

const disableBoxes=()=>{
    for(let box of boxes)
    {
        box.disabled=true;
    }
};

const enableBoxes=()=>{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
};


boxes.forEach(box => {
    box.addEventListener("click", () => {
    if(turn=="X" && box.innerText =="" )
    {
        box.innerText="X";
        turn = "O";
    }
    else if(turn =="O" && box.innerText =="")
    {
        box.innerText="O";
        turn = "X";
    }
    else if( box.innerText =="X" || box.innerText =="O")
    {
        alert("Box is already filled.Please try again");
    }
    checkWinner();
    });
  });


let showWinner = (winner) => {
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes(); 
};


let checkWinner=()=>{
    let winnerFound;
    for(let pattern of winPatterns)
        {
            let pos1Val=boxes[pattern[0]].innerText;
            let pos2Val=boxes[pattern[1]].innerText;
            let pos3Val=boxes[pattern[2]].innerText;

            if(pos1Val!="" && pos2Val!="" && pos3Val!="")
            {
                if(pos1Val==pos2Val && pos1Val==pos3Val)
                {
                    showWinner(pos1Val);
                    winnerFound=true;
                    return;
                }
            }
        }
        if(!winnerFound)
        {
            let filled=true;
            for(let box of boxes)
            {
             if(box.innerText==="")
                {
                    filled = false;
                    break;
                }
            }
        if (filled)
        {
            msg.innerText = "Game Drawn : Play again";
            msgContainer.classList.remove("hide");
        }   
        }
};

newGameBtn.addEventListener("click",resetGame);
resetGameBtn.addEventListener("click",resetGame);