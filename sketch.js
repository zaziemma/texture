function setup() {
  createCanvas(600,600);
  frameRate(1);
  background(255);
}

function draw() {
  
  for(var x=25; x<580; x+=50){
    for(var y=25; y<580; y+=50){
      
      for(var rad=10; rad<101; rad+=10){

          
           stroke(220,237,49);
           strokeWeight(5);
          noFill();
          
          
          if (random() <0.5){
            
         stroke(178,238,255);
         line( x, y+20,x+20, y);
  }
      line(x,y,x+20,y+20); 
      }
    
      
    }
    
  }
  
}