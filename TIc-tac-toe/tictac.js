let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let msgContainer = document.querySelector(".msg-container");
let finalMessage = document.querySelector(".message");
let newGamebtn = document.querySelector("#newGameBtn");
// console.log(boxes, resetBtn);

let turnO = true;
const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

resetBtn.addEventListener('click',()=>{
    enableBoxes();
})

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    // console.log("box clicked");
    if (turnO) {
      box.innerText = "O";
      turnO = false;
      box.style.color='green'
    } else {
      box.innerText = "X";
      box.style.color='blue'
      turnO = true;
      
    }
    box.disabled = true;
    checkWinner();
  });
});

const checkWinner = () => {
  for (let pattern of winPatterns) {
    // console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        console.log("winner",pos1val);
        showWinner(pos1val);
      }
    }
  }
};

const showWinner =(winner)=>{
    msgContainer.classList.remove("hide");
        finalMessage.innerHTML = `<p> winner is: ${winner}</p>`;
        disableBoxes();
}

const disableBoxes =()=>{
    for(let box of boxes){
        box.disabled =true;
    }
    
}
const enableBoxes =()=>{
    for(let box of boxes){
        box.disabled =false;
        box.innerText=""
    }
    
}


newGamebtn.addEventListener('click',()=>{
    newGame();
    msgContainer.classList.add('hide')
})
const newGame =()=>{
    enableBoxes();
}

