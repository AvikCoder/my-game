class Obstacle {
    constructor(x,y,width,height,color){
        var op = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,width,height,op);
        this.width = width;
        this.height = height;
        this.color = color;
        World.add(myWorld,this.body)
    }
    display(){
        fill(this.color);
       rectMode(CENTER)
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }
}