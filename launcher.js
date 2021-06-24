class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness:0.004
        }
        this.pointB=pointB
        this.constraint1= Matter.Constraint.create(options)
        World.add(world,this.constraint1);
    }

    fly(){
        this.constraint1.bodyA=null;
    }
    attach(body){
       this.constraint1.bodyA=body;
    }

    display(){
        if(this.constraint1.bodyA){
        var pointA= this.constraint1.bodyA.position;
        var pointB= this.pointB;
        line(pointA.x,pointA.y,pointB.x,pointB.y) }


    }



}