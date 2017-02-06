class Auto {
    constructor(
        public mph = 0,
        public wheels = 4,
        public doors?) {
        
    }

    drive(speed) {
        this.mph += speed;
    }

    stop() {
        this.mph = 0;
    }

}

class Motorcycle extends Auto {
    doors = 0;
    wheels = 2;
}

var bike = new Motorcycle();