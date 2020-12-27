class Ground {
    constructor() {
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(0, 670, width * 2, 20, options);
        World.add(world, this.body);
    }

    display(){
        rectMode(CENTER);
        fill('yellow');
        rect(0, 670, width * 2, 20);
    }
}