function max(){
  const num = [1, 3, 5,7,11,14,19,21];
  var i = 0;
  var max = 0;
  var min = num[0];
  let count = num.length;
  while (i < count) {
      if (num[i]>max) {
        max=num[i];
      }
      i++;
  }
  document.getElementById("q13_max").innerHTML= max;
  while (i < count) {
      if (num[i]<min) {
        min=num[i];
      }
      i++;
  }
  document.getElementById("q13_min").innerHTML= min;
}
