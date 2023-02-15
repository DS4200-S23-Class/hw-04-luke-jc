
// JS File for Homework 4: Event Handling
// Luke Abbatessa and Jocelyn Ju
// Last Modified: 01.15.2023


// function to add and remove border on click of a point
function borderClick(ptID) {

	console.log('clicked' + ptID);

	let element = document.getElementById(ptID);

	// display the latest selected point in the right hand column
	let newText = ptID
	let coords = document.getElementById('coord-list');

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
