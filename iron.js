class Iron{
	constructor(x,y,w,h)
	{
	var options = {

    restitution:0.8,
	friction:3,
	density:30,
	isStatic:false

	}
		this.w=w;
		this.h=h;
	
		this.body=Bodies.rectangle(x,y,w,h, options)
		World.add(world, this.body);

	}
	display()
	{
			var stonepos=this.body.position;		
			push()
			translate(stonepos.x, stonepos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("black");
			rect(0,0,this.w,this.h);

			pop()
	}

}