let gameseq = [];
let userseq = [];

let started =  false;
let level = 0;

let btns = ["red","yellow", "sky","blue"];

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started === false) {
        console.log("Game is started");
        started = true;


        levelUp();
    }

});
function btnFlash(btn){
    btn.classList.add("flash"); 
    setTimeout(function(){
        btn.classList.remove("flash")
    },250);
}
function levelUp(){
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    console.log(randIdx);
    console.log(randBtn);
    console.log(randColor);
    btnFlash(randBtn);
}

function btnPress(){
    let btn = this;
    btnFlash(btn);
}

let allbtns =  document.querySelectorAll(".btn");
for(btn of allbtns) {
    btn.addEventListener("click", btnPress);
}
