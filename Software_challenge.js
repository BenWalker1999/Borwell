/* This function get any entered door and window heigh/widths from the html document, if nothing is entered then it sets the variable to zero */
function addWindowAndDoor() {
	var windowDoorWidth = parseInt(document.getElementById("widthOfWindowDoor").value);
	if (isNaN(windowDoorWidth)){
		windowDoorWidth = 0;
	}
	var windowDoorHeight = parseInt(document.getElementById("heightOfWindowDoor").value);
	if (isNaN(windowDoorHeight)){
		windowDoorHeight = 0;
	}
	var windowDoorWidth2 = parseInt(document.getElementById("widthOfWindowDoor2").value);
	if (isNaN(windowDoorWidth2)){
		windowDoorWidth2 = 0;
	}
	var windowDoorHeight2 = parseInt(document.getElementById("heightOfWindowDoor2").value);
	if (isNaN(windowDoorHeight2)){
		windowDoorHeight2 = 0;
	}
	var windowDoorWidth3 = parseInt(document.getElementById("widthOfWindowDoor3").value);
	if (isNaN(windowDoorWidth3)){
		windowDoorWidth3 = 0;
	}
	var windowDoorHeight3 = parseInt(document.getElementById("heightOfWindowDoor3").value);
	if (isNaN(windowDoorHeight3)){
		windowDoorHeight3 = 0;
	}
	/* Creates a global variable called areaOfWindowDoor, this variable calculates the sum of the window/door areas */
	window.areaOfWindowDoor = windowDoorWidth * windowDoorHeight + windowDoorWidth2 * windowDoorHeight2 + windowDoorWidth3 * windowDoorHeight3;

}
/* This function first gets the entered length, width and height of the room from the html document */
function Calculations() {
	var length = document.getElementById("lengthOfRoom").value;
	var width = document.getElementById("widthOfRoom").value;
	var height = document.getElementById("heightOfRoom").value;
	/* This maths sets it so that if the length or width of each wall entered is less than 1 then it says input is not valid, else wise if the values are over 1 then the area of the floor
	is worked out by multiplying the length by the width */
	if (length < 1 || width < 1) {
		document.write("Input not valid" + "<br>");
	} else {
		var areaOfFloor = length * width;
		document.write("The area of the floor equals: " + areaOfFloor + " metres squared" + "<br>");
	}
	/* This sets it so that the height entered has to be greater than 1, the volume of the room is then worked out by multiplying the already worked out area of the floor by the height */
	if (height > 1) {
		var volumeOfRoom = areaOfFloor * height;
		document.write("The volume of the room equals: " + volumeOfRoom + " metres cubed" + "<br>");
	}
	/* This works out the amount of paint required for the room, the length and width added together are put into a variable called sum, this sum is then multiplied by the height which is
	 then multiplied by 2, the sum of the window/door areas is then subtracted from this.*/
	if (length > 1 || width > 1 || height > 1){
		var sum = parseInt(length) + parseInt(width);
		var amountOfPaintRequired = ((sum * parseInt(height)) * 2) - areaOfWindowDoor;
		document.write("The amount of paint needed based on 10 metres squared per litre of paint: " + amountOfPaintRequired);
	}
}

