function clickCube() {
    var red = getRandomInt(255);
    var green = getRandomInt(255);
    var blue = getRandomInt(255);

    var borderFirst = getRandomInt(7);
    var borderRadiusFirst = getRandomInt(80);

    console.log("#clickCube", red, green, blue, borderFirst, borderRadiusFirst);

    var stringBoxShadow = "0 0 5px rgb(" + red + ", " + green + ", " + blue + ")," +
    "0 0 25px rgba(" + red + ", " + green + ", " + blue + ", 1)," +
    "0 0 50px rgba(" + red + ", " + green + ", " + blue + ", 1)," +
    "0 0 100px rgba(" + red + ", " + green + ", " + blue + ", 1)," +
    "0 0 200px rgba(" + red + ", " + green + ", " + blue + ", 0.5)," +
    "0 0 300px rgba(" + red + ", " + green + ", " + blue + ", 0.5)" ;

    document.getElementById("cube").style.boxShadow = stringBoxShadow;
    document.getElementById("cube").style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")";
    document.getElementById("cube").style.borderRadius = borderRadiusFirst + "px";
    document.getElementById("cube").style.border = borderFirst + "px solid";
}

function getRandomInt (max) {
    return Math.floor(Math.random() * max);
}