document.addEventListener("DOMContentLoaded", showFC);


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
const fcCurrent = document.querySelector("#currentFC");
const fcFront = document.querySelector("#fcFront");
const fcBack = document.querySelector("#fcBack");
const kanji = document.querySelector("#kanji");
const meaning = document.querySelector("#meaning");
const learnedCounter = document.querySelector("#learned");
let cardNum = 0;

document.querySelector("#fcNavLearned").addEventListener('click', fcLearned);
document.querySelector("#fcNavFlip").addEventListener('click', flipFC);


function showFC(){
    kanji.textContent = terms[cardNum].front;
}

function showBack(){
    meaning.textContent = terms[cardNum].back;
}

function flipFC(){
    fcFront.classList.toggle("hidden");
    fcBack.classList.toggle("hidden");
    if(fcFront.classList.contains("hidden")) {
        showBack();
    } else {
        showFC();
    }
}

function fcLearned(){
    learnedCards.push(terms.splice(cardNum,1)[0]);
    if(cardNum >= terms.length) cardNum = 0;
    
    if (terms.length > 0){
        learnedCounter.textContent = learnedCards.length;
        if(fcFront.classList.contains("hidden")) {
        fcFront.classList.toggle("hidden");
        fcBack.classList.toggle("hidden");
        showFC();
    } else {
        showFC();
    }
    } else {
        learnedCounter.textContent = "you did it";
    }
}