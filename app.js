function changeRed() {
    document.getElementById("circle").style.backgroundColor = "red";
 }
 function changeGreen() {
    document.getElementById("circle").style.backgroundColor = "green";
 }
 function changeYellow() {
    document.getElementById("circle").style.backgroundColor = "yellow";
 }
 function changeRandom() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    console.log(bgColor);

    document.getElementById("circle").style.backgroundColor = bgColor;
 }