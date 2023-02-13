



function borderClick(ptID) {
	// upon clicking a point, it will get a border
	// coordinates should show in right column
	// if it already has a border, disappear and remove coordinates
	console.log('click');

	let element = document.getElementById(ptID);


	if (element.classList.contains("stroke")) {
		element.classList.remove("stroke")
	}
	else {
		element.classList.add("stroke")
	}
}

