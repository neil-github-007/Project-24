class Waste {
    constructor(x, y, width, height) {
        var options = {
            restitution:0.3,
            friction:0.5,
            density:1.2,
            isStatic:false
        }
        this.body = Bodies.circle(x, y, width, options);
        this.height = height;
        this.width = width;
        World.add(world, this.body);
    }

    display(){
        ellipseMode(RADIUS);     
        fill('pink');
        ellipse(this.body.position.x, this.body.position.y, 15, 15);
        if(keyCode === UP_ARROW) {
            Body.applyForce(this.body, this.body.position, {x: 2, y: -3});
        }
    }

}
