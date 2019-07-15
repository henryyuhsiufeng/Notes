
var exercise = Number(prompt("Select the exercise of your choosing:"+
 "1 for intro, 2 for JS STALKER, 3 for AGE CALCULATOR, 4 for SIMPLE GUESSING GAME,"+
 " 5 for annoy-o-matic, 6 for score representation, 7 for mouseover event demonstration"));



/*INTRODUCTION EXERCISE */
if(exercise === 1){
    alert("INTRODUCTION EXERCISE");
    var userName = prompt("what is your name?");
    alert("Nice to meet you, "+userName);
    /*use console.log can aid in finding bugs */
    console.log("Also great yo meet you, "+userName);
}


/************    JS STALKER EXERCISE    ******************/
else if(exercise === 2){
    alert("JS STALKER EXERCISE");
    console.log("From the script file");
    var firstName = prompt("What is your first name?");
    var lastName = prompt("What is your last name?");
    var age = prompt("What is your age?");
    
    var fullName = firstName + " " + lastName;
    
    console.log("Your full name is "+ fullName);
    console.log("You are " + age + " years old");
}

/************   AGE CALCULATOR EXERCISE (Estimates Leap Year as well)  ************/
else if(exercise === 3){
    var age = prompt("What is your age?");
    var days = age * 365.25;
    alert(age + " years is roughly "+days + " days");
}

/************    SIMPLE GUESSING GAME EXERCISE    ******************/
else if (exercise === 4){
    //create secretNumber
    var secretNumber = 4;

    //ask user for guess
    var guess = Number(prompt("Guess a number"));

    //check if guess is right
    if(guess === secretNumver){
        alert("You guessed the secretNumber");
    }

    //Otherwise
    else if(guess > secretNumber){
        alert("Too high. Guess again!")
    }
    else {
        alert("Too low. Guess again!");
    }
}

/************    SIMPLE GUESSING GAME EXERCISE    ******************/
else if(exercise === 5){
    var answer = prompt("are we there yet?");

    while(answer.indexOf("yes")===-1){
         answer = prompt("are wer there yet?");
    }
    alert("YAY, WE MADE IT!!!");
}

/************    Rock Paper Scissor   ******************/
else if(exercise === 6){
    var p1Button = document.querySelector("#p1");
    var p2Button = document.getElementById("p2");
    var resetButton = document.getElementById("reset");
    var p1Display = document.querySelector("#p1Display");
    var p2Display = document.querySelector("#p2Display");
    var numInput = document.querySelector("input[type='number']");
    var playToScore = document.getElementById("playTo");
    var p1Score = 0;
    var p2Score = 0;
    var gameOver = false;
    var winningScore = 5; 

    p1Button.addEventListener("click",function(){
        if(!gameOver){
            p1Score++;
            if(p1Score === winningScore){
                p1Display.classList.add("winner");
                gameOver = true; 
            }
            p1Display.textContent = p1Score; 
        }
    });

    p2Button.addEventListener("click",function(){
        if(!gameOver){
            p2Score++;
            if(p2Score === winningScore){
                p2Display.classList.add("winner");
                gameOver = true; 
            }
            p2Display.textContent = p2Score; 
        }
    });

    //
    resetButton.addEventListener("click",function(){
       reset();
    })

    function reset(){
        p1Score = 0;
        p2Score = 0;
        p1Display.textContent = p1Score; 
        p2Display.textContent = p2Score; 
        p1Display.classList.remove("winner");
        p2Display.classList.remove("winner");
        gameOver = false;
    }

    numInput.addEventListener("change", function(){
        //without ".value" it will numInput will just return the html 
        playToScore.textContent = numInput.value;
        winningScore = Number(numInput.value);
        reset();
    });
}

else if(exercise === 7){
    var lis = document.querySelectorAll("li");
    for(var i = 0;i<lis.length;i++){
        lis[i].addEventListener("mouseover",function(){
            this.classList.add("selected");
        });
        lis[i].addEventListener("mouseout",function(){
            this.classList.remove("selected");
        });
        lis[i].addEventListener("click", function(){
            this.classList.toggle("done");
        });
    }

}


