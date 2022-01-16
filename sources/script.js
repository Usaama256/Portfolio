//Simple colors
const simple = ['red', 'green', 'black', 'blue', 'yellow', 'hsl(205, 78%, 60%)', 'rgb(133, 126, 32)'];
//Characters for generating Hex colors
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

//Creating HTML Elements to communicate with
const btnSimple = document.querySelector('.navLinks .simple');
const btnHex = document.querySelector('.navLinks .hex');
const btnChangeColor = document.querySelector('.btnChangeColor');
const colorNameHolder = document.getElementById('color');

var hexFlag = false; //Controls Current selection whether hex or simple
btnSimple.style.border = '1px solid black'; //By default, simple is selected

//click listener for button 'simple'. hexflag is false, selection is changed 
btnSimple.addEventListener('click', () => {
    hexFlag = false;
    btnSimple.style.border = '1px solid black';
    btnHex.style.border = null;
})

//click listener for button 'hex'. hexflag is true, selection is changed
btnHex.addEventListener('click', () => {
    hexFlag = true;
    btnSimple.style.border = null;
    btnHex.style.border = '1px solid black'
})

//click listener for changing color
btnChangeColor.addEventListener('click', () => {
    if (hexFlag) {
        var color = onHex(hex); //color fetched from onHex function
        colorNameHolder.textContent = color; //Displaying color name
        document.body.style.backgroundColor = color; //Displaying color in background
    } else {
        var color = onSimple(simple); //color fetched from onSimple function
        colorNameHolder.textContent = color; //Displaying color name
        document.body.style.backgroundColor = color; //Displaying color in background
    }
})

//Returns a color from the simple color array randomly
const onSimple = (colorArray) => {
    return colorArray[getRandomNum(colorArray.length)];
}

//Returns Hex color
const onHex = (colorArray) => {
    var hexColor = '#' //Hex color begin with #
    for (let i = 0; i < 6; i++) {
        hexColor += colorArray[getRandomNum(colorArray.length)]; //looping through the hex array randomly adding characters to form a full color
    }
    return hexColor;
}

//Generates random numbers basing on the array size for both hex and simple
function getRandomNum(size) {
    return Math.floor(Math.random() * size);
}