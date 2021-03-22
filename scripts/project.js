const popUp = document.getElementById('pop-up');
const rules = document.getElementById('rules');
const start = document.getElementById('start');
const score = document.getElementById('score');
const winner = document.getElementById('winner');
const startbtn = document.getElementById('start-btn');
const stopbtn = document.getElementById('btn-close');
const againbtn = document.getElementById('btn-again');
const thanks = document.getElementById('thanks');
const rulesbtn = document.getElementById('rules-btn');
const rulesbck = document.getElementById('rules-back');
const refreshbtn = document.getElementById('refresh-btn');
const pr11 = document.getElementById('box4');
const pr12 = document.getElementById('box5');
const cr11 = document.getElementById('box7');
const cr12 = document.getElementById('box8');
const pr21 = document.getElementById('box11');
const pr22 = document.getElementById('box12');
const cr21 = document.getElementById('box14');
const cr22 = document.getElementById('box15');
const pr31 = document.getElementById('box18');
const pr32 = document.getElementById('box19');
const cr31 = document.getElementById('box21');
const cr32 = document.getElementById('box22');
const tp1 = document.getElementById('box6');
const tc1 = document.getElementById('box9');
const tp2 = document.getElementById('box13');
const tc2 = document.getElementById('box16');
const tp3 = document.getElementById('box20');
const tc3 = document.getElementById('box23');
const ps = document.getElementById('box25');
const cs = document.getElementById('box26');

let rollp1 = [0,0,0];
let rollc1 =[0,0,0];
let rollp2 = [0,0,0];
let rollc2 =[0,0,0];
let totalp = [0,0,0];
let totalc =[0,0,0];
let subp = 0;
let subc = 0;
let counter = 0;



start.addEventListener("click",function(){
    startbtn.innerHTML = "Next Roll";
  /*Roll Dice*/
    if(counter < 2){
        //console.log(`counter ${counter}`);
        rollp1[counter] = Math.floor(Math.random() * 6 + 1);
        rollp2[counter] = Math.floor(Math.random()*6+1);
        rollc1[counter] = Math.floor(Math.random() * 6 + 1);
        rollc2[counter] = Math.floor(Math.random()*6+1);
        
        //console.log(rollp1, rollc1);
        //console.log(rollp2, rollc2);
        counter ++;
    }
    else if(counter <3){
        rollp1[counter] = Math.floor(Math.random() * 6 + 1);
        rollp2[counter] = Math.floor(Math.random()*6+1);
        rollc1[counter] = Math.floor(Math.random() * 6 + 1);
        rollc2[counter] = Math.floor(Math.random()*6+1);
        //console.log(rollp1, rollc1);
        //console.log(rollp2, rollc2);
        startbtn.innerHTML = "Game Over";
        counter ++;
        popUp.style.opacity =1;
        //console.log(`roll counter ${counter}`); 
        //console.log("finished")
       
    }
    else{
        //console.log('return');
        return;
    }
/*Add Dice Score*/
   //console.log(`here I am counter =${counter}`);
if(rollp1[counter-1] == 1 || rollp2[counter-1]== 1){
totalp[counter-1] = 0;
//console.log(`one is zero player = ${totalp}`);
}
else if(rollp1[counter-1] == rollp2[counter-1]){
    totalp[counter-1] = (rollp1[counter-1] + rollp2[counter-1])*2;
    //console.log(`player x 2 = ${totalp}`);
}
else{
    totalp[counter-1] = rollp1[counter-1] + rollp2[counter-1];
    //console.log(`regular player ${totalp}`);
}
if(rollc1[counter-1] == 1 || rollc2[counter-1]== 1){
    //console.log(`one is zero = ${totalc}`);
    totalc[counter-1] = 0;
    }
    else if(rollc1[counter-1] == rollc2[counter-1]){
        totalc[counter-1] = (rollc1[counter-1] + rollc2[counter-1])*2;
       // console.log(` x 2 = ${totalc}`);
    }
    else{
        totalc[counter-1] = rollc1[counter-1] + rollc2[counter-1];
       // console.log(`regular ${totalc}`);
    }
    pr11.src = `images/dice${rollp1[0]}.png`;
    pr12.src = `images/dice${rollp2[0]}.png`;
    cr11.src = `images/dice${rollc1[0]}.png`;
    cr12.src = `images/dice${rollc2[0]}.png`;
    pr21.src = `images/dice${rollp1[1]}.png`;
    pr22.src = `images/dice${rollp2[1]}.png`;
    cr21.src = `images/dice${rollc1[1]}.png`;
    cr22.src = `images/dice${rollc2[1]}.png`;
    pr31.src = `images/dice${rollp1[2]}.png`;
    pr32.src = `images/dice${rollp2[2]}.png`;
    cr31.src = `images/dice${rollc1[2]}.png`;
    cr32.src = `images/dice${rollc2[2]}.png`;
    tp1.innerHTML = totalp[0];
    tc1.innerHTML = totalc[0];
    tp2.innerHTML = totalp[1];
    tc2.innerHTML = totalc[1];
    tp3.innerHTML = totalp[2];
    tc3.innerHTML = totalc[2];

subp = totalp[0]+totalp[1]+totalp[2];
ps.innerHTML = subp;
subc = totalc[0]+totalc[1]+totalc[2];
cs.innerHTML = subc;
score.innerHTML = `<p> Player score: ${subp} and Computer score: ${subc}`; 
//console.log(`player subtotal ${subp} and computer subtotal ${subc}`);

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

stopbtn.addEventListener("click",function(){
    popUp.style.transition = "opacity 0s";
    popUp.style.opacity =0;
    startbtn.innerHTML = "Thanks";
    counter=0;
    rollp1 = [0,0,0];
    rollc1 =[0,0,0];
    rollp2 = [0,0,0];
    rollc2 =[0,0,0];
    totalp = [0,0,0];
    totalc =[0,0,0];
    subp = 0;
    subc = 0;
    thanks.style.display = "block";
    

})

againbtn.addEventListener("click",function(){
    popUp.style.opacity =0;
    startbtn.innerHTML = "Play Again";
    counter=0;
    rollp1 = [0,0,0];
    rollc1 =[0,0,0];
    rollp2 = [0,0,0];
    rollc2 =[0,0,0];
    totalp = [0,0,0];
    totalc =[0,0,0];
    subp = 0;
    subc = 0;
    pr11.src = `images/dice1.png`;
    pr12.src = `images/dice1.png`;
    cr11.src = `images/dice1.png`;
    cr12.src = `images/dice1.png`;
    pr21.src = `images/dice1.png`;
    pr22.src = `images/dice1.png`;
    cr21.src = `images/dice1.png`;
    cr22.src = `images/dice1.png`;
    pr31.src = `images/dice1.png`;
    pr32.src = `images/dice1.png`;
    cr31.src = `images/dice1.png`;
    cr32.src = `images/dice1.png`;
    tp1.innerHTML = 0;
    tc1.innerHTML = 0;
    tp2.innerHTML = 0;
    tc2.innerHTML = 0;
    tp3.innerHTML = 0;
    tc3.innerHTML = 0;
    ps.innerHTML = 0;
    cs.innerHTML = 0;
})

rulesbtn.addEventListener("click",function(){
    rules.style.opacity =1;
   
})
rulesbck.addEventListener("click",function(){
    rules.style.opacity =0;
   
})
refreshbtn.addEventListener("click",function(){
    popUp.style.opacity =0;
    rules.style.opacity =0;
    thanks.style.display = "none";
    startbtn.innerHTML = "Play Again";
    counter=0;
    rollp1 = [0,0,0];
    rollc1 =[0,0,0];
    rollp2 = [0,0,0];
    rollc2 =[0,0,0];
    totalp = [0,0,0];
    totalc =[0,0,0];
    subp = 0;
    subc = 0;
    pr11.src = `images/dice1.png`;
    pr12.src = `images/dice1.png`;
    cr11.src = `images/dice1.png`;
    cr12.src = `images/dice1.png`;
    pr21.src = `images/dice1.png`;
    pr22.src = `images/dice1.png`;
    cr21.src = `images/dice1.png`;
    cr22.src = `images/dice1.png`;
    pr31.src = `images/dice1.png`;
    pr32.src = `images/dice1.png`;
    cr31.src = `images/dice1.png`;
    cr32.src = `images/dice1.png`;
    tp1.innerHTML = 0;
    tc1.innerHTML = 0;
    tp2.innerHTML = 0;
    tc2.innerHTML = 0;
    tp3.innerHTML = 0;
    tc3.innerHTML = 0;
    ps.innerHTML = 0;
    cs.innerHTML = 0;
})