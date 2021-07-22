function squareMyNumber() {
    var x, y;
   x = document.getElementById("myNumber").value;
   y = x * x;
    document.getElementById("answer").innerHTML = "Square of "+ x +" is =" + y;
}

function clr() {

    document.getElementById("myNumber").value = "";
    document.getElementById("answer").innerHTML = "";

}
