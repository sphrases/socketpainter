var config = {
    type: Phaser.AUTO,
    scale: {                        //important for dynamic scaling
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_HORIZONTALLY
    },
    physics: {
        default: 'arcade',          //physics system
        arcade: {
            gravity: {y: 200}
        }
    },
    parent: 'phaserContainer',      //Id of parent of the canvas
    title: "Mygame",                //Name of the Game
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};


var game = new Phaser.Game(config);
var platforms;
var graphics;
var otherGraphics;

var paths = [];

function preload() {
}

function create() {
    graphics = this.add.graphics(); //



}

var mouseClickFlipFlop = false;
var pointer = game.input.activePointer;
var wasDown = false;
var myColor = Math.floor(Math.random() * 16777215).toString(16);
$("#myColorHeader").text("#"+myColor)
    .css("color", "#"+myColor);


myColor = '0x' + myColor;
var startedDrawing = false;
var myLine;

function update() {

    graphics.clear();
    graphics.lineStyle(2, myColor, 1);

    paths.forEach(function (e) {
        if (true) {
            //console.log(e.path);
            graphics.lineStyle(2, e.color, 1);
            e.path.draw(graphics);
        }
    });


    if (game.input.activePointer.leftButtonDown()) {
        if (!mouseClickFlipFlop) {
            mouseClickFlipFlop = true;
        }
    }

    if (!game.input.activePointer.leftButtonDown()) {
        if (mouseClickFlipFlop) {
            mouseClickFlipFlop = false;
        }
    }


    if (pointer.justMoved) {
        if (pointer.isDown) {
            wasDown = true;
            mouseMoved(pointer.x, pointer.y);
            if (!startedDrawing) {
                startedDrawing = true;
                graphics.lineStyle(2, myColor, 1);
                myLine = new Phaser.Curves.Path(pointer.x, pointer.y);

            } else {
                graphics.lineStyle(2, myColor, 1);
                myLine.splineTo([pointer.x, pointer.y]);
                myLine.draw(graphics);
                startedDrawing = true;
            }
            //console.log("just moved  " + pointer.x);
        } else if (wasDown) {
            sendMouseCoord(myColor);
            pointer.justMoved = false;
            wasDown = false;
            startedDrawing = false;
        }
    }

}







