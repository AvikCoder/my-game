class Moving {
    constructor(x,y,width,height){
        var options = {
           isStatic:false,
           restitution:1.5
        
           
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        Matter.Body.applyForce(this.body,this.body.position,{x:1,y:0});
        World.add(myWorld,this.body)

    }
    display(){
        var pos = this.body.position;
        
        rectMode(CENTER);
        fill("green")
        rect(pos.x,pos.y,this.width,this.height);
    }
}