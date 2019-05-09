var socket = io();

var userJsonObject = {
    id: socket.id,
    msg: ' ',
    coords: [],
    color: '0xffffff'
};


socket.on('serverSentJson', function (serverJson) {
    gotDrawData(serverJson);
});


var mouseChangeString = [];


function mouseMoved(x, y) {
    mouseChangeString.push(x);
    mouseChangeString.push(y);
}


function sendMouseCoord() {
    userJsonObject.coords = mouseChangeString;
    userJsonObject.color = myColor;
    socket.emit('userJson', userJsonObject);
    console.log("Mouse Movement sent ");
    mouseChangeString = [];
}


function gotDrawData(data) {
    var startx = data.coords[0];
    var starty = data.coords[1];

    var newPath =  new Phaser.Curves.Path(startx, starty);
    newPath.splineTo(data.coords);
    var newPathObj = {color: data.color, path: newPath};
    paths.push(newPathObj);

}