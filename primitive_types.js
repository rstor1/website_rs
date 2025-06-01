

function circleStitch () {

	// Attributes of polyCircle object
	var centerX = 200,
	    centerY = 200,
	    radius  = 150,
	    width   = 0.25,
	    xCoord,yCoord;
		this.coordsArr = new Array();
		var ctx, color;

	// Methods of polyCircle object	
	this.drawCircleStitch = function(canvasId) {

		// Switch statement will grab the corresponding canvasId and set the context of that particular object
		switch(canvasId) {
			case c1:
			ctx = document.getElementById('c1').getContext('2d');
			color = "#404bff";
			break;
			case c2:
			ctx = document.getElementById('c2').getContext('2d');
			color = "#000000";
			break;


		}

	    
	    //ctx.rotate(50*Math.PI/180);
      	var angle;
      	var beginIndex = 0; // Beginning index for lines
      	var endIndex = 36; // Ending index for lines
      
      // First draw points
      for ( var i = 0; i < 180; i+=3 )
      {
        angle = 2.1 + (i * Math.PI / 90);
        ctx.beginPath();
        // Get x, y coordinates
          xCoord = centerX + Math.sin(angle) * radius;
          yCoord = centerY + Math.cos(angle) * radius;
        ctx.moveTo(xCoord, yCoord);

        // Store the coordinates
        this.storeCoordinates(xCoord, yCoord, this.coordsArr);

        ///*
        if(i == 39 || i == 42 || i == 45 || i == 48 || i == 63 || i == 66 || i == 69 || i == 72 || i == 75 ||
         i == 105 || i == 108 || i == 111 || i == 114 || i == 129 || i == 132 || i == 135 || i == 138) {
        	// manipulate width to draw a small leg
        	width = 50;
        	ctx.lineWidth = 0.25;
       		ctx.lineTo(
	          centerX + Math.sin(angle) * (radius + width),
	          centerY + Math.cos(angle) * (radius + width)
	        );
	        width = 0.25;
        }

        if(i == 0 || i == 177) {
        	        	// manipulate width to draw a small leg
        	width = 90;
        	ctx.lineWidth = 0.25;
       		ctx.lineTo(
	          centerX + Math.sin(angle) * (radius + width),
	          centerY + Math.cos(angle) * (radius + width)
	        );
	        width = 0.25;
        }
        //*/
        
        ctx.lineTo(
          centerX + Math.sin(angle) * (radius + width),
          centerY + Math.cos(angle) * (radius + width)
        );
        ctx.strokeStyle = color;
        ctx.closePath();
        ctx.stroke();
        
      }

      // Method to draw lines based on coordinate points stored in the coordinate array
      for (var i = 0; i < this.coordsArr.length; i++) {
      	if (endIndex == this.coordsArr.length - 1) {break;} // Break out when we hit last index
      	ctx.beginPath();
      	ctx.moveTo(this.coordsArr[beginIndex], this.coordsArr[++beginIndex]);
      	ctx.lineTo(this.coordsArr[endIndex], this.coordsArr[++endIndex]);
      	ctx.strokeStyle = color;
      	ctx.lineWidth = 0.25;
      	ctx.closePath();
      	ctx.stroke();
      	++beginIndex;
      	++endIndex;
      }

    }

    // Method to store coordinates in an array
    this.storeCoordinates = function(x, y, array) {

		array.push(x);
		array.push(y);
    }

    // Method to see array contents
    this.printArray = function() {

    	document.write(this.coordsArr);

    }
    

}






