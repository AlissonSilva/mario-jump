
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');
const gameoverworld = document.querySelector('.game-over-world')
const scored = document.querySelector('.score');
const goomba = document.querySelector('.goomba');

fetch("./js/file.json")
  .then(response => response.json())
  .then(json => console.log(json));

const jump = ()=>{
    mario.classList.add('jump');
    setTimeout(() => {
        mario.classList.remove('jump');    
    }, 500);
}

var i = 0;

const loop = setInterval(() => {


    
    const pipePosition = pipe.offsetLeft;
    const goombaPosition = goomba.offsetLeft;

    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');
    const cloudsPosition = +window.getComputedStyle(clouds).left.replace('px','');

    i++;

    
    document.querySelector('.score').innerHTML = i;

    if (i >= 1000 && i <= 1999) {
        pipe.style.animationDuration = '2.5s';
    } else if (i>=2000 && i <=2999){
        pipe.style.animationDuration = '2.0s';
    }else if (i>=3000 && i <=3999){
        pipe.style.animationDuration = '1.75s';
    }else if (i>=4000 && i <=4999){
        pipe.style.animationDuration = '1.50s';
    }else if (i>=5000 && i <=5999){
        pipe.style.animationDuration = '1.25s';
    }else if (i>=6000 && i <=6999){
        pipe.style.animationDuration = '1.00s';
    }else if (i>=7000 && i <=7999){
        pipe.style.animationDuration = '0.50s';
    }

    goomba.src = './images/goomba.gif';
    
    if (goombaPosition >= (pipePosition+10)) {
        goomba.style.animationDuration = '1.50s';
    }


    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {


        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        goomba.style.animation = 'none';
        goomba.style.left = `${goombaPosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        clouds.style.animation = 'none';
        clouds.style.marginLeft = `${cloudsPosition}px`;

        mario.src = './images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        gameoverworld.style.display = 'block'

        clearInterval(loop);
        
    }

    console.log("Goomba "+goombaPosition+" Mario "+marioPosition+" Pipe "+pipePosition);

    if (goombaPosition <= 120 && goombaPosition > 0 && marioPosition < 5) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        goomba.style.animation = 'none';
        goomba.style.left = `${goombaPosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        clouds.style.animation = 'none';
        clouds.style.marginLeft = `${cloudsPosition}px`;

        mario.src = './images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        gameoverworld.style.display = 'block'

        clearInterval(loop);
    }else if (goombaPosition >= 40 && goombaPosition <= 129 && marioPosition < 16) {
        goomba.src = './images/currency.gif';
    }

    
    
}, 10);
document.addEventListener('keydown', jump); 