class Box1 {
    constructor(x, y, width, height,options) {
      var options = {
          'restitution':0,
          'isStatic': 0,
          'friction' : 0
      }
      this.body = Bodies.rectangle(x, y, width, height,{isStatic:true} );
      
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      push ();
      translate (pos.x, pos.y);
      rotate (this.body.angle)
      rectMode(CENTER);
      fill(75,37,109);
      rect(0, 0, 200, 20);
      pop();
    }
  };