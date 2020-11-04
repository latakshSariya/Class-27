class chain{
    constructor(bodyA , pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.3,
            length:250
          }
           this.body = Constraint.create(options);
           this.pointB = pointB 
           
           World.add(world ,this.body);  

                  
   }

     display(){
        strokeWeight(5);

        line(this.body.bodyA.position.x ,this.body.bodyA.position.y ,this.pointB.x ,this.pointB.y)
    }
}