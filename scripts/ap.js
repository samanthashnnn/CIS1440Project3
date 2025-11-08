document.addEventListener("DOMContentLoaded", showFC);


let terms = [
    {num: 1, front:"犬", back:"Dog", img:"dog.png"},
    {num: 2, front:"猫", back:"Cat", img:"cat.png"},
    {num: 3, front:"鳥", back:"Bird", img:"bird.png"},
    {num: 4, front:"魚", back:"Fish", img:"fish.png"},
    {num: 5, front:"羊", back:"Sheep", img:"sheep.png"},
    {num: 6, front:"牛", back:"Cow", img:"cow.png"},
    {num: 7, front:"亀", back:"Turtle", img:"turtle.png"},
    {num: 8, front:"狼", back:"Wolf", img:"wolf.png"},
    {num: 9, front:"蛸", back:"Octopus", img:"octopus.png"},
    {num: 10, front:"蛙", back:"Frog", img:"frog.png"},
    {num: 11, front:"馬", back:"Horse", img:"horse.png"},
    {num: 12, front:"象", back:"Elephant", img:"elephant.png"},
    {num: 13, front:"鹿", back:"Deer", img:"deer.png"},
    {num: 14, front:"虫", back:"Insect", img:"Insect.png"},
    {num: 15, front:"狸", back:"Tanuki", img:"tanuki.png"},
    {num: 16, front:"蛇", back:"Snake", img:"snake.png"},
    {num: 17, front:"豚", back:"Pig", img:"pig.png"},
    {num: 18, front:"竜", back:"Dragon", img:"dragon.png"},
    {num: 19, front:"鶏", back:"Chicken", img:"chicken.png"},
    {num: 20, front:"虎", back:"Tiger", img:"tiger.png"}
]

let learnedCards = [];
const fcCurrent = document.querySelector("#currentFC");
const fcFront = document.querySelector("#fcFront");
const fcBack = document.querySelector("#fcBack");
const kanji = document.querySelector("#kanji");
const meaning = document.querySelector("#meaning");
const learnedCounter = document.querySelector("#learned");
const upcomingCount = document.querySelector("#upcomingCount");
const numberedCard = document.querySelector("#cardNumber");
let cardNum = 0;

const learnedbtn = document.querySelector("#fcNavLearned");
learnedbtn.addEventListener('click', fcLearned);
const flipbtn = document.querySelector("#fcNavFlip");
flipbtn.addEventListener('click', fcFlip);
const skipbtn = document.querySelector("#fcNavSkip");
skipbtn.addEventListener('click', fcSkip);
document.querySelector("#modeToggle").addEventListener('click', modeToggle);
document.querySelector("#fcRefresh").addEventListener('click', fcRefresh);

function updateCount(){   
    upcomingCount.textContent = terms.length;
    learnedCounter.textContent = learnedCards.length;
    numberedCard.textContent = "card number: " + terms[cardNum].num;
}
function showFC(){
    kanji.textContent = terms[cardNum].front;
    if(fcFront.classList.contains("hidden")){
       justToggle();
    }    
    updateCount();
}

function showBack(){
    meaning.textContent = terms[cardNum].back;
}

function justToggle(){
    fcFront.classList.toggle("hidden");
    fcBack.classList.toggle("hidden");
}

function noClick(btn){
    btn.disabled = true;
    setTimeout( function(){
        btn.disabled = false;
    } , 500);
}

function fcFlip(){
    noClick(flipbtn);
    justToggle();
    if(fcFront.classList.contains("hidden")) {
        showBack();
    } else {
        showFC();
    }
}

function fcSkip(){
    noClick(skipbtn);
    cardNum++;
    if(cardNum >= terms.length) cardNum = 0;
    showFC();
}

function fcLearned(){
    noClick(learnedbtn);
    learnedCards.push(terms.splice(cardNum,1)[0]);
    if(cardNum >= terms.length) cardNum = 0;
    
    if (terms.length > 0){
        learnedCounter.textContent = learnedCards.length + "/20";
        if(fcFront.classList.contains("hidden")) {
        justToggle();
        showFC();
    } else {
        showFC();
    }
    } else {
        learnedCounter.textContent = "you did it";
        upcomingCount.textContent = "none";
    }
}

function fcRefresh(){
    cardNum = 0;
    terms = learnedCards.concat(terms);
    learnedCards = [];
    updateCount();
    showFC();
}