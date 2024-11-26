class MovableObject extends DrawableObject {
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;
    energy = 100;
    lastHit = 0;

    applyGravity() {
        setInterval(() => {
            if(this.isAboveGround() || this.speedY >0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);

    }

    isAboveGround() {
        if(this instanceof ThrowableObject) { //Thworable object should always fall
            return true;
        } else {
        return this.y < 130;
        }
    }


    isColliding (mo) {
        return this.x + this.width > mo.x &&
            this.y + this.height > mo.y &&
            this.x < mo.x &&
            this.y <mo.y + mo.height;
    //    return  (this.X + this.width) >= mo.X && this.X <= (mo.X + mo.width) && 
    //            (this.Y + this.offsetY + this.height) >= mo.Y &&
    //            (this.Y + this.offsetY) <= (mo.Y + mo.height) && 
    //            mo.onCollisionCourse;  
    }

    hit() {
        this.energy -= 5;
        if(this.energy < 0) {
            this.energy = 0;
            game_over.play();
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit; // Difference in ms
        timepassed = timepassed / 1000; // Difference in s
        return timepassed < 1;
    }

    isDead() {
        return this.energy == 0;
    }

    disappearWhenIsDead() {
        setTimeout(() => this.x = -3000, 400);
    }

    playAnimation(images) {
        let i = this.currentImage % images.length; // let i = 0 % 6; => // i = 0, 1, 2, 3, 4, 5, 0,...
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    moveRight() {
        this.x += this.speed;
    }

    moveLeft() {
        this.x -= this.speed;
    }

    jump() {
        this.speedY = 30;
    }
    
}