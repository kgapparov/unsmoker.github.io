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

   $("#maze").hover(function () {
           // over
           
       }, function () {
            if (gameStarted) {
                setColor();
            }
       }
   );
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
            $("h2").text("The game is Started");
            $(".boundary").removeClass("youlose");
            colored = false;
            result = true;
        }
   }
   function getResult() {
        if (gameStarted && result) {
            $("h2").text("You win! :]");
            gameStarted = false;
        } else if (gameStarted && !result) {
            $("h2").text("You lost! :( ");
            gameStarted = false;
        }
   }
});