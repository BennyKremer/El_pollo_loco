class DrawableObject {
    img;
    imageCache = {};
    currentImage = 0;
    x = 120;
    y = 280;
    height = 150;
    width = 100;



    
    // loadImage('img/test.png);
    loadImage(path) {
        this.img = new Image(); // this.img = document.getElementById('image) <img id="image" src>
        this.img.src = path;
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    //drawFrame(ctx) {

    //    if(this instanceof Character || this instanceof Chicken) {
    //    ctx.beginPath();
    //    ctx.lineWidth = "5";
    //    ctx.strokeStyle = "blue";
    //    ctx.rect(this.x, this.y, this.width, this.height);
    //    ctx.stroke();
    //    }
    //}


    /**
     * 
     * @param {Array} arr - ['img/image1.png', 'img/image2.png', ...]
     */
    
        loadImages(arr){
            arr.forEach((path) => {
                let img = new Image();
                img.src = path;
                this.imageCache[path] = img;
            });
    
        }

            /**
     * this function is used to draw rectangles around the MovableObject, it helps to check where they will collide
     * 
     * @param {Canvas-Context} ctx - the "ctx" parameter is a canvas context (CanvasRenderingContext2D) 
     * that provides the environment for drawing on an HTML canvas. It allows drawing shapes, images and text on a canvas
     */
    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Chicken || this instanceof Endboss ||
            this instanceof ThrowableObject || this instanceof SalsaBottle || this instanceof Coin ||
            this instanceof SmallChicken || this instanceof Heart) {
            ctx.beginPath();
            ctx.lineWidth = '2';
            ctx.strokeStyle = 'transparent';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }

    /**
     * this function is used to draw the coordinates from the MovableObject that you want to know
     * 
     *@param {Canvas-Context} ctx - the "ctx" parameter is a canvas context (CanvasRenderingContext2D) 
     * that provides the environment for drawing on an HTML canvas. It allows drawing shapes, images and text on a canvas
     */
    // drawPosition(ctx) {
    //     if(this instanceof SalsaBottle) {
    //         ctx.font = "48px serif";
    //         ctx.fillText(`${this.x}, ${this.y}`, this.x, this.y);
    //     }
    // }


    /**
    * this function is used to draw rectangles around the MovableObject within the other frame, it helps to check where they will collide
    * offset means the difference between the outer and the inner frame (this one here is the inner one)
    * 
    *@param {Canvas-Context} ctx - the "ctx" parameter is a canvas context (CanvasRenderingContext2D) 
    * that provides the environment for drawing on an HTML canvas. It allows drawing shapes, images and text on a canvas
    */
    drawFrameOffset(ctx) {
        if (this instanceof Character || this instanceof Chicken || this instanceof Endboss ||
            this instanceof ThrowableObject || this instanceof SalsaBottle || this instanceof Coin ||
            this instanceof SmallChicken || this instanceof Heart) {
            //draw rectangle
            ctx.beginPath();
            ctx.lineWidth = '2';
            ctx.strokeStyle = 'transparent';
            ctx.rect(this.x + this.offset.left, this.y + this.offset.top, this.width - this.offset.right - this.offset.left, this.height - this.offset.top - this.offset.bottom);
            ctx.stroke();
        }
    }

}