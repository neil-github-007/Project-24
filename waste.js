class Waste {
    constructor() {
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body = Bodies.circle(50, 625, 30, options);
        World.add(world, this.body);
    }

    display(){
     
        fill('pink');
        ellipse(50,625,30);

        
        
    }
}