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
//both
const title = document.querySelector("#title");

//fc mode
const fcCurrent = document.querySelector("#currentFC");
const fcFront = document.querySelector("#fcFront");
const fcBack = document.querySelector("#fcBack");
const kanji = document.querySelector("#kanji");
const meaning = document.querySelector("#meaning");
const learnedCounter = document.querySelector("#learned");
const upcomingCount = document.querySelector("#upcomingCount");
const numberedCard = document.querySelector("#cardNumber");
/*toggle mode code*/
const fcMode = document.querySelector("#fcCard");
const mmMode = document.querySelector("#mmCard");

//memory match mode
const mmGameBoard = document.querySelector("#mmGameBoard");
const movesP = document.querySelector("#moveDisplay");


let cardNum = 0;
let firstCard = null;
let secondCard = null;
let boardLocked = false;
let moves = 0;

const learnedbtn = document.querySelector("#fcNavLearned");
learnedbtn.addEventListener('click', fcLearned);
const flipbtn = document.querySelector("#fcNavFlip");
flipbtn.addEventListener('click', fcFlip);
const skipbtn = document.querySelector("#fcNavSkip");
skipbtn.addEventListener('click', fcSkip);
document.querySelector("#fcRefresh").addEventListener('click', fcRefresh);
/*toggle mode code*/
const modeTogglebtn = document.querySelector("#modeToggle");
modeTogglebtn.addEventListener('click', modeToggle);

//memory match mode
const mmSlots = document.querySelectorAll(".mmSlot");
mmSlots.forEach(slot => {
    slot.addEventListener("click", () => mmFlip(slot));
   // slot.addEventListener("mouseenter", () => slot.classList.add("mmHover"));
});
const mmRefreshBtn = document.querySelector("#mmRefresh");
mmRefreshBtn.addEventListener('click', mmRefresh);


function updateCount(){   
    upcomingCount.textContent = terms.length;
    learnedCounter.textContent = learnedCards.length;
    numberedCard.textContent = "card number: " + terms[cardNum].num;
}
function showFC(){
    kanji.textContent = terms[cardNum].front;
    if(fcFront.classList.contains("hidden")){
       justToggle(fcFront, fcBack);
    }    
    updateCount();
}

function showBack(){
    meaning.textContent = terms[cardNum].back;
}

function justToggle(one, two){
    one.classList.toggle("hidden");
    two.classList.toggle("hidden");
}

function noClick(e, time){
    e.classList.add("no-click");
    e.dataset.noClick = "true";
    setTimeout( function(){
        e.classList.remove("no-click");
        delete e.dataset.noClick;
    } , time);
}

function fcFlip(){
    noClick(flipbtn, 500);
    justToggle(fcBack, fcFront);
    if(fcFront.classList.contains("hidden")) {
        showBack();
    } else {
        showFC();
    }
}

function fcSkip(){
    noClick(skipbtn, 500);
    cardNum++;
    if(cardNum >= terms.length) cardNum = 0;
    showFC();
}

function fcLearned(){
    noClick(learnedbtn, 500);
    learnedCards.push(terms.splice(cardNum,1)[0]);
    if(cardNum >= terms.length) cardNum = 0;
    
    if (terms.length > 0){
        learnedCounter.textContent = learnedCards.length + "/20";
        if(fcFront.classList.contains("hidden")) {
        justToggle(fcBack, fcFront);
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
    noClick(fcRefresh, 1000)
    cardNum = 0;
    terms = learnedCards.concat(terms);
    learnedCards = [];
    updateCount();
    showFC();
}

/*toggle mode code*/
function modeToggle(){
    noClick(modeTogglebtn, 1000);

    justToggle(fcMode, mmMode);

    if(fcMode.classList.contains('hidden')){
        modeTogglebtn.innerText = "Flashcards";
        title.innerText =" - Memory Match" ;
        mmRender()
    } else {
        modeTogglebtn.innerText = "Match";
        title.innerHTML = " - Flashcards";

    }
}

function getRandomIntInclusive(min, max){
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random()*(maxFloored - minCeiled + 1) + minCeiled);
}

//function mmRefresh(){}

function ranSort(array){
    array.sort(() => Math.random() - 0.5)
}

function mmRender(){

    let fcCards = Array.from({length:6},() => terms[getRandomIntInclusive(0,19)]);
    let mmCards = fcCards.flatMap(card =>[
        {content: card.front, pairId: card.num},
        {content: card.back, pairId: card.num}
    ]);

    ranSort(mmCards);


    mmCards.forEach((card, index) => {
        let mmDiv = document.createElement("div")
        mmDiv.classList.add("mmDown", "hidden");

        let mmP = document.createElement("p");
        let mmId = document.createElement("p");
        mmId.classList.add("hidden")
        mmP.textContent = card.content;
        mmId.textContent = card.pairId;
        
        mmDiv.appendChild(mmP);
        mmDiv.appendChild(mmId);

        mmSlots[index].appendChild(mmDiv);
    });


}

function displayMoves(){
    movesP.textContent = moves;
}

function mmFlip(slot){
    if(boardLocked) return;
    if (slot.classList.contains("matched")) return;

    const front = slot.children[0];
    const back = slot.children[1];

    if(firstCard && firstCard.slot ===slot) return

    justToggle(front, back);

    if (!firstCard){
        firstCard = {slot, front, back};
        return;
    }

    secondCard = {slot, front, back};
    boardLocked = true;

    checkMatch();
}

function checkMatch(){
    moves++;
    displayMoves();
    const id1 = firstCard.back.lastChild.textContent;
    const id2 = secondCard.back.lastChild.textContent;

    const isMatch = id1 === id2;

    if(isMatch){
        firstCard.slot.classList.add("matched")
        secondCard.slot.classList.add("matched")

        resetTurn();
    } else {
        setTimeout(() => {
            justToggle(firstCard.front, firstCard.back);
            justToggle(secondCard.front, secondCard.back);
            resetTurn();
        }, 1200);
    }
}

function resetTurn(){
    firstCard = null;
    secondCard = null;
    boardLocked = false;
}

function mmRefresh(){
    noClick(mmRefreshBtn, 1000)
    resetTurn();
    moves = 0;
    mmSlots.forEach((slot, index) =>{
        slot.classList.remove("matched")
        slot.querySelectorAll(".mmDown").forEach(child => child.remove())
    })
    mmRender();
    displayMoves();
}