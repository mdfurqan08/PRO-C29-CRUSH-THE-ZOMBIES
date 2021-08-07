class Stone {
    constructor(x, y, w, h) {
      let options = {
        restitution: 1.20
      };
  
      this.body = Bodies.rectangle(x, y, w, h, options);
      this.w = w;
      this.h = h;
      this.color = color;
      World.add(world, this.body);
    }
  
    show() {
      let pos = this.body.position;
      push();
      translate(pos.x, pos.y);
      strokeWeight(1);
      fill(153, 189, 194);
      ellipseMode(CENTER);
      ellipse(0, 0, this.w, this.h);
      noStroke();
      pop();
    }
  }
  