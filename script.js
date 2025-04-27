
function startSite() {
	
	console.log("startSite function called.") //DEBUGGING LINE
	
	window.scrollTo(0, 0);
    
    var header = document.getElementById("sullys-welcome");

    header.classList.add("slideIn");
}



function toggleNavMenuIcon () {
	
	console.log("box menu icon function called.") //DEBUGGING LINE
	
	let menuIcon = document.getElementById('boxMenuIcon')
	let navBar = document.getElementById('navbar')
	
		menuIcon.onclick = function () {
			
			menuIcon.classList.toggle('bx-x');
			navBar.classList.toggle('nav-active');
		};
}




function portfolioCarousel() {}



    window.onload = function() {
		startSite();
		toggleNavMenuIcon();
    } ;
