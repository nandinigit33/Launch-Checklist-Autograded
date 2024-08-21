// Write your helper functions here!

require("cross-fetch/polyfill");

function addDestinationInfo(
  document,
  name,
  diameter,
  star,
  distance,
  moons,
  imageUrl
) {
  // Here is the HTML formatting for our mission target div.
  /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
  const missionTarget = document.getElementById("missionTarget");
  missionTarget.innerHTML = `<h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name}</li>
                     <li>Diameter: ${diameter}</li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance}</li>
                     <li>Number of Moons: ${moons}</li>
                 </ol>
                 <img src="${imageUrl}"></img>`;
}

function validateInput(testInput) {
  if (testInput === "") {
    return "Empty";
  }
  if (isNaN(testInput)) {
    return "Not a Number";
  }
  if (!isNaN(testInput)) {
    return "Is a Number";
  }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  let pilotStatus = document.getElementById("pilotStatus");
  let copilotStatus = document.getElementById("copilotStatus");
  let fuelLevelStatus = document.getElementById("fuelStatus");
  let cargoMassStatus = document.getElementById("cargoStatus");

  let fuelLevelValid = validateInput(fuelLevel);
  let cargoMassValid = validateInput(cargoLevel);

  //let faultyItems or list = document.getElementById("faultyItems");
  let launchStatus = document.getElementById("launchStatus");

  if (pilot === "" || copilot === "" || fuelLevel === "" || cargoLevel === "") {
    alert("All fields are required!");
  } else if (
    pilot === "Is a Number" ||
    copilot === "Is a Number" ||
    fuelLevelValid === "Not a Number" ||
    cargoMassValid === "Not a Number"
  ) {
    alert("Invalid input! Please enter valid information.");
  } else {
    //To update Shuttle Info
    list.style = "visibility: visible";
    //list.style.visibility = "visible";
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;

    if (fuelLevel >= 10000 && cargoLevel <= 10000) {
      launchStatus.innerHTML = "Shuttle is Ready for Launch";
      launchStatus.style.color = "green";
    } else {
      launchStatus.innerHTML = "Shuttle Not Ready for Launch";
      launchStatus.style.color = "red";
    }
    if (fuelLevel < 10000) {
      fuelLevelStatus.innerHTML = "Fuel level too low for launch";
      //list.style.visibility = "visible";
      //launchStatus.innerHTML = "Shuttle Not Ready for Launch";
      //launchStatus.style.color = "red";
    } else {
      fuelLevelStatus.innerHTML = "Fuel level high enough for launch";
    }
    if (cargoLevel > 10000) {
      cargoMassStatus.innerHTML = "Cargo mass too heavy for launch";
      //list.style.visibility = "visible";
      // launchStatus.innerHTML = "Shuttle Not Ready for Launch";
      //launchStatus.style.color = "red";
    } else {
      cargoMassStatus.innerHTML = "Cargo mass low enough for launch";
    }
  }
}

async function myFetch() {
  let planetsReturned;

  planetsReturned = await fetch(
    "https://handlers.education.launchcode.org/static/planets.json"
  ).then(function (response) {
    return response.json();
  });

  return planetsReturned;
}

function pickPlanet(planets) {
  let planetSelected = planets[Math.floor(Math.random() * planets.length)];
  return planetSelected;
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
