let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

class Ball {
    constructor(x, y, velX, velY, color, size) {
        this.x = x;
        this.y = y;
        this.velX = velX;
        this.velY = velY;
        this.color = color;
        this.size = size;
    }

    draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fill();
    }

    update() {
        if ((this.x + this.size) >= width ||
            ((this.x - this.size) <= 0)) {
            this.velX = -(this.velX);
        }
        if ((this.y + this.size) >= height ||
            ((this.y - this.size) <= 0)) {
            this.velY = -(this.velY);
        }

        this.x += this.velX;
        this.y += this.velY;
    }

    collisionDetect() {
        for (let j = 0; j < balls.length; j++) {
            if (!(this === balls[j])) {
                let dx = this.x - balls[j].x;
                let dy = this.y - balls[j].y;
                let distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < this.size + balls[j].size) {
                    balls[j].color = this.color = 'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) + ')';
                }
            }
        }
    }
}

class strangeBall extends Ball{
    constructor(x, y, velX, velY, color, size){
        super(x, y, velX, velY, color, size)
    }
    update(){
        super.update();
        this.size=random(1,30)
    }

}

let balls = [];
let strngBall=false;

function ballsMove() {
    ctx.fillStyle = 'rgba(0,0,0,0.25)';
    ctx.fillRect(0, 0, width, height);

    while (balls.length < 10) {
        let size = random(10, 20);
        let ball = new Ball(
            random(0 + size, width - size),
            random(0 + size, height - size),
            random(-7, 7),
            random(-7, 7),
            'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) + ')',
            size
        );
        balls.push(ball);
        if (!strngBall){
            let size = random(10, 20);
            let ball = new strangeBall(
                random(0 + size, width - size),
                random(0 + size, height - size),
                random(-7, 7),
                random(-7, 7),
                'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) + ')',
                size
            );
            balls.push(ball);
            strngBall=!strngBall;
            console.log(strngBall);
            debugger;
        }
    }


    for (let i = 0; i < balls.length; i++) {
        balls[i].draw();
        balls[i].update();
        balls[i].collisionDetect();
    }


    requestAnimationFrame(ballsMove);
}



ballsMove();