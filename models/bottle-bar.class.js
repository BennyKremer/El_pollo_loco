class BottleBar extends DrawableObject {


    IMAGES = [
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/0.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/20.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/40.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/60.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/80.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/100.png',
    ];

    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.x = 40;
        this.y = 50;
        this.width = 200;
        this.height = 60;
        this.setBottleAmount(0);
    }


    setBottleAmount(bottleAmount) {
        this.bottleAmount = bottleAmount;
        let path = this.IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }
    resolveImageIndex() {
        if(this.percentage == 10) {
            return 5;
        } else if(this.percentage > 8) {
            return 4;
        } else if(this.percentage > 6) {
            return 3;
        } else if(this.percentage > 4) {
            return 2;
        } else if(this.percentage > 2) {
            return 1;
        } else {
            return 0;
        }
    }

}