
//Arrow function to be used when the document loads
$(document).ready(() => {

$('#buyBtn1').on('submit', (e) =>{
  let info  = $('#userdata').val();
  getInfo(info);
  e.preventDefault();
});
});
//creating objexts needed for the webpage
var planets = [
{
	name: "mercury",
	image:"img/mercury.png",
	about: "The first planet of the solar system and the closest to the sun \
	also is the fastest runner."
},
{
    name: "venus",
	image: "img/venus.png",
	about: "Venus is the second planet from the Sun and is the second brightest\
	 object in the night sky after the Moon. Named after the Roman goddess\
	  of love and beauty."
},
{
    name: "mars",
	image: "img/mars.png",
	about: "Mars is the fourth planet from the Sun and last of the terrestrial\
	 planets and is around 227,940,000 km from the Sun. "
},
{
	 name: "earth",
	image: "img/earth.png",
	about: "Earth is the third planet from the Sun and is the largest of the \
	terrestrial planets. The Earth is the only planet in our solar system not\
	 to be named after a Greek or Roman deity. The Earth was formed \
	 approximately 4.54 billion years ago and is the only known planet \
	 to support life."
},
{
	 name: "jupiter",
	image: "img/jupiter.png",
	about: "The planet Jupiter is the fifth planet out from the Sun, \
	and is two and a half times more massive than all the other planets\
	 in the solar system combined"
},
{
	 name: "uranus",
	image: "img/uranus.png",
	about: "Uranus is the seventh planet from the Sun. While being visible\
	 to the naked eye, it was not recognised as a planet due to its dimness\
	  and slow orbit."
},
{
	 name: "neptune",
	image: "img/neptune.png",
	about: "Neptune is the eighth planet from the Sun and last of the known\
	 planets. While it is the third largest planet with respect to mass, it\
	  is only the fourth largest in terms of diameter. Due to its blue \
	  coloration, Neptune was named after the Roman god of the Sea."
},
{
	 name: "pluto",
	image: "img/pluto.png",
	about: "Pluto is named after the Greek god of the underworld. Pluto \
	was reclassified from a planet to a dwarf planet in 2006. Pluto was\
	 discovered on February 18th, 1930 by the Lowell Observatory. Pluto \
	 has five known moons. Pluto is the largest dwarf plane"
},
{
	 name: "saturn",
	image: "img/saturn.png",
	about: "Saturn is the sixth planet from the Sun and the most distant\
	 that can be seen with the naked eye. Saturn is the second largest \
	 planet and is best known for its fabulous ring system that was first\
	  observed in 1610 by the astronomer Galileo Galilei. Like Jupiter,\
	   Saturn is a gas giant and is composed of similar gasses including\
	    hydrogen, helium and methane."
}
];
//setting up a function to get the users input and save in the console
function getInfo() {
 var userInput = document.getElementById('userdata').value;
 //console.log(userInput);
 //console.log("users value is: " + userInput);
  // setting up a for loop to call the data
  for(var i = 0; i < planets.length; i = i + 1) {
  	//equalizing the user input value with the computer language
  	//console.log("users value lowercase is: " + userInput.toLowerCase());
 //printing the value of users input command
   //console.log("current planet in the loop is: " + planets[i].name);
  //creating a if statement to compare
  if(userdata.value.toLowerCase() === planets[i].name) {
  /*	//to confirm if statement ran
  	console.log("if statement ran");

  	//to check some of the values in the console before updating HTML
  	console.log("users typed in: " + userInput);
  	console.log("current image is: " + planets[i].image);
  	console.log("current info value is: " + planets[i].about);
*/
// to get the element with id="planetName"
document.getElementById("planetName").textContent = userInput;

//to get the element with id="image" and cchange the source attribute to current planet image
document.getElementById("photo").src = planets[i].image;

//to get the element with id="info" and cjhange the content to the following statement
document.getElementById("info").textContent = planets[i].about;
 //stop the function after finding the data and displaying it
return;
  } 
 //to confirm when no match is found
 // console.log("no matches were found,user failed to type in correct planet name");
  //if no match is found, do opposite of the function stated above
  document.getElementById("planetName").textContent = "No Planet Found. Try again";
  document.getElementById("info").textContent = "";
  document.getElementById("photo").src = "img/galaxy.jpg";
 };
};