//Popping
const Vehicles = ["BMW", "BENZ", "AUDI", "HONDA"];
  document.getElementById("q12pop").innerHTML = Vehicles;
  Vehicles.pop();
//Pushing
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  document.getElementById("q12push").innerHTML = fruits;

  function myFunction() {
    fruits.push("Kiwi");
    document.getElementById("q12push").innerHTML = fruits;
  }
