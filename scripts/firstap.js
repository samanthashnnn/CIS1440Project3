const terms = [
    {front:"犬", back:"Dog", img:"dog.png"},
    {front:"猫", back:"Cat", img:"cat.png"},
    {front:"鳥", back:"Bird", img:"bird.png"},
    {front:"魚", back:"Fish", img:"fish.png"},
    {front:"羊", back:"Sheep", img:"sheep.png"},
    {front:"牛", back:"Cow", img:"cow.png"},
    {front:"亀", back:"Turtle", img:"turtle.png"},
    {front:"狼", back:"Wolf", img:"wolf.png"},
    {front:"蛸", back:"Octopus", img:"octopus.png"},
    {front:"蛙", back:"Frog", img:"frog.png"},
    {front:"馬", back:"Horse", img:"horse.png"},
    {front:"象", back:"Elephant", img:"elephant.png"},
    {front:"鹿", back:"Deer", img:"deer.png"},
    {front:"虫", back:"Insect", img:"Insect.png"},
    {front:"狸", back:"Tanuki", img:"tanuki.png"},
    {front:"蛇", back:"Snake", img:"snake.png"},
    {front:"豚", back:"Pig", img:"pig.png"},
    {front:"竜", back:"Dragon", img:"dragon.png"},
    {front:"鶏", back:"Chicken", img:"chicken.png"},
    {front:"虎", back:"Tiger", img:"tiger.png"}
]

const learnedCards = [];
const currentCardFront = document.querySelector("#fcFront");
const currentCardBack = document.querySelector("#fcBack");
const fcNav = document.querySelector("#fcNav");

let loopNum = 0;
let mode = "fc";

document.querySelector("#fcNavNext").addEventListener("click", moveToNextCard); //this one renamed to skip
document.querySelector("#fcNavFlip").addEventListener("click", renderCardflip);
document.querySelector("#fcNavLearned").addEventListener("click", fcLearned);
document.addEventListener("DOMContentLoaded", renderCardFront);

function renderCardFront(){
    if(terms.length === 0) return;
    currentCardFront.hidden = false;
    currentCardBack.hidden = true;
    currentCardFront.textContent = terms[loopNum].front;
}

function renderCardflip(){
    currentCardFront.hidden = toggle;
    currentCardBack.hidden = false;
    currentCardBack.textContent = terms[loopNum].back;
}

function moveToNextCard(){
    loopNum++;
    if(loopNum >= terms.length){
        loopNum = 0;
        checkWinCon();
    }
    renderCardFront();
}

function fcLearned(){
    learnedCards.push(terms.splice(loopNum, 1)[0]);
    if(loopNum>= terms.length) loopNum = 0;
    console.log(learnedCards);
    checkWinCon(true);
    renderCardFront();
}

function checkWinCon(learned = false){
    if (mode == "fc"){
        if (terms.length === 0 && learnedCards.length === 20){
            console.log("You've learned all the animal kanji for the day");
            displayWin();
        } else if(!learned){
            loopNum++;
        }
    } else if (mode == "mm"){

    }
}

function displayWin(){
    currentCardFront.hidden = true;
    currentCardBack.hidden = true;
    fcNav.hidden = true;
}



