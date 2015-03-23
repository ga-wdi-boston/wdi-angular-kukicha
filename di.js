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

function Auto(color) {
    this.wheels = 4;
    this.color = color;

    this.radio = new SonyRadio();
}

var car = new Auto('blue');

console.log(car.radio.playSong());

var truck = new Auto('red');

console.log(truck.radio.playSong());
