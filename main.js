

// works, but only the first one
function borderClick() {
	// upon clicking a point, it will get a boarder
	// coordinates should show in right column
	// if it already has a border, disappear and remove coordinates

	let pts = document.getElementById("pt");

	console.log('got class');

	pts.classList.add("point");

}

document.getElementById("pt").addEventListener('click', borderClick);

// function borderClick() {
// 	// upon clicking a point, it will get a boarder
// 	// coordinates should show in right column
// 	// if it already has a border, disappear and remove coordinates

// 	let pts = document.getElementById("pt");

// 	console.log('got class');

// 	for (let i = 0; i < pts.length; i++) {
// 		pts[i].classList.add("point");
// 		}

// 	}