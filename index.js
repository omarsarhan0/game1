var colours = ['red','blue','green','yellow'];
var gamePattern = [];
var userClickedPattern = [];
var level = 0 ;
var started=false;

$(document).keydown(function(){
    if(!started){
    $("#level-title").text("Level " + level);
    nextSequence();
    started=true;}
})





$(".btn").click(function(){
    var colorChoosen = $(this).attr("id");
    userClickedPattern.push(colorChoosen);
    $("#"+colorChoosen).fadeOut(100).fadeIn(100);
    playSound(colorChoosen);
    animatePress(colorChoosen);
    chkAns();
})






function nextSequence(){
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);
    var randomNum = Math.floor(Math.random()*4);
    var randomColor = colours[randomNum];
    var colorSelected = $("#"+randomColor) ;
    colorSelected.fadeOut(100).fadeIn(100);
    playSound(randomColor);
    gamePattern.push(randomColor);
}

function playSound(name){
    var audio = new Audio("sounds/" + name+ ".mp3");  
    audio.play();
}

function animatePress(colorpressed){
    $("#"+colorpressed ).addClass("pressed");
    setTimeout(function() {
        $("#"+colorpressed).removeClass("pressed");
    }, 100);
    
}

function chkAns (){
    if(gamePattern[userClickedPattern.length-1] === userClickedPattern[userClickedPattern.length-1]){
        if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
            nextSequence();
          }, 1000);}
    }else {
        playSound("wrong");
        $("#level-title").text("Game Over, Press Any Key to Restart");
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200)
        startOver();

    }
}
function startOver(){
    gamePattern=[];
    level=0;
    started=false;
}