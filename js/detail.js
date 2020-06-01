



// get url parameters
var urlParams = new URLSearchParams(window.location.search);
var id = urlParams.get('id');
var accessToken = "3436617196389496"
var url ="https://www.superheroapi.com/api.php/" + accessToken +"/" +id;

// after getting id from url call api to get details of given hero and create dynamic html elements 
fetch(url).then((res) => {return res.json()} ).then(function(data){ 

   var ulcontainer = document.querySelector("#ul-contain");
   var name = document.querySelector("#name");
   name.innerText = data.name;
   var imgcontain = document.querySelector("#img-contain");
   var imgcontain= imgcontain.appendChild(document.createElement("img"));
   imgcontain.setAttribute("src",data.image.url);
   var intelligence = document.querySelector("#intell");
   var strength = document.querySelector("#stren");
   var speed = document.querySelector("#speed");
   var durability = document.querySelector("#dur");
   var power = document.querySelector("#pow");
   var combat = document.querySelector("#comb");
   intelligence.innerText = data.powerstats.intelligence;
   strength.innerText = data.powerstats.strength;
   speed.innerText = data.powerstats.speed;
   durability.innerText = data.powerstats.durability;
   power.innerText = data.powerstats.power;
   combat.innerText = data.powerstats.combat;
   var firstname = document.querySelector("#fn");
   var alterego = document.querySelector("#AE");
   var publisher = document.querySelector("#pub");
   var placeofbirth = document.querySelector("#pob");
   var firstappearence = document.querySelector("#fa");

   firstname.innerText = data.biography["full-name"];
   alterego.innerText = data.biography["alter-egos"];
   publisher.innerText = data.biography["publisher"];
   placeofbirth.innerText = data.biography["place-of-birth"];
   firstappearence.innerText = data.biography["first-appearence"];
 



});

