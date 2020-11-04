class Ground {

    constructor(){
        var ground = {
            isStatic:true
        }
        this.body = Bodies.rectangle(500,460,1000,80,ground);
        this.width = 1000;
        this.height = 80;
        World.add(world,this.body)
    }
    display(){
        push();
            translate(this.body.position.x , this.body.position.y);
            rotate(this.body.angle);
            fill("brown")
            rectMode(CENTER);
            rect(0,0 , this.width , this.height)
           
        pop();

    }

}