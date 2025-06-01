/*
AUTHOR: Ryan Storm
*/


function drawGeoLines() {
    
    	// Grab the tag and set the context
        var quad1 = document.getElementById("canvas");
        var context1 = quad1.getContext("2d");
        
        // First quadrant variables
        var x1 = 405;
       	var y1 = 0;
       	
       	// Second quadrant variables
       	var x2 = 395;
       	var y2 = 0;

       	// Third quadrant variables
       	var x3 = 405;
       	var y3 = 600;

       	// Fourth quadrant variables
       	var x4 = 395;
       	var y4 = 600;
       	

       // Draw the first quadrant lines
       for(var i=0; y1 < 295; i++) {

       	context1.beginPath();
        context1.moveTo(405,y1);
        context1.lineTo(x1, 295);
        context1.strokeStyle = "#696969";
        context1.lineWidth = 0.25;
        context1.stroke();
        x1+=4;
        y1+=4;

       }
       
       // Draw the second quadrant lines
       for(var i=0; y2 < 295; i++) {
       	context1.beginPath();
       	context1.moveTo(395, y2);
       	context1.lineTo(x2, 295);
       	context1.strokeStyle = "#000000";
       	context1.lineWidth = 0.25;
       	context1.stroke();
       	x2-=4;
       	y2+=4;

       }

       // Draw the third quadrant lines
       for(var i=0; y3 > 305; i++) {
       	context1.beginPath();
       	context1.moveTo(405, y3);
       	context1.lineTo(x3, 305);
       	context1.strokeStyle = "#000000";
       	context1.lineWidth = 0.25;
       	context1.stroke();
       	x3+=4;
       	y3-=4;

       }

       // Draw the fourth quadrant lines
       for(var i=0; y4 > 305; i++) {
       	context1.beginPath();
       	context1.moveTo(395, y4);
       	context1.lineTo(x4, 305);
       	context1.strokeStyle = "#696969";
       	context1.lineWidth = 0.25;
       	context1.stroke();
       	x4-=4;
       	y4-=4;

       }
    
	
}



