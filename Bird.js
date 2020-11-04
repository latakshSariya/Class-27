class Bird extends BaseClass {
    constructor(x , y){
        super(x,y,50,50);
        this.image = loadImage("sprites/bird.png");
        console.log(this.body)
    }
    display(){
       
        var pos = this.body.position
        pos.x = mouseX;
        pos.y = mouseY;
        super.display();
    }
        
}