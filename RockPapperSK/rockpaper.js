let userScore=0;
let compScore =0;
let userArea =document.querySelector('#users-score');
let compArea =document.querySelector('#comp-score');

let choices =document.querySelectorAll('.choice')
console.log(choices);
let finalmessage = document.querySelector('#message-final')


// generate user choice
choices.forEach( choice => {
    choice.addEventListener('click',()=>{
        const userChoice =choice.getAttribute('id')
        // console.log("choice is", userChoice);
        playGame(userChoice);
    })
});

// generate comp choice
const genCompChoice =()=>{
    const compChoiceArray =['rock', 'paper','scissors']
    const index =(Math.floor( Math.random()*3)); 
     return compChoiceArray[index];

    
}

// get user and comp choice
function playGame(userChoice){
    console.log("user choice", userChoice);
    const compChoice = genCompChoice();
    console.log("computer choice",compChoice);

    if(userChoice===compChoice){
        drawGame(userChoice,compChoice);
    }
    else{
        let userWin =true;
        if(userChoice=='rock'){
            userWin =compChoice==='paper'? false:true;
        }
        else if(userChoice=='paper'){
            userWin =  compChoice==='scissors'?false:true
        }
        else{
            userWin= compChoice==='rock'?false:true
        }
        showWinner(userWin,userChoice,compChoice);
    }


}

// generate draw function
function drawGame(userChoice,compChoice){
    // console.log("Draw!");
    finalmessage.innerText=`Draw! ${userChoice} and ${compChoice} are same`
    finalmessage.style.backgroundColor='rgb(187, 187, 37)'

}

//generate winner function

let showWinner =(userWin,userChoice,compChoice)=>{
    if(userWin===true){
        userScore++
        compScore--
        userArea.innerText =userScore;
        compArea.innerText=compScore;
        
        // console.log("You winn!!");
        finalmessage.innerText=`You win!! your ${userChoice} beats ${compChoice}`
        finalmessage.style.backgroundColor='green'
    }
    else{
        compScore++
        userScore--
        compArea.innerText=compScore;
        userArea.innerText =userScore
        userScore++
        // console.log("You lose..");
        finalmessage.innerText=`You lose.. ${compChoice} beats your ${userChoice}`
        finalmessage.style.backgroundColor='red'
    }
}





