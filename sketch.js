const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
//step1
var ground, ball;

var box1 , box2;

function setup() {
    var canvas = createCanvas(400, 400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(200,385,400,20);
    // ground is an object
    //Ground() is a class or a blueprint

    box1 = new Box(200,300,50,50);
    box2 = new Box(240,100,50,100);



}

function draw() {
    background("lightblue");
    Engine.update(engine);

    //step5
    box1.display();
    box2.display();
    ground.display();
}