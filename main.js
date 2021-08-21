 nosey=0;
 nosex=0;
 function setup(){
    canvas = createCanvas(400,400)
     canvas.center()
     video=createCapture(VIDEO);
     video.size(400,400)
     video.hide()
     posenet=ml5.poseNet(video,modelLoaded)
     posenet.on("pose",Gotpose)

 }

 function TakeSnapshot(){
     save("filter.jpg");
 }
 
  function modelLoaded()
{

   console.log("posenet is loded")
   
   
}
function draw(){
    image(video,0,0,400,400)
    image(uhcudg,nosex,nosey,30,30)

}
function Gotpose(results){
     if(results.length>0){
         console.log(results)
         nosey= results[0].pose.nose.y+10
         nosex=results[0].pose.nose.x-10
     }
}

function preload(){
    uhcudg=loadImage("https://i.postimg.cc/3x3QzSGq/m.png")
}

