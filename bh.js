/*
Code referenced and modified from: http://stackoverflow.com/questions/6824391/drawing-a-spiral-on-an-html-canvas-using-javascript
*/


function DrawSpiral(mod) {
    var c = document.getElementById("myCanvas");
    var cxt = c.getContext("2d");
    var centerX = 550;
    var centerY = 300;
    var radius = 10;

    cxt.save();
    cxt.clearRect(0, 0, c.width, c.height);

    cxt.beginPath();
    cxt.moveTo(centerX, centerY);

    var STEPS_PER_ROTATION = 60;
    var increment = 2 * Math.PI / STEPS_PER_ROTATION;
    var theta = increment;

    while (theta < 80 * Math.PI) {
        var newX = centerX + theta * Math.cos(theta + mod) * radius;
        var newY = centerY + theta * Math.sin(theta + mod) * radius;
        cxt.lineTo(newX, newY);
        cxt.strokeStyle = "#7f7f7f";
        cxt.lineWidth = 10;
        theta = theta + increment; // +2 gives the weird triangle
    }
    cxt.stroke();
    cxt.restore();
}

var counter = 0;
setInterval(function () {
    DrawSpiral(counter);
    counter += 0.075; 
}, 10);



// Prevent user from going back from black hole
window.location.hash="no-back-button";
window.location.hash="Again-No-back-button";//again because google chrome don't insert first hash into history
window.onhashchange=function(){window.location.hash="no-back-button";}


