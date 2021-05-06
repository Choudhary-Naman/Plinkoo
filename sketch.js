var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;



function setup() {
  createCanvas(800, 650);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  

  //create division objects
  for (var k = 0; k <=80; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var k = 0; k <=160; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var k = 0; k <=240; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var k = 0; k <=320; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var k = 0; k <=400; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var k = 0; k <=480; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var k = 0; k <=560; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var k = 0; k <=640; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var k = 0; k <=720; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var k = 0; k <=800; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  //create 1st row of plinko objects
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,20));
  }

  //create 2nd row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) {
    plinkos.push(new Plinko(j,90));
  }
 
  //create 3rd row of plinko objects
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,160));
  }
  
  //create 4th row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) {
    plinkos.push(new Plinko(j,230));
  }
  
}  
  



function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
  ground.display();

   
  
  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }

  if(frameCount%60===0) {
    particles.push(new Particles(random(width/2-250,width/2+250),10,10));
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  //display the particles
  for(var h=0;h<particles.length;h++){

  particles[h].display();
}
}