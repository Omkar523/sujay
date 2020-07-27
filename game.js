var tamplate=["red","blue","green","yellow"]
var computerGen=[]
var userGen=[]
var level=0
var start=false

//start

// $(document).keypress(keyP)
//     function keyP(event) 
//     {
//         var keypressed=(event.key)
     
    
//         if(start==false)
//         {
            
//                 start=true
//                 setTimeout(function () {
//                     randomSequence()
//                     }, 1000); 
               
//         }
 
//     }

$("#start").click(keyP)
   function keyP() 
    {
      
                start=true
                setTimeout(function () {
                    randomSequence()
                    }, 1000); 
                    $("#start").hide()
        
 
    }


//sequence generator for computer
function randomSequence()
{
    $("#level-title").text("Level " + level);
    userGen=[]
    level++
    var randomNum =Math.floor(Math.random()*4)
    randomCol=tamplate[randomNum]
    computerGen.push(randomCol)
    displaySeq(randomCol)
  
}

//show sequence to user
function displaySeq(ran) 
{
    
    
    if(ran==="red")
    {
        var audio = new Audio('sounds/red.mp3')
        audio.play()
        $("#red").addClass("pressed");
        setTimeout(function () {
          $("#red").removeClass("pressed");
        }, 100);
    }
    else if (ran==="blue") 
    {
        var audio = new Audio('sounds/blue.mp3')
        audio.play()
        $("#blue").addClass("pressed");
        setTimeout(function () {
          $("#blue").removeClass("pressed");
        }, 100);
    }
    
    else if (ran==="yellow") 
    {
        var audio = new Audio('sounds/yellow.mp3')
        audio.play()
        $("#yellow").addClass("pressed");
        setTimeout(function () {
          $("#yellow").removeClass("pressed");
        }, 100);
    }
    
    else if (ran==="green") 
    {
        
            var audio = new Audio('sounds/green.mp3')
            audio.play()
            $("#green").addClass("pressed");
            setTimeout(function () {
              $("#green").removeClass("pressed");
            }, 100);
          
    } 
  

}



//take user sequence
    $(".btn").click(mouseC)
    
     function mouseC () 
    { 
        var buttonInnerhtml=this.id
        userGen.push(buttonInnerhtml)
        if(buttonInnerhtml==="red")
        {
            var audio = new Audio('sounds/red.mp3')
            audio.play()
            $("#red").addClass("pressed");
            setTimeout(function ()
            {
            $("#red").removeClass("pressed");
            }, 100);
           
            }
            else if (buttonInnerhtml==="blue") {
                var audio = new Audio('sounds/blue.mp3')
                audio.play()
                $("#blue").addClass("pressed");
                setTimeout(function () {
                $("#blue").removeClass("pressed");
                }, 100);
               
            }

            
            else if (buttonInnerhtml==="yellow") {
                var audio = new Audio('sounds/yellow.mp3')
                audio.play()
                $("#yellow").addClass("pressed");
                setTimeout(function () {
                $("#yellow").removeClass("pressed");
                }, 100);
           
            }
            
            else if (buttonInnerhtml==="green") {
                
                    var audio = new Audio('sounds/green.mp3')
                    audio.play()
                    $("#green").addClass("pressed");
                    setTimeout(function () {
                    $("#green").removeClass("pressed");
                    }, 100);
          
                }
                setTimeout(function ()
                {
                    checkAns(userGen.length-1)
                }, 101);
                
                
            } 


//check user input with computer gen
function checkAns(currentlevel)
{
    if(computerGen[currentlevel]===userGen[currentlevel])
    {
        if(computerGen.length===userGen.length)
        {
            setTimeout(function () {
            randomSequence()
            }, 1000); 
        }
    }
   
    else
    var audio = new Audio('sounds/wrong.mp3')
        audio.play()
    $("body").addClass("game-over");
    

    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
        userGen=[]
        computerGen=[]
        $("#level-title").text("Itlech Jamta? Shii Failed on Level : "+level)
        level=0
        setTimeout(function () {
            start=false;
            }, 1000); 
            $("#start").show().text("Restart")
        
    }


            
    
