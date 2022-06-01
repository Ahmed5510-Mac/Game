let basket = document.querySelector("#basket");
let body = document.querySelector('body');
let move = 0;

body.addEventListener('keydown', function (e) {
    if (e.key == "ArrowRight") {
        handleMove(1);

        // console.log(move);
    } else if (e.key == "ArrowLeft") {
        // console.log("left");
        handleMove(-1);

    }
})
function handleMove(dir) {
    // console.log(move);
    if (move < (window.innerWidth - basket.width) && dir == 1) {
        move += 60 * dir;
        if (move > (window.innerWidth - basket.width)) move = window.innerWidth - basket.width;
        basket.style.left = move + "px";
        // basket.classList.remove("flip");
    } else if (move > 0 && dir == -1) {
        // console.log((move > 0));
        move += 40 * dir;
        if (move < 0) move = 0;
        basket.style.left = move + "px";
        // basket.classList.add("flip");
    }
}
const eggImg = document.querySelector('#egg');
const start = document.querySelector('.start');
const stopGame = document.querySelector('.stop');
const sc = document.querySelector('.score');
let score = 0;

start.addEventListener("click", function () {
    sc.textContent = "0";
    score=0
    moveDown();
    start.disabled = true;
    flag = false;
    stopGame.addEventListener("click", function () {
        start.disabled = false;
        flag = true;
        sc.textContent = "0";
    })
})

let flag = false;

function moveDown() {
    let down = 0;
    eggImg.src = "images/egg.png";
    eggImg.style.top = "0";
    eggImg.style.left = Math.random() * (window.innerWidth - eggImg.width);
    let timerId = setInterval(() => {
        down += 10;
        eggImg.classList.add("smooth");

        if (down < window.innerHeight - eggImg.height - 0.5 * basket.width) {
            eggImg.style.top = down + "px";
        } else {
            if (eggImg.offsetLeft + eggImg.width < basket.offsetLeft + basket.width && eggImg.offsetLeft > basket.offsetLeft) {
                score++
                sc.textContent = score;
                eggImg.style.opacity = "0";
            }
            else {
                eggImg.style.top = down - 10 + eggImg.offsetHeight + "px"
                eggImg.src = "images/Uovo_sorridente.png";
            }

            clearInterval(timerId);
            eggImg.classList.remove("smooth");

            if (!flag) {
                setTimeout(() => {
                    // eggImg.classList.remove("smooth");
                    moveDown()
                }, 100);
            }
        }
        if(score>5)
        {
           
                down += 20;
              
              

            
            
        }
    }, 40);
}


