canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
nasaMarsImagesArray = ["nasa_image_1.jpg","nasa_image_2.jpeg", "nasa_image_3.jpg","nasa_image_4.jpg"];
randomNumber = Math.floor(Math.random() * 4);
console.log(randomNumber)
roverWidth=100 
roverHeight=90
backgroundImage = nasaMarsImagesArray [randomNumber];
roverImage = "rover.png";
roverX=10
roverY=10
function add() {
    backgroundImgTag = new Image(); 
    backgroundImgTag.onload = uploadBackground; 
    backgroundImgTag.src = backgroundImage; 

    roverImgTag = new Image();
    roverImgTag.onload = uploadrover;
    roverImgTag.src = roverImage;
}
function uploadBackground() {
    ctx.drawImage(backgroundImgTag, 0, 0, canvas.width, canvas.height);
}
function uploadrover() {
    ctx.drawImage(roverImgTag, roverX, roverY, roverWidth, roverHeight);
}
window.addEventListener("keydown", myKeyDown);
function myKeyDown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed)
    if (keyPressed=="38") {
        up()
        console.log("Tecla Para Cima")
    }
    if (keyPressed=="40") {
        down()
        console.log("Tecla Para Baixo")
    }
    if (keyPressed=="37") {
        left()
        console.log("Tecla Para Esquerda")
    }
    if (keyPressed=="39") {
        right()
        console.log("Tecla Para Direita")
    }
    if (keyPressed=="87") {
        up()
        console.log("Tecla Para Cima")
    }
    if (keyPressed=="83") {
        down()
        console.log("Tecla Para Baixo")
    }
    if (keyPressed=="65") {
        left()
        console.log("Tecla Para Esquerda")
    }
    if (keyPressed=="68") {
        right()
        console.log("Tecla Para Direita")
    }
}
function up()
{
    if(roverY >=0)
    {
        roverY = roverY -10
        console.log("Quando a seta para cima é pressionada, x = " + roverX + " | y = " +roverY);
        uploadBackground()
        uploadrover()
    }
}
function down() {
    if (roverY <=500) {
        roverY = roverY+ 10
        console.log("Quando a seta para baixo é pressionada, x = " + roverX + " | y = " +roverY);
        uploadBackground()
        uploadrover()
    }
}

function left() {
    if(roverX >=0) {
        roverX = roverX-10
        console.log("Quando a seta para esquerda é pressionada, x = " + roverX + " | y = " +roverY);
        uploadBackground()
        uploadrover()
    }
}
function right() {
    if(roverX <=700) {
        roverX = roverX+10
        console.log("Quando a seta para direita é pressionada, x = " + roverX + " | y = " +roverY);
        uploadBackground()
        uploadrover()
    }
}