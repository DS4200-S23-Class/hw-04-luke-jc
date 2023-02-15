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

function pointClick() {
	let svgns = "http://www.w3.org/2000/svg", 
		container = document.getElementById("cont");

	let xcoords = document.getElementsByName("x-coords");
	let ycoords = document.getElementsByName("y-coords");

	for (let i = 0; i < xcoords.length; i++) {
		for (let j = 0; j < ycoords.length; j++) {
			if (xcoords[i].checked && ycoords[j].checked) {

				console.log(xcoords[i].value);
				console.log(ycoords[j].value);

				let circle = document.createElementNS(svgns, 'circle');
				// circle.setAttributeNS(null, 'class', 'point');
				// circle.setAttributeNS(null, 'id', '(' + String(vals[i].value) + ', ' + String(vals[j].value) + ')');
				circle.setAttributeNS(null, 'cx', (xcoords[i].value * 20));
				circle.setAttributeNS(null, 'cy', ((ycoords[j].value * -20) + 200));
				circle.setAttributeNS(null, 'r', 5);
				// circle.setAttributeNS(null, 'onclick', borderClick('(' + String(vals[i].value) + ', ' + String(vals[j].value) + ')'));
				container.appendChild(circle);
			}
		}
	}
}

document.getElementById("subButton").addEventListener('click', pointClick);
