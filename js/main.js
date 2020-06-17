var cover = document.getElementById("canvas");
var canvas = cover.getContext("2d");

var background = {
    url: "image/tile.png",
    loadOk: false
}
var cow = {
    url: "image/vaca.png",
    loadOk: false
}
var chicken = {
    url : "image/pollo.png",
    loadOk: false
}
var pig = {
    url: "image/cerdo.png",
    loadOk: false
}

background.object = new Image();
background.object.src = background.url;
background.object.addEventListener("load", loadBackgound);

cow.object = new Image();
cow.object.src = cow.url;
cow.object.addEventListener("load", loadCow)

pig.object = new Image();
pig.object.src = pig.url;
pig.object.addEventListener("load", loadPig)

chicken.object = new Image();
chicken.object.src = chicken.url;
chicken.object.addEventListener("load", loadChicken)

function loadBackgound(){
    background.loadOk = true;
    drawLoad();
}
function loadCow(){
    cow.loadOk = true;
    drawLoad();
}
function loadPig(){
    pig.loadOk = true;
    drawLoad();
}
function loadChicken(){
    chicken.loadOk = true;
    drawLoad();
}

function cowRandom(){
    if(cow.loadOk){
        for(var i = 0; i < 5; i++){
            var x = randomNumber(420, 0);
            var y = randomNumber(420, 0);
            canvas.drawImage(cow.object, x, y);
        }
    }
}
function chickenRandom(){
    if(chicken.loadOk){
        for(var i = 0; i < 5; i++){
            var x = randomNumber(420, 0);
            var y = randomNumber(420, 0);
            canvas.drawImage(chicken.object, x, y);
        }
    }
}

var keys = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
}

function drawLoad(){
    if(pig.loadOk){
        var move = 10;
        document.addEventListener("keyup", drawKey);
        var a = 210;
        var b = 210;
        function drawKey(event){
            switch(event.keyCode){
                case keys.UP:
                canvas.drawImage(background.object, 0, 0);    
                canvas.drawImage(pig.object, a, b - move);
                b = b - move;
                cowRandom();
                chickenRandom();
                break;
                case keys.DOWN:
                canvas.drawImage(background.object, 0, 0);
                canvas.drawImage(pig.object, a, b + move);
                b = b + move;
                cowRandom();
                chickenRandom();
                break;
                case keys.LEFT:
                canvas.drawImage(background.object, 0, 0);
                canvas.drawImage(pig.object, a - move, b);
                a = a - move;
                cowRandom();
                chickenRandom();
                break;
                case keys.RIGHT:
                canvas.drawImage(background.object, 0, 0);
                canvas.drawImage(pig.object, a + move, b);
                a = a + move;
                cowRandom();
                chickenRandom();
                break;
            }
        }
    }
    if(background.loadOk){ // par que ya hubiera un cerdo y ya estubiera el fondo desde el inicio
        canvas.drawImage(background.object, 0, 0);
        canvas.drawImage(pig.object, a + move, b);
    }
    cowRandom();  // par que ya hubieran vacas desde el inicio
    chickenRandom(); // par que ya hubieran pollos desde el inicio
}

function randomNumber(max, min){
    var result;
    var result = Math.floor(Math.random() * (max - min + 1)) + min;
    return result;
}