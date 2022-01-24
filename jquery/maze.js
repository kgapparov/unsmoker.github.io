$(document).ready(function () {
   var gameStarted = false;
   var colored = false; 
   var result = true;
   $(".boundary").hover(function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        setColor();     
       }
   );
   $("#end").hover(function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        getResult() 
   }
   );
   $(document).bind("keypress", function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        if (e.which == 115) {
            startEndGame()
        }
   });

   $("#start").click(function (e) { 
       e.preventDefault();
       e.stopImmediatePropagation();
        startEndGame();
   });
   function setColor(){
        if (gameStarted && !colored) {
            $(".boundary").addClass("youlose");
            result = false;
            colored = true;
        }
   }

   function startEndGame() {
        if (gameStarted) {
            gameStarted = false;
        } else {
            gameStarted = true;
        }
   }
   function getResult() {
        if (gameStarted && result) {
            alert("You win! :] ");
            gameStarted = false;
        } else if (gameStarted && !result) {
            alert ("You lost!");
            gameStarted = false;
        }
   }
});