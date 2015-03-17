var compare = function(choice1, choice2) {
    
    
    if(choice1==="rock"){
     if (choice2==="paper"){
         return "paper wins"
     }
     if (choice2==="scissors"){
         return "rock wins"
     }
    }
    
     else if(choice1==="paper"){
     if (choice2==="rock"){
         return "paper wins"
     }
     if (choice2==="scissors"){
         return "scissors wins"
     }
    }
    
    else if(choice1==="scissors"){
     if (choice2==="rock"){
         return "rock wins"
     }
     if (choice2==="paper"){
         return "scissors wins"
     }
    }

    
}

var randomChoice=function(){
   var randomNr= Math.random();
   if (randomNr < 0.34) {
	var choice = "rock";
} else if(0.34<=randomNr < 0.67) {
	var choice = "paper";
} else {
	var choice = "scissors";
} 
return choice
}


var askUser=function(){
 return    prompt("do you choose rock, paper or scissor?")
}

var computerChoice=randomChoice()
console.log(computerChoice)
var userChoice=askUser()
console.log(userChoice)


while(userChoice===computerChoice){
    computerChoice=randomChoice()    
    console.log(computerChoice)
    var userChoice=askUser()
    console.log(userChoice)
}
    
compare(userChoice,computerChoice)

