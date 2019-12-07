var sumOfWindowDoorAreas = 0;

function addWindowAndDoor() {
	var windowDoorWidth = parseInt(document.getElementById("widthOfWindowDoor").value);
	var windowDoorHeight = parseInt(document.getElementById("heightOfWindowDoor").value);
	var windowDoorWidth2 = parseInt(document.getElementById("widthOfWindowDoor2").value);
	var windowDoorHeight2 = parseInt(document.getElementById("heightOfWindowDoor2").value);
	var windowDoorWidth3 = parseInt(document.getElementById("widthOfWindowDoor3").value);
	var windowDoorHeight3 = parseInt(document.getElementById("heightOfWindowDoor3").value);
	var areaOfWindowDoor = windowDoorWidth * windowDoorHeight + windowDoorWidth2 * windowDoorHeight2 + windowDoorWidth3 * windowDoorHeight3;
	sumOfWindowDoorAreas = parseInt(sumOfWindowDoorAreas) + areaOfWindowDoor;
}

function Calculations() {
	var length = document.getElementById("lengthOfRoom").value;
	var width = document.getElementById("widthOfRoom").value;
	var height = document.getElementById("heightOfRoom").value;

	if (length < 1 || width < 1) {
		document.write("Input not valid" + "<br>");
	} else {
		var areaOfFloor = length * width;
		document.write("The area of the floor equals: " + areaOfFloor + " metres squared" + "<br>");
	}

	if (height > 1) {
		var volumeOfRoom = areaOfFloor * height;
		document.write("The volume of the room equals: " + volumeOfRoom + " metres cubed" + "<br>");
	}

	if (length > 1 || width > 1 || height > 1){
		var sum = parseInt(length) + parseInt(width);
		var amountOfPaint = ((sum * height) * 2) - parseInt(sumOfWindowDoorAreas);
		document.write("The amount of paint needed based on 10 metres squared per litre of paint: " + amountOfPaint);
	}
}

