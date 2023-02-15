// JS File for Homework 4: Event Handling
// Luke Abbatessa and Jocelyn Ju
// Last Modified: 01.15.2023


// function to add and remove border on click of a point
function borderClick(ptID) {

	console.log("clicked" + ptID);

	let element = document.getElementById(ptID);

	// display the latest selected point in the right hand column
	let newText = ptID
	let coords = document.getElementById("coord-list");

	coords.innerHTML = newText;

	// upon clicking a point, it will get a border
	// coordinates should show in right column
	// if it already has a border, disappear and remove coordinates
	if (element.classList.contains("stroke")) {
		element.classList.remove("stroke")
	}
	else {
		element.classList.add("stroke")
	}
}

// function to add new points and set their ids
function pointClick() {

	// get the coordinates of the new point from the user's selection
	let xcoords = document.getElementById("x-coords");
	let ycoords = document.getElementById("y-coords");
	let xcoord = Number(xcoords.options[xcoords.selectedIndex].text);
	let ycoord = Number(ycoords.options[ycoords.selectedIndex].text);

	let newptID = "(" + xcoord + ", " + ycoord + ")"

	let container = document.getElementById("cont");
	
	// create the point and set attributes
	let circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	circle.setAttribute("class", "point");
	circle.setAttribute("id", newptID);
	circle.setAttribute("cx", xcoord * 20);
	circle.setAttribute("cy", ycoord * -20 + 200);
	circle.setAttribute("r", 5);
	circle.setAttribute("onclick", "borderClick('" + newptID + "')");
	
	container.appendChild(circle);
}

document.getElementById("subButton").addEventListener("click", pointClick);
