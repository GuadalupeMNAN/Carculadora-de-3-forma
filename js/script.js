//cuadrado
function squarePerimeter(side){
    return side *4;
}

function squarePerimeterCalculate(){
    const numberSide = document.getElementById("squareInput");
    const result = parseInt(numberSide.value);

    const perimeter = squarePerimeter(result);
    document.getElementById("squarePerimeter").innerText ="Its perimeter is: "+perimeter+" cm";
}

function squareArea(side){
    return side * side;
}

function squareAreaCalculate(){
    const numberSide = document.getElementById("squareInput");
    const result = parseInt(numberSide.value);

    const Area = squareArea(result);
    document.getElementById("squareArea").innerText ="Its area is: "+Area+"  cm^2";
}


//circulo

function circlePerimeter(radio){
    return 2 * Math.PI * radio ;
}

function circlePerimeterCalculate(){
    const radio = document.getElementById("circleInput");
    const result = parseInt(radio.value);

    const perimeter = circlePerimeter(result);
    document.getElementById("circlePerimeter").innerText = "Its perimeter is: " + perimeter + " cm";
}


function circleArea(radio){
    return Math.PI * Math.pow(radio, 2);
}

function circleAreaCalculate(){
    const radio= document.getElementById("circleInput");
    const result = parseInt(radio.value);

    const area = circleArea(result);
    document.getElementById("circleArea").innerText = "Its area is: " + area + " cm^2";
}

function resetAll() {
    let display = document.querySelector("circleInput")
    display.value=""; 
}



//triangulo

function trianglePerimeter(side1, side2, base){
    return side1 + side2 + base ;
}

function trianglePerimeterCalculate(){
    const side1 = parseInt(document.getElementById("side1Input").value);
    const side2 = parseInt(document.getElementById("side2Input").value);
    const base = parseInt(document.getElementById("baseInput").value);

    const perimeter = trianglePerimeter(side1, side2, base);
    document.getElementById("trianglePerimeter").innerText = "Its perimeter is: " + perimeter + " cm";
}

function triangleArea(base, height){
    return base * height / 2;
}

function triangleAreaCalculate(){
    const base= parseInt (document.getElementById("baseInput").value);
    const height= parseInt(document.getElementById("heightInput").value);
    

    const area = triangleArea(base, height);
    document.getElementById("triangleArea").innerText = "Its area is: " + area + " cm^2";
}

function resetAll() {
    let display = document.querySelector("triangleInput")
    display.value=""; 
}













