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

var sonyRadio = new SonyRadio();
var car = new Auto('blue', sonyRadio);

console.log(car.radio.playSong());

var jvcRadio = new JVCRadio();
var truck = new Auto('red', jvcRadio);

console.log(truck.radio.playSong());
