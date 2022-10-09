// random value generated
  var y = Math.floor(Math.random() * 10 + 1);
  player_name=localStorage.getItem("player_name");
  var guess=1;

  function submit(){
   var x = document.getElementById("guessField").value;
   if(x==y){
    alert("Congratulations!!"+player_name+"You guessed it right in "+ guess+"guess");
    guess=1;
   }
   else if(x>y){
    guess++;
    alert("Oops sorry! Try a smaller number");
   }
   else{
    guess++;
    alert("Oops sorry! Try a greater number");
   }
  }
 function playagain(){
    y = Math.floor(Math.random()* 10+1);
 }

// counting the number of guesses
// made for correct Guess

  
// function for number guessed by user     
