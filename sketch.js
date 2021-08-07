const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground, bridge;
var leftWall, rightWall;
var jointPoint;
var jointLink;
var backgroundimg ;
var stones = [];
 
function preload(){
  backgroundimg = loadImage("gif/bgmi.gif")
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  ground = new Base(0, height - 10, width * 2, 20, 0, 8, 77, true);

  leftWall = new Base(150, height / 2 + 50, 400, 100, "brown", true);

  rightWall = new Base(width - 150, height / 2 + 50, 380, 100, "brown", true);


  bridge = new Bridge(17, { x: width / 2 - 500, y: height / 2 });

  jointPoint = new Base(width - 300, height / 2 + 10, 40, 20, 66, 31, 19, true);


  Matter.Composite.add(bridge.body, jointPoint);

  jointLink = new Link(bridge, jointPoint);

  for (var i = 0; i <= 8; i++) {
    var x = random(width / 2 - 200, width / 2 + 300);
    var y = random(-10, 140);
    var stone = new Stone(x, y, 80, 80);
    stones.push(stone);
  }
}

function draw() {
  background("grey");

  Engine.update(engine);
  // Title
  fill("black");
  textAlign("center");
  textSize(40);
  text("🧟‍♀️🧟‍♀️PRO-C29: CRUSH THE ZOMBIES🧟‍♂️🧟‍♂️", width / 2, 100);

  bridge.show();
  
  leftWall.show();
  rightWall.show();

  
  ground.show();
  
  for (var stone of stones) {
    stone.show();
  }
}
