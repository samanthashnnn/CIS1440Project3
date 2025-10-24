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
const startCard = document.getElementById("startCard");
const p = document.createElement("p");
terms.forEach((e) => {
    p.textContent = e.front;
    startCard.appendChild(p);

})