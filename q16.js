function array2(){
  const foods = ["rice", "pizza", "sandwich", "rolls"];
    for (let i = 0; i <4; i++)
      foods.pop("rolls");
      document.getElementById("pop").innerHTML = foods;
      foods.push("cake");


      document.getElementById("push").innerHTML = foods;
}
