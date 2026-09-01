let you = 0;
let comp = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#you-score");
const compScorePara = document.querySelector("#comp-score");

const genCumpChoice = () => {
    const option = ["paper", "rock", "scissors"];
    const ranIdx = Math.floor(Math.random() * 3);
    return option[ranIdx];
};

const drawGame = () => {
    
    msg.innerText = ("game was draw. play again");
    msg.style.backgroundColor = "darkcyan";
}

const showWin = (userWin, youChoice, compChoice) => {
if(userWin){
    you++;
    userScorePara.innerText = you;
    msg.innerText = (`you win. your ${youChoice} beats ${compChoice}`);
    msg.style.backgroundColor = "green";
} else{
    comp++;
    compScorePara.innerText = comp;
    
    msg.innerText = (`you lose. ${compChoice} beats your ${youChoice}`);
    msg.style.backgroundColor = "red";
}
}

const playGame = (youChoice) => {
console.log("choice", youChoice);
const compChoice = genCumpChoice();
console.log("comp Choice", compChoice);

if ( youChoice === compChoice) {
    drawGame();
} else{
    let userWin = true;
    if(youChoice === "rock"){
        userWin = compChoice === "paper" ? false : true;
    } else if (youChoice === "paper"){
        userWin = compChoice === "scissors" ? false : true;
    } else{
        userWin = compChoice === "rock" ? false : true;
    }
    showWin(userWin, youChoice, compChoice);
}


};

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const choiceId = choice.getAttribute("id");
    
    playGame(choiceId);
    })
    
});