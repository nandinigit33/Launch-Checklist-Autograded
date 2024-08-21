// Write your JavaScript code here!

window.addEventListener("load", function () {
  let listedPlanets;
  // Set listedPlanetsResponse equal to the value returned by calling myFetch()
  let listedPlanetsResponse = myFetch();
  listedPlanetsResponse
    .then(function (result) {
      listedPlanets = result;
      console.log(listedPlanets);
    })
    .then(function () {
      console.log(listedPlanets);
      // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
      let selectedPlanet = pickPlanet(listedPlanets);
      let name = selectedPlanet.name;
      let diameter = selectedPlanet.diameter;
      let star = selectedPlanet.star;
      let distance = selectedPlanet.distance;
      let moons = selectedPlanet.moons;
      let imageUrl = selectedPlanet.image;
      addDestinationInfo(
        document,
        name,
        diameter,
        star,
        distance,
        moons,
        imageUrl
      );
    });
  //document-global variable
  document.addEventListener("submit", function (event) {
    event.preventDefault(); //prevent the default behavior of form submission (page refresh).
    //Input values are retrieved using document.querySelector()
    const pilotName = document.querySelector("input[name=pilotName]").value;
    const copilotName = document.querySelector("input[name=copilotName]").value;
    const fuelLevel = Number(
      document.querySelector("input[name=fuelLevel]").value
    );
    //querySelector-Returns the first element that matches the given CSS selector.
    const cargoMass = Number(
      document.querySelector("input[name=cargoMass]").value
    );
    //getElementById-Returns a reference to the element whose id attribute matches the given string value.
    //The faultyItems element is retrieved using
    const list = document.getElementById("faultyItems");

    //The formSubmission() function is called with input values and the faultyItems element.
    // formSubmission() handles submission, performs validation, and updates shuttle requirements.
    formSubmission(
      document,
      list,
      pilotName,
      copilotName,
      fuelLevel,
      cargoMass
    );
  });
});
