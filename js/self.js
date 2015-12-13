window.onload = function(){

	var questionArea = document.getElementById("questionArea");
	var questionInput = document.getElementById("inputQ");
	var submitQBtn = document.getElementById("submitQ");
	submitQBtn.addEventListener( "click", insertQ, false );
	
	function insertQ() {
		questionArea.innerHTML += "<p>" + questionInput.value + "</p>";
	}
	
	//
	
	var animalSound = document.getElementById("animal-sound");
	var soundBtn = document.getElementById("audio-icon");
	soundBtn.addEventListener( "click", audioPlay, false );
	
	function audioPlay() {
		alert("this should play a cat sound");
		animalSound.play();
		alert("ended");
	}
	
}();