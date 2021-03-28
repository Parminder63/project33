const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles = [];
var plinkos = [];

var divisions = [];

var Particle;

var divisionHeight = 300;
var score = 0;

var gameState = "PLAY";
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width / 2, height, width, 20);


  for (var k = 0; k <= width; k = k + 80) {
    divisions.push(new Divisions(k, height - divisionHeight / 2, 10, divisionHeight));
  }


  for (var j = 75; j <= width; j = j + 50) {

    plinkos.push(new Plinko(j, 75));
  }

  for (var j = 50; j <= width - 10; j = j + 50) {

    plinkos.push(new Plinko(j, 175));
  }

  for (var j = 75; j <= width; j = j + 50) {

    plinkos.push(new Plinko(j, 275));
  }

  for (var j = 50; j <= width - 10; j = j + 50) {

    plinkos.push(new Plinko(j, 375));
  }

}

function draw() {
  background("black");
  textSize(30)
  text("Score : " + score, 20, 30);
  text("500", 15, 550);
  text("500", 95, 550);
  text("500", 175, 550);
  text("500", 255, 550);
  text("100", 335, 550);
  text("100", 415, 550);
  text("100", 495, 550);
  text("200", 575, 550);
  text("200", 655, 550);
  text("200", 735, 550);

  Engine.update(engine);


  for (var i = 0; i < plinkos.length; i++) {

    plinkos[i].display();

  }

  if (Particle != null) {
    Particle.display();

    if (Particle.body.position.y > 760) {
      if (Particle.body.position.x < 300) {
        score = score + 500;
        Particle = null;

      }

    }
  }




  /*if(frameCount%60===0){
    particles.push(new particle(random(width/2-30, width/2+30), 10,10));
    score++;
  }*/

  for (var j = 0; j < particles.length; j++) {

    particles[j].display();
  }
  for (var k = 0; k < divisions.length; k++) {

    divisions[k].display();
  }

}

function mousePressed() {
  if (gameState !== "end") {
    Particle = new particle(mouseX, 10, 10, 10)
  }
}