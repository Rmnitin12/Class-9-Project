
function setup() {
  createCanvas(1500,900);
  background(51);
  box = createSprite(800,800,200,200);

 }

function draw() 
{
  var counterg 
counterg = 0
  var greenText
  textSize(35)
  greenText = text("Green Count" + counterg, 400,400)
  // write the code to change background color 
  // to red when RIGHT_ARROW is pressed
  
  if (keyIsDown(RIGHT_ARROW))
  {
    background("red")
    box.x+=2
  }

  if (keyIsDown(LEFT_ARROW)) 
  {
    counterg+=1
    background("blue");
    box.x-=2
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    background("yellow");
    box.y-=2
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    background("green");

    box.y+=2
  }

   

  


  
  drawSprites();
}

