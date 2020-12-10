class paper{
constructor(x,y,width,height){
    var options={
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2
    }

    Paper=Matter.Bodies.circle(200,100,20,options)

World.add(world,Paper);

}

display(){
   
    push();
    fill('green')
    ellipse(Paper.position.x,Paper.position.y,20,20);
    pop();
}
}