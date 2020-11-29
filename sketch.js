const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
 
var database;

var obstacles = [];
var obstacles1 = [];
var obstacles2 = [];


function setup() {
  createCanvas(1200,800);
  myEngine = Engine.create();
  myWorld = myEngine.world; 
  obstacle1 = new Obstacle(600,800,1200,20,"black");
  obstacle2 = new Obstacle(600,770,800,40,"red");
  obstacle3 = new Obstacle(200,440,600,20,"yellow");
  obstacle4 = new Obstacle(1000,440,600,20,"yellow");
  obstacle5 = new Obstacle(1190,350,10,2000);
  obstacle6 = new Obstacle(10,350,10,2000)

  moving1 = new Moving(600,350,100,20);
  
  for(var i = 300 ; i < 1000 ; i+=150){
    obstacles.push(new Obstacle(i,720,70,60,"yellow"))
  }

  for(var i = 375 ; i < 900 ; i+=150){
    obstacles1.push(new Obstacle(i,640,70,60,"green"))
  }

  for(var i = 450 ; i < 800 ; i+=150){
    obstacles2.push(new Obstacle(i,560,70,60,"blue"))
  }
}

function draw() {
  Engine.update(myEngine);
  background(220);  
  obstacle1.display();
  obstacle2.display();
  obstacle3.display();
  obstacle4.display();

  moving1.display();
  for(var i = 0; i < obstacles.length; i++){
    obstacles[i].display();
  }

  for(var i = 0 ; i < obstacles1.length ; i++){
    obstacles1[i].display();
  }

  for(var i = 0 ; i < obstacles2.length ; i++){
    obstacles2[i].display();
  }
  var collision1 = Matter.SAT.collides(moving1.body,obstacle5.body);
  var collision2 =  Matter.SAT.collides(moving1.body,obstacle6.body);
  //console.log(collision1.collided);
if(collision1.collided){
  Matter.Body.setVelocity(moving1.body,{x:-5,y:0})
}
if(collision2.collided){
  Matter.Body.setVelocity(moving1.body,{x:5,y:0})
}
}
