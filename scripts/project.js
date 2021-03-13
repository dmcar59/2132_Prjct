const popUp = document.getElementById('pop-up');
const start = document.getElementById('start');

let rollp = 0;
let rollc = 0;
let counter = 0;

start.addEventListener("click",function(){
    if(counter < 2){
        rollp = Math.floor(Math.random() * 6 + 1);
        rollc = Math.floor(Math.random()*6+1);
        console.log(rollp);
        console.log(rollc);
        counter ++;
    }
    else if(counter <3){
        rollp = Math.floor(Math.random() * 6 + 1);
        rollc = Math.floor(Math.random()*6+1);
        console.log(rollp);
        console.log(rollc);
        counter ++;
        popUp.style.opacity =1; 
        console.log("finished")
        return counter;
    }
   
})  



/*
-------------------------------------
spining bike start and stop
-------------------------------------
*/
const mainPictureInHTML = document.getElementById("main-image");
const startAnimation    = document.getElementById("btn-start");
const stopAnimation     = document.getElementById("btn-stop");
const $bikeImage = $('#main-image');


//need an animation handler 
let bikeAnimationHandler;
//flag to track if user has chosen to start or stop
let keepSpining = false;
//the first image # in the group
let currentImageNumber = 1;
//the last image # in the group
const maxImageNumber = 34;
let stoploop = false;

//start button is clicked
startAnimation.addEventListener("click", function(){
    //console.log("Start");
    stoploop = false;
    if(keepSpining == false){
    keepSpining=true;    
    
    bikeAnimationHandler = requestAnimationFrame(spinImage);
    }
    
});

//stop button is clicked
stopAnimation.addEventListener("click", function(){
    console.log("Stop");
    stoploop = true;
    keepSpining=true;
    cancelAnimationFrame(bikeAnimationHandler);
     console.log("Stop after"); 
  
    
});


/*
run this with each frame of animation
*/
function spinImage(){   

setTimeout(function(e){  
      

if(currentImageNumber > maxImageNumber){
cancelAnimationFrame(bikeAnimationHandler); 
currentImageNumber = 1;
console.log("numbered out") ;
keepSpining=false;
return;
}
else if(stoploop == true){
    console.log(stoploop);
    cancelAnimationFrame(bikeAnimationHandler);
    
}
else{
    console.log("made it");
    //console.log(`${currentImageNumber}, `);
    mainPictureInHTML.src = `images/bike-${currentImageNumber}.jpg`;
    currentImageNumber++;
     

 } 
bikeAnimationHandler = requestAnimationFrame(spinImage);
},100)
}



