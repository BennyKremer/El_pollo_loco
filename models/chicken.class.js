class Chicken extends MovableObject {


    y = 370;
    height = 60;
    width = 60;
    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ];

    CHICKEN_DEAD = [
        'img/3_enemies_chicken/chicken_small/2_dead/dead.png'
    ];

    offset = {
        top: 4,
        bottom: 4,
        left: 4,
        right: 4,
    };

    constructor() {
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.CHICKEN_DEAD);
        this.x = 900 + Math.random() * 500; //Zahl zwischen 200 und 700
        this.speed = 0.15 + Math.random() * 0.25;

        this.animate();
    }

    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);

        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);

        }, 200);
    }

        chickenDead() {
            setStopableInterval(() => this.playAnimation(this.CHICKEN_DEAD), 1000 / 60);
            this.disappearWhenIsDead(); 
        }


}