let gameseq = [];
let userseq = [];
let started = false;
let level = 0;
let btns = ["yellow", "red", "green", "purple"];
let h2 = document.querySelector("h2");
document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("game Started");
        started = true;
        levelup();
    }
})
// document.querySelector("#start").addEventListener("click", function () {
//     if (!started) {
//         started = true;
//         levelup();
//     }
// });

function game_flash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 200)

}
function user_flash(btn) {
    btn.classList.add("user_flash");
    setTimeout(function () {
        btn.classList.remove("user_flash");
    }, 200)

}

function levelup() {
    userseq = [];
    level++;
    h2.innerText = `Level ${level}`;
    // random button select
    let ranIdx = Math.floor(Math.random() * btns.length);
    let ranclr = btns[ranIdx];
    let ranbtn = document.querySelector(`.${ranclr}`);
    // now to store game generated color
    gameseq.push(ranclr);
    game_flash(ranbtn);
}
let allbtn = document.querySelectorAll(".btn");
function btn_press() {
    // first step detect which button was pressed
    console.log(this);
    let btn = this;
    let userclr = btn.getAttribute("id");
    console.log(userclr);
    userseq.push(userclr);
    user_flash(btn);
    checkans(userseq.length - 1);
}
for (btn of allbtn) {
    btn.addEventListener("click", btn_press);
}
function checkans(idx) {
    console.log("level" + level);
    // let idx=level-1;
    if (userseq[idx] === gameseq[idx]) {
        if (userseq.length == gameseq.length) {
            setTimeout(levelup, 1000);
        }
        // console.log("correct"); 
    }
    else {
        // console.log("game over");
        h2.innerHTML = `Game over! Your score was <b>${level}</b><br> press an key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 1000);
        reset();
    }
}

function reset() {
    started = false;
    level = 0;
    gameseq = [];
    userseq = [];
}