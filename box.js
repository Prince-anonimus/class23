class Box {
    constructor(x, y, width, height) {
        var options = {
            restitution: 0.8
        }
        this.body = Bodies.rectangle(x, y, width, height);
        this.width = width;
        this.height = height;
        World.add(world, this.body);


    }


    display() {
        push()
        rectMode(CENTER);
        translate(this.body.position.x, this.body.position.y); // it keeps giving new x and y position to rect
        rotate(this.body.angle);
        strokeWeight(4) //width of the boundary
        stroke("green");
        rect(0, 0, this.width, this.height);
        pop();
    }
}