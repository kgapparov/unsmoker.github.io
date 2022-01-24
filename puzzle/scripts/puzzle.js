"use strict"
$(document).ready(function () {
    var init = function() {
        var puzzleArea = document.getElementById('puzzlearea');
        var divs = puzzleArea.getElementsByTagName("div");
          
        // initialize each piece
        for (var i=0; i< divs.length; i++) {
            var div = divs[i];
            
            // calculate x and y for this piece
            var x = ((i % 4) * 100) ;
            var y = (Math.floor(i / 4) * 100) ;
    
            // set basic style and background
            div.className = "puzzlepiece";
            div.style.left = x + 'px';
            div.style.top = y + 'px';
            div.style.backgroundImage = 'url("./background.jpeg")';
            div.style.backgroundPosition = -x + 'px ' + (-y) + 'px';
            
            // store x and y for later
            div.x = x;
            div.y = y; 
        }        
    };
    //check if piece is movable
    var movable  = function (elem) {
        let distanceX = Math.abs(elem.x - empty.x);
        let distanceY = Math.abs(elem.y - empty.y);
        return (distanceX + distanceY == 100);
    }
    //move element 
    var moveTo = function(elem, x, y) {
        if (movable(elem)) {
            empty.x = elem.x; 
            empty.y = elem.y
            elem.style.left = x + 'px';
            elem.style.top = y + 'px';
            elem.x = x; 
            elem.y = y;
            return true;
        }
        return false;
    }
    

    let newAvalablePosition = function() {
        //directions of 4 neighbors 
        let directions =  [[1,0], [0, -1], [-1, 0], [0, 1]];
        let isFound = false; 
        while (!isFound) {
            let index = Math.floor(Math.random()*4);
            let newX = directions[index][0]*100 + empty.x;
            let newY = directions[index][1]*100 + empty.y;
            if (newX >= 0 && newY >= 0 && newX <=300 && newY <=300) {
                isFound = true;
                return {
                    x: newX,
                    y: newY
                }
            }
        }
    }

    let shuffleOne = function () {
        let coords = newAvalablePosition();
        $("#puzzlearea div").each(function(){
            if (this.x == coords.x && this.y == coords.y) {
                moveTo(this, empty.x, empty.y);
            }
        })
    }
    var empty = {x: 300, y: 300};
    //init;
    init();
    
    $("#puzzlearea div").hover(function () {
            // over
            if (movable(this)) {
                $(this).addClass("movablepiece");
                newAvalablePosition();
            }
        }, function () {
            $(this).removeClass("movablepiece");
        }
    );
    $("#puzzlearea div").click(function (e) { 
        e.preventDefault();
        if (movable(this)) {
            moveTo(this, empty.x, empty.y);
        }
    });
    $("#shufflebutton").click(function (e) { 
        e.preventDefault();
        for(let i = 0; i < 100; ++i) {
            setTimeout(shuffleOne, 500);
        }
    });
});