
(function (window) {
	var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  	var byeSpeaker = {};


	var speakWord = "Good Bye";

	byeSpeaker.speak = function (name) {
  		console.log(speakWord + " " + name);
	}

	window.byeSpeaker = byeSpeaker;

})(window);
