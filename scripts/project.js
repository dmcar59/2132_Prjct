const popUp = document.getElementById('pop-up');
const start = document.getElementById('start');
const score = document.getElementById('score');
const winner = document.getElementById('winner');

let rollp1 = 0;
let rollc1 =0;
let rollp2 = 0;
let rollc2 =0;
let totalp = 0;
let totalc =0;
let subp = 0;
let subc = 0;
let counter = 0;

start.addEventListener("click",function(){
  /*Roll Dice*/
    if(counter < 2){
        rollp1 = Math.floor(Math.random() * 6 + 1);
        rollp2 = Math.floor(Math.random()*6+1);
        rollc1 = Math.floor(Math.random() * 6 + 1);
        rollc2 = Math.floor(Math.random()*6+1);
        console.log(rollp1, rollc1);
        console.log(rollp2, rollc2);
        counter ++;
    }
    else if(counter <3){
        rollp1 = Math.floor(Math.random() * 6 + 1);
        rollp2 = Math.floor(Math.random()*6+1);
        rollc1 = Math.floor(Math.random() * 6 + 1);
        rollc2 = Math.floor(Math.random()*6+1);
        console.log(rollp1, rollc1);
        console.log(rollp2, rollc2);
        counter ++;
        popUp.style.opacity =1;
        console.log(`roll counter ${counter}`); 
        console.log("finished")
       
    }
    else{
        console.log('return');
        return;
    }
   /*Add Dice Score*/
   console.log('here I am');
if(rollp1 == 0 || rollp2==0){
totalp = 0;
console.log(`one is zero = ${totalp}`);
}
else if(rollp1 == rollp2){
    totalp = (rollp1 + rollp2)*2;
    console.log(` x 2 = ${totalp}`);
}
else{
    totalp = rollp1 + rollp2;
    console.log(`regular ${totalp}`);
}
if(rollc1 == 0 || rollc2==0){
    console.log(`one is zero = ${totalc}`);
    totalc = 0;
    }
    else if(rollc1 == rollc2){
        totalc = (rollc1 + rollc2)*2;
        console.log(` x 2 = ${totalc}`);
    }
    else{
        totalc = rollc1 + rollc2;
        console.log(`regular ${totalc}`);
    }
subp += totalp;
subc += totalc;
score.innerHTML = `<p> Player score: ${subp} and Computer score: ${subc}`; 
console.log(`player subtotal ${subp} and computer subtotal ${subc}`);

if(counter == 3 && subp>subc){
winner.innerHTML = `Player Wins`;
}
else if(counter ==3 && subp<subc){
    winner.innerHTML = `Computer Wins`;
}
else{
    winner.innerHTML = `Its a Tie!`;
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



