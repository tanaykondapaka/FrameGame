var i=0
var y=0;



function run(){
    if(i==0){
        
    document.getElementById("play").style.animationPlayState="running";
    document.getElementById("title").style.animationPlayState="running";
    document.getElementById("title_shadow").style.animationPlayState="running";
    i=1
    setTimeout(function(){
     
        document.getElementById("title_shadow").style.marginTop="10px";
        document.getElementById("title").style.marginTop="-105px";
        document.getElementById("title_shadow").style.fontSize="70px";
        document.getElementById("title").style.fontSize="70px";
        document.getElementById("play").style.marginTop="390px";
        document.getElementById("play").innerHTML="Click!";
    });
setTimeout(
    function(){
        canvas.show();
    },1000)
}
    else{
draw();

if(y==0){
    document.getElementById("save").style.display="block";
    document.getElementById("play").style.display="inline"
    document.getElementById("save").style.display="inline"
    y++
    document.getElementById("play").style.width="100px"
    document.getElementById("play").style.borderWidth="5px 2.5px 5px 5px"
    document.getElementById("play").style.borderRadius="100px 0px 0 100px"
}

    }
}


function setup(){
    canvas=createCanvas(600,400);
    canvas.hide()
    canvas.position(470,150);
    video=createCapture(VIDEO);
    video.hide();
    
}


function draw(){
    image(video,0,0, 640,480);
    
    
    noStroke()

    
    fill(Math.floor(Math.random() * 255),Math.floor(Math.random() * 255),Math.floor(Math.random() * 255))

   circle(0,50,100)
   fill(Math.floor(Math.random() * 255),Math.floor(Math.random() * 255),Math.floor(Math.random() * 255))
   circle(0,150,100)
   fill(Math.floor(Math.random() * 255),Math.floor(Math.random() * 255),Math.floor(Math.random() * 255))
   circle(0,250,100)
   fill(Math.floor(Math.random() * 255),Math.floor(Math.random() * 255),Math.floor(Math.random() * 255))

   circle(0,350,100)
   fill(Math.floor(Math.random() * 255),Math.floor(Math.random() * 255),Math.floor(Math.random() * 255))
   circle(600,50,100)
   fill(Math.floor(Math.random() * 255),Math.floor(Math.random() * 255),Math.floor(Math.random() * 255))
   circle(600,150,100)
   fill(Math.floor(Math.random() * 255),Math.floor(Math.random() * 255),Math.floor(Math.random() * 255))

   circle(600,250,100)
   fill(Math.floor(Math.random() * 255),Math.floor(Math.random() * 255),Math.floor(Math.random() * 255))
   circle(600,350,100)
   fill(Math.floor(Math.random() * 255),Math.floor(Math.random() * 255),Math.floor(Math.random() * 255))
   circle(50,400,100)
   fill(Math.floor(Math.random() * 255),Math.floor(Math.random() * 255),Math.floor(Math.random() * 255))
   circle(150,400,100)
   fill(Math.floor(Math.random() * 255),Math.floor(Math.random() * 255),Math.floor(Math.random() * 255))
   circle(250,400,100)
   fill(Math.floor(Math.random() * 255),Math.floor(Math.random() * 255),Math.floor(Math.random() * 255))
   circle(350,400,100)
   fill(Math.floor(Math.random() * 255),Math.floor(Math.random() * 255),Math.floor(Math.random() * 255))
   circle(450,400,100)
   fill(Math.floor(Math.random() * 255),Math.floor(Math.random() * 255),Math.floor(Math.random() * 255))
   circle(550,400,100)
   fill(Math.floor(Math.random() * 255),Math.floor(Math.random() * 255),Math.floor(Math.random() * 255))
   
   circle(50,00,100)
   fill(Math.floor(Math.random() * 255),Math.floor(Math.random() * 255),Math.floor(Math.random() * 255))
   circle(150,0,100)
   fill(Math.floor(Math.random() * 255),Math.floor(Math.random() * 255),Math.floor(Math.random() * 255))
   circle(250,00,100)
   fill(Math.floor(Math.random() * 255),Math.floor(Math.random() * 255),Math.floor(Math.random() * 255))
   circle(350,00,100)
   fill(Math.floor(Math.random() * 255),Math.floor(Math.random() * 255),Math.floor(Math.random() * 255))
   circle(450,00,100)
   fill(Math.floor(Math.random() * 255),Math.floor(Math.random() * 255),Math.floor(Math.random() * 255))
   circle(550,00,100)
    noLoop()
    }
   


