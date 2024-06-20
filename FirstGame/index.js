var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 1000;
canvas.height = 1000;
document.body.appendChild(canvas);

// SOUNDS
var soundWin = "sounds/caught.wav"; //Game Over sound efx
var soundLose = " sounds/lose.wav"; //Game Over sound efx
//Assign audio to soundEfx
var soundEfx = document.getElementById("soundEfx");


//IMAGES

// BACKGROUND
// source: https://unsplash.com/photos/timelapse-photography-of-warped-lines-RmoWqDCqN2E
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
bgReady = true;
};
bgImage.src = "images/background.jpg";

// HERO
// source: https://unsplash.com/photos/astronaut-in-spacesuit-floating-in-space-Yj1M5riCKk4
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
heroReady = true;
};
heroImage.src = "images/hero.png";

//MONSTER
// source: https://unsplash.com/photos/floating-rock-on-galaxy-illustration-KFCPopx2icU
var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function () {
    monsterReady = true;
};
monsterImage.src = "images/monster.png";


// NUMBER IMAGES
// i tried to make this in a loop but it did not work so I had to do it by hand
var oneReady = false;
var oneImage = new Image();
oneImage.onload = function () {
    oneReady = true;
};
oneImage.src = "images/numbers-01.png";

var twoReady = false;
var twoImage = new Image();
twoImage.onload = function () {
    twoReady = true;
};
twoImage.src = "images/numbers-02.png";

var threeReady = false;
var threeImage = new Image();
threeImage.onload = function () {
    threeReady = true;
};
threeImage.src = "images/numbers-03.png";

var fourReady = false;
var fourImage = new Image();
fourImage.onload = function () {
    fourReady = true;
};
fourImage.src = "images/numbers-04.png";

var fiveReady = false;
var fiveImage = new Image();
fiveImage.onload = function () {
    fiveReady = true;
};
fiveImage.src = "images/numbers-05.png";

var sixReady = false;
var sixImage = new Image();
sixImage.onload = function () {
    sixReady = true;
};
sixImage.src = "images/numbers-06.png";

var sevenReady = false;
var sevenImage = new Image();
sevenImage.onload = function () {
    sevenReady = true;
};
sevenImage.src = "images/numbers-07.png";

var eightReady = false;
var eightImage = new Image();
eightImage.onload = function () {
    eightReady = true;
};
eightImage.src = "images/numbers-08.png";

var nineReady = false;
var nineImage = new Image();
nineImage.onload = function () {
    nineReady = true;
};
nineImage.src = "images/numbers-09.png";

var tenReady = false;
var tenImage = new Image();
tenImage.onload = function () {
    tenReady = true;
};
tenImage.src = "images/numbers-10.png";

var elevenReady = false;
var elevenImage = new Image();
elevenImage.onload = function () {
    elevenReady = true;
};
elevenImage.src = "images/numbers-11.png";

var twelveReady = false;
var twelveImage = new Image();
twelveImage.onload = function () {
    twelveReady = true;
};
twelveImage.src = "images/numbers-12.png";


var winReady = false;
var winImage = new Image();
winImage.onload = function() {
    winReady = true;
}
winImage.src = "images/gameOver-01.png";

var loseReady = false;
var loseImage = new Image();
loseImage.onload = function() {
    loseReady = true;
}
loseImage.src = "images/gameOver-02.png";

// MAIN FUNCTION


var main = function () {
    var now = Date.now();
    var delta = now - then;
    update(delta / 1000);
    render();
    then = now;
    // Request to do this again ASAP
    requestAnimationFrame(main);
};

var curr;
var start;
var end;
var wait = Date.now();

var render = function () {
    if (Date.now() > wait) {
        if (bgReady) {
        //console.log('here2');
        ctx.drawImage(bgImage, 0, 0);
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, 200, 150);
        ctx.fillStyle = "black";
        ctx.fillRect(875, 0, 150, 100);
        }
        if (heroReady) {
            ctx.drawImage(heroImage, hero.x, hero.y);
        }
        if (monsterReady) {
            ctx.drawImage(monsterImage, monster.x, monster.y);
        }
        if (oneReady) {
            ctx.drawImage(oneImage, one.x, one.y);
        }
        if (twoReady) {
            ctx.drawImage(twoImage, two.x, two.y);
        }
        if (threeReady) {
            ctx.drawImage(threeImage, three.x, three.y);
        }
        if (fourReady) {
            ctx.drawImage(fourImage, four.x, four.y);
        }
        if (fiveReady) {
            ctx.drawImage(fiveImage, five.x, five.y);
        }
        if (sixReady) {
            ctx.drawImage(sixImage, six.x, six.y);
        }
        if (sevenReady) {
            ctx.drawImage(sevenImage, seven.x, seven.y);
        }
        if (eightReady) {
            ctx.drawImage(eightImage, eight.x, eight.y);
        }
        if (nineReady) {
            ctx.drawImage(nineImage, nine.x, nine.y);
        }
        if (tenReady) {
            ctx.drawImage(tenImage, ten.x, ten.y);
        }
        if (elevenReady) {
            ctx.drawImage(elevenImage, eleven.x, eleven.y);
        }
        if (twelveReady) {
            ctx.drawImage(twelveImage, twelve.x, twelve.y);
        }

        ctx.fillStyle = "rgb(250, 250, 250)";
        ctx.font = "24px Helvetica";
        ctx.textAlign = "left";
        ctx.textBaseline = "top";
        ctx.fillText("Score: " + monstersCaught, 32, 32);
        ctx.fillText("Lives: " + lives, 32, 66);
        ctx.fillText("Find 12x" + curr, 32, 100);


        ctx.fillText("Time: " + Math.floor(((end / 1000) - (Date.now() / 1000))), 900, 32);
        if (Math.floor((end / 1000) - (Date.now() / 1000)) <= 0) {
            lives--;
            soundEfx.src = soundLose;
            soundEfx.play();
            reset();
        }
    }

    if (monstersCaught >= 5) {
        ctx.drawImage(winImage, 0, 0);
        
        monstersCaught = 0;
        lives = 3;
        wait = Date.now() + 10000;
    }

    if (lives == 0) {
        ctx.drawImage(loseImage, 0, 0);        
        monstersCaught = 0;
        lives = 3;
        wait = Date.now() + 10000;
    }
    



};



// Game objects
var hero = {
    speed: 256, // movement in pixels per second
    x: 0, // where on the canvas are they?
    y: 0 // where on the canvas are they?
};
var monster = {
    // for this version, the monster does not move, so just and x and y
    x: 0,
    y: 0
};
var monstersCaught = 0;
var lives = 3;

// probably should have put these all in a list so I could call them all with a for loop or something
// but it's way too late now
var one = {
    x: 0, 
    y: 0
}

var two = {
    x: 0, 
    y: 0
}

var three = {
    x: 0, 
    y: 0
}

var four = {
    x: 0, 
    y: 0
}

var five = {
    x: 0, 
    y: 0
}

var six = {
    x: 0, 
    y: 0
}

var seven = {
    x: 0, 
    y: 0
}

var eight = {
    x: 0, 
    y: 0
}

var nine = {
    x: 0, 
    y: 0
}

var ten = {
    x: 0, 
    y: 0
}

var eleven = {
    x: 0, 
    y: 0
}

var twelve = {
    x: 0, 
    y: 0
}


// KEYBOARD STUFF
var keysDown = {};
addEventListener("keydown", function (e) {
    //console.log(e.keyCode + " down")
    keysDown[e.keyCode] = true;
    }, false);
    addEventListener("keyup", function (e) {
    //console.log(e.keyCode + " up")
    delete keysDown[e.keyCode];
}, false);
var update = function (modifier) {
    if (38 in keysDown) { // Player holding up
    hero.y -= hero.speed * modifier;
    }
    if (40 in keysDown) { // Player holding down
    hero.y += hero.speed * modifier;
    }
    if (37 in keysDown) { // Player holding left
    hero.x -= hero.speed * modifier;
    }
    if (39 in keysDown) { // Player holding right
    hero.x += hero.speed * modifier;
    }

    // if the user collects the asteroid, they get an extra 5 seconds and 0.25 extra points
    if (
        hero.x <= (monster.x + 32)
        && monster.x <= (hero.x + 32)
        && hero.y <= (monster.y + 32)
        && monster.y <= (hero.y + 32)
        ) {
        end = end + 5000; 
        resetMonster();
        monstersCaught += 0.25;

    }

    let alreadyWon = false; // prevents issues when they're on top of each other 
    if (curr == 1) {
        if (
            hero.x <= (one.x + 50)
            && one.x <= (hero.x + 50)
            && hero.y <= (one.y + 50)
           && one.y <= (hero.y + 50)
        ) {
            ++monstersCaught;
            reset();
            soundEfx.src = soundWin;
            soundEfx.play();
            alreadyWon = true;
        }
    }



    if (curr == 2) {
        if (
            hero.x <= (two.x + 50)
            && two.x <= (hero.x + 50)
            && hero.y <= (two.y + 50)
           && two.y <= (hero.y + 50)
        ) {
            ++monstersCaught;
            reset();
            soundEfx.src = soundWin;
            soundEfx.play();
            alreadyWon = true;
        }
    }




    if (curr == 3) {
        if (
            hero.x <= (three.x + 50)
            && three.x <= (hero.x + 50)
            && hero.y <= (three.y + 50)
           && three.y <= (hero.y + 50)
        ) {
            ++monstersCaught;
            reset();
            soundEfx.src = soundWin;
            soundEfx.play();
            alreadyWon = true;
        }
    }


    if (curr == 4) {
        if (
            hero.x <= (four.x + 50)
            && four.x <= (hero.x + 50)
            && hero.y <= (four.y + 50)
           && four.y <= (hero.y + 50)
        ) {
            ++monstersCaught;
            reset();
            soundEfx.src = soundWin;
            soundEfx.play();
            alreadyWon = true;
        }
    }



    if (curr == 5) {
        if (
            hero.x <= (five.x + 50)
            && five.x <= (hero.x + 50)
            && hero.y <= (five.y + 50)
           && five.y <= (hero.y + 50)
        ) {
            ++monstersCaught;
            reset();
            soundEfx.src = soundWin;
            soundEfx.play();
            alreadyWon = true;
        }
    }



    if (curr == 6) {
        if (
            hero.x <= (six.x + 50)
            && six.x <= (hero.x + 50)
            && hero.y <= (six.y + 50)
           && six.y <= (hero.y + 50)
        ) {
            ++monstersCaught;
            reset();
            soundEfx.src = soundWin;
            soundEfx.play();
            alreadyWon = true;
        }
    }



    if (curr == 7) {
        if (
            hero.x <= (seven.x + 50)
            && seven.x <= (hero.x + 50)
            && hero.y <= (seven.y + 50)
           && seven.y <= (hero.y + 50)
        ) {
            ++monstersCaught;
            reset();
            soundEfx.src = soundWin;
            soundEfx.play();
            alreadyWon = true;
        }
    }


    if (curr == 8) {
        if (
            hero.x <= (eight.x + 50)
            && eight.x <= (hero.x + 50)
            && hero.y <= (eight.y + 50)
           && eight.y <= (hero.y + 50)
        ) {
            ++monstersCaught;
            reset();
            soundEfx.src = soundWin;
            soundEfx.play();
            alreadyWon = true;
        }
    }



    if (curr == 9) {
        if (
            hero.x <= (nine.x + 50)
            && nine.x <= (hero.x + 50)
            && hero.y <= (nine.y + 50)
           && nine.y <= (hero.y + 50)
        ) {
            ++monstersCaught;
            reset();
            soundEfx.src = soundWin;
            soundEfx.play();
            alreadyWon = true;
        }
    }


    if (curr == 10) {
        if (
            hero.x <= (ten.x + 50)
            && ten.x <= (hero.x + 50)
            && hero.y <= (ten.y + 50)
           && ten.y <= (hero.y + 50)
        ) {
            ++monstersCaught;
            reset();
            soundEfx.src = soundWin;
            soundEfx.play();
            alreadyWon = true;
        }
    }



    if (curr == 11) {
        if (
            hero.x <= (eleven.x + 50)
            && eleven.x <= (hero.x + 50)
            && hero.y <= (eleven.y + 50)
           && eleven.y <= (hero.y + 50)
        ) {
            ++monstersCaught;
            reset();
            soundEfx.src = soundWin;
            soundEfx.play();
            alreadyWon = true;
        }
    }


    if (curr == 12) {
        if (
            hero.x <= (twelve.x + 50)
            && twelve.x <= (hero.x + 50)
            && hero.y <= (twelve.y + 50)
           && twelve.y <= (hero.y + 50)
        ) {
            ++monstersCaught;
            reset();
            soundEfx.src = soundWin;
            soundEfx.play();
            alreadyWon = true;
        }
    }

    if (alreadyWon == false && curr != 1) {
        if (
            hero.x <= (one.x + 50)
            && one.x <= (hero.x + 50)
            && hero.y <= (one.y + 50)
           && one.y <= (hero.y + 50)
        ) {
            soundEfx.src = soundLose;
            soundEfx.play();
            --lives;
            reset();
        }
    }

    if (alreadyWon == false && curr != 2) {
        if (
            hero.x <= (two.x + 50)
            && two.x <= (hero.x + 50)
            && hero.y <= (two.y + 50)
           && two.y <= (hero.y + 50)
        ) {
            soundEfx.src = soundLose;
            soundEfx.play();
            --lives;
            reset();
        }
    }

    if (alreadyWon == false && curr != 3) {
        if (
            hero.x <= (three.x + 50)
            && three.x <= (hero.x + 50)
            && hero.y <= (three.y + 50)
           && three.y <= (hero.y + 50)
        ) {
            soundEfx.src = soundLose;
            soundEfx.play();
            --lives;
            reset();
        }
    }

    if (alreadyWon == false && curr != 4) {
        if (
            hero.x <= (four.x + 50)
            && four.x <= (hero.x + 50)
            && hero.y <= (four.y + 50)
           && four.y <= (hero.y + 50)
        ) {
            soundEfx.src = soundLose;
            soundEfx.play();
            --lives;
            reset();
        }
    }

    if (alreadyWon == false && curr != 5) {
        if (
            hero.x <= (five.x + 50)
            && five.x <= (hero.x + 50)
            && hero.y <= (five.y + 50)
           && five.y <= (hero.y + 50)
        ) {
            soundEfx.src = soundLose;
            soundEfx.play();
            --lives;
            reset();
        }
    }

    if (alreadyWon == false && curr != 6) {
        if (
            hero.x <= (six.x + 50)
            && six.x <= (hero.x + 50)
            && hero.y <= (six.y + 50)
           && six.y <= (hero.y + 50)
        ) {
            soundEfx.src = soundLose;
            soundEfx.play();
            --lives;
            reset();
        }
    }

    
    if (alreadyWon == false && curr != 7) {
        if (
            hero.x <= (seven.x + 50)
            && seven.x <= (hero.x + 50)
            && hero.y <= (seven.y + 50)
           && seven.y <= (hero.y + 50)
        ) {
            soundEfx.src = soundLose;
            soundEfx.play();
            --lives;
            reset();
        }
    }

    if (alreadyWon == false && curr != 8) {
        if (
            hero.x <= (eight.x + 50)
            && eight.x <= (hero.x + 50)
            && hero.y <= (eight.y + 50)
           && eight.y <= (hero.y + 50)
        ) {
            soundEfx.src = soundLose;
            soundEfx.play();
            --lives;
            reset();
        }
    }

    if (alreadyWon == false && curr != 9) {
        if (
            hero.x <= (nine.x + 50)
            && nine.x <= (hero.x + 50)
            && hero.y <= (nine.y + 50)
           && nine.y <= (hero.y + 50)
        ) {
            soundEfx.src = soundLose;
            soundEfx.play();
            --lives;
            reset();
        }
    }

    if (alreadyWon == false && curr != 10) {
        if (
            hero.x <= (ten.x + 50)
            && ten.x <= (hero.x + 50)
            && hero.y <= (ten.y + 50)
           && ten.y <= (hero.y + 50)
        ) {
            soundEfx.src = soundLose;
            soundEfx.play();
            --lives;
            reset();
        }
    }

    if (alreadyWon == false && curr != 11) {
        if (
            hero.x <= (eleven.x + 50)
            && eleven.x <= (hero.x + 50)
            && hero.y <= (eleven.y + 50)
           && eleven.y <= (hero.y + 50)
        ) {
            soundEfx.src = soundLose;
            soundEfx.play();
            --lives;
            reset();
        }
    }

    if (alreadyWon == false && curr != 12) {
        if (
            hero.x <= (twelve.x + 50)
            && twelve.x <= (hero.x + 50)
            && hero.y <= (twelve.y + 50)
           && twelve.y <= (hero.y + 50)
        ) {
            soundEfx.src = soundLose;
            soundEfx.play();
            --lives;
            reset();
        }
    }


    // stops numbers from popping up over the boxes which are:
    // ctx.fillRect(0, 0, 200, 150);
    // ctx.fillRect(875, 0, 150, 100);
    if (one.x < 200 && one.y < 150) {
        one.x = 200;
        one.y = 150;
    }
    if (one.x > 875 && one.y < 100) {
        one.y = 100;
    }

    if (two.x < 200 && two.y < 150) {
        two.x = 200;
        two.y = 150;
    }
    if (two.x > 875 && two.y < 100) {
        two.y = 100;
    }

    if (three.x < 200 && three.y < 150) {
        three.x = 200;
        three.y = 150;
    }
    if (three.x > 875 && three.y < 100) {
        three.y = 100;
    }

    if (four.x < 200 && four.y < 150) {
        four.x = 200;
        four.y = 150;
    }
    if (four.x > 875 && four.y < 100) {
        four.y = 100;
    }

    if (five.x < 200 && five.y < 150) {
        five.x = 200;
        five.y = 150;
    }
    if (five.x > 875 && five.y < 100) {
        five.y = 100;
    }

    if (six.x < 200 && six.y < 150) {
        six.x = 200;
        six.y = 150;
    }
    if (six.x > 875 && six.y < 100) {
        six.y = 100;
    }

    if (seven.x < 200 && seven.y < 150) {
        seven.x = 200;
        seven.y = 150;
    }
    if (seven.x > 875 && seven.y < 100) {
        seven.y = 100;
    }

    if (eight.x < 200 && eight.y < 150) {
        eight.x = 200;
        eight.y = 150;
    }
    if (eight.x > 875 && eight.y < 100) {
        eight.y = 100;
    }

    if (nine.x < 200 && nine.y < 150) {
        nine.x = 200;
        nine.y = 150;
    }
    if (nine.x > 875 && nine.y < 100) {
        nine.y = 100;
    }

    if (ten.x < 200 && ten.y < 150) {
        ten.x = 200;
        ten.y = 150;
    }
    if (ten.x > 875 && ten.y < 100) {
        ten.y = 100;
    }

    if (eleven.x < 200 && eleven.y < 150) {
        eleven.x = 200;
        eleven.y = 150;
    }
    if (eleven.x > 875 && eleven.y < 100) {
        eleven.y = 100;
    }

    if (twelve.x < 200 && twelve.y < 150) {
        twelve.x = 200;
        twelve.y = 150;
    }
    if (twelve.x > 875 && twelve.y < 100) {
        twelve.y = 100;
    }


    // stops from popping up around the hero

    if (one.x <= 600 && one.x >= 400 && one.y <= 600 && one.y <= 400) {
        one.x = 500;
        one.y = 50;
    }
    if (two.x <= 600 && two.x >= 400 && two.y <= 600 && two.y <= 400) {
        two.x = 500;
        two.y = 50;
    }

    if (three.x <= 600 && three.x >= 400 && three.y <= 600 && three.y <= 400) {
        three.x = 500;
        three.y = 50;
    }

    if (four.x <= 600 && four.x >= 400 && four.y <= 600 && four.y <= 400) {
        four.x = 500;
        four.y = 50;
    }

    if (five.x <= 600 && five.x >= 400 && five.y <= 600 && five.y <= 400) {
        five.x = 500;
        five.y = 50;
    }

    if (six.x <= 600 && six.x >= 400 && six.y <= 600 && six.y <= 400) {
        six.x = 500;
        six.y = 50;
    }

    if (seven.x <= 600 && seven.x >= 400 && seven.y <= 600 && seven.y <= 400) {
        seven.x = 500;
        seven.y = 50;
    }

    if (eight.x <= 600 && eight.x >= 400 && eight.y <= 600 && eight.y <= 400) {
        eight.x = 500;
        eight.y = 50;
    }

    if (nine.x <= 600 && nine.x >= 400 && nine.y <= 600 && nine.y <= 400) {
        nine.x = 500;
        nine.y = 50;
    }

    if (ten.x <= 600 && ten.x >= 400 && ten.y <= 600 && ten.y <= 400) {
        ten.x = 500;
        ten.y = 50;
    }

    if (eleven.x <= 600 && eleven.x >= 400 && eleven.y <= 600 && eleven.y <= 400) {
        eleven.x = 500;
        eleven.y = 50;
    }

    if (twelve.x <= 600 && twelve.x >= 400 && twelve.y <= 600 && twelve.y <= 400) {
        twelve.x = 500;
        twelve.y = 50;
    }
    


    if (38 in keysDown && hero.y > 32+4) { // holding up key
        hero.y -= hero.speed * modifier;
    }
    if (40 in keysDown && hero.y < canvas.height - (64 + 6)) { // holding down key
        hero.y += hero.speed * modifier;
    }
    if (37 in keysDown && hero.x > (32+4)) { // holding left key
        hero.x -= hero.speed * modifier;
    }
    if (39 in keysDown && hero.x < canvas.width - (64 + 6)) { // holding right key
        hero.x += hero.speed * modifier;
    }
    //console.log(hero.x);
    // stopping it from going past edges
    if (38 in keysDown && hero.y <= 0) {
        hero.y = 0;
    }    
    if (39 in keysDown && hero.x >= 951) {
        hero.x = 951;
    }
    if (37 in keysDown && hero.x <= 0) {
        hero.x = 0;
    }
    if (40 in keysDown && hero.y >= 951) {
        hero.y = 951;
    }

}
var reset = function () {
    
        
    if (lives == 0) {
        ctx.drawImage(loseImage, 0, 0);        
        monstersCaught = 0;
        lives = 3;
        wait = Date.now() + 10000;
    }
    
    hero.x = canvas.width / 2;
    hero.y = canvas.height / 2;
    monster.x = 32 + (Math.random() * (canvas.width - 96));
    monster.y = 32 + (Math.random() * (canvas.height - 96));
    one.x = 50 + (Math.random() * (canvas.width - 150));
    one.y = 50 + (Math.random() * (canvas.height - 150));
    two.x = 50 + (Math.random() * (canvas.width - 150));
    two.y = 50 + (Math.random() * (canvas.height - 150));
    three.x = 50 + (Math.random() * (canvas.width - 150));
    three.y = 50 + (Math.random() * (canvas.height - 150));
    four.x = 50 + (Math.random() * (canvas.width - 150));
    four.y = 50 + (Math.random() * (canvas.height - 150));
    five.x = 50 + (Math.random() * (canvas.width - 150));
    five.y = 50 + (Math.random() * (canvas.height - 150));
    six.x = 50 + (Math.random() * (canvas.width - 150));
    six.y = 50 + (Math.random() * (canvas.height - 150));
    seven.x = 50 + (Math.random() * (canvas.width - 150));
    seven.y = 50 + (Math.random() * (canvas.height - 150));
    eight.x = 50 + (Math.random() * (canvas.width - 150));
    eight.y = 50 + (Math.random() * (canvas.height - 150));
    nine.x = 50 + (Math.random() * (canvas.width - 150));
    nine.y = 50 + (Math.random() * (canvas.height - 150));
    ten.x = 50 + (Math.random() * (canvas.width - 150));
    ten.y = 50 + (Math.random() * (canvas.height - 150));
    eleven.x = 50 + (Math.random() * (canvas.width - 150));
    eleven.y = 50 + (Math.random() * (canvas.height - 150));
    twelve.x = 50 + (Math.random() * (canvas.width - 150));
    twelve.y = 50 + (Math.random() * (canvas.height - 150));
    curr = Math.floor(Math.random() * 12) + 1;
    start = Date.now();
    end = start + 10000;
    console.log(start);
    console.log(end);
    console.log("one: " + one.x + ", " + one.y);
    console.log("two: " + two.x + ", " + two.y);
    console.log("three: " + three.x + ", " + three.y);
    console.log("four: " + four.x + ", " + four.y);
    console.log("five: " + five.x + ", " + five.y);
    console.log("six: " + six.x + ", " + six.y);
    console.log("seven: " + seven.x + ", " + seven.y);
    console.log("eight: " + eight.x + ", " + eight.y);
    console.log("nine: " + nine.x + ", " + nine.y);
    console.log("ten: " + ten.x + ", " + ten.y);
    console.log("eleven: " + eleven.x + ", " + eleven.y);
    console.log("twelve: " + twelve.x + ", " + twelve.y);
    
};

var resetMonster = function() {
    monster.x = 32 + (Math.random() * (canvas.width - 96));
    monster.y = 32 + (Math.random() * (canvas.height - 96));
}


// RUNNING
var then = Date.now();
reset();
main();
