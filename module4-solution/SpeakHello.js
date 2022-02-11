
(function (window) {

	var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

	var helloSpeaker = {};

	var speakWord = "Hello";

	helloSpeaker.speak = function (name) {
  		console.log(speakWord + " " + name);
	}
	
	window.helloSpeaker = helloSpeaker;

})(window);