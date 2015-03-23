// dependency injection demo

function SonyRadio() {
    this.brand = 'Sony';

    this.playSong = function() {
        return 'boom boom';
    };
}

function JVCRadio() {
    this.brand = 'JVC';

    this.playSong = function() {
        return 'BOOM BOOM';
    };
}

function Auto(color, radio) {
    this.wheels = 4;
    this.color = color;

    this.radio = radio;
}

var jvcRadio = new JVCRadio();
var car = new Auto('blue', jvcRadio);

console.log(car.radio.playSong());

var sonyRadio = new SonyRadio();
var truck = new Auto('red', sonyRadio);

console.log(truck.radio.playSong());
