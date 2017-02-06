interface ITrip {
    destination: string;
    when: any;
}

module Vehicle {
    export class Auto {
        wheels: number;
        door: number;

        travel(t: ITrip) {

        }
    }
}

var car = new Vehicle.Auto();
    car.door = 4;
    car.wheels = 4;
    car.travel({destination: "mavambe", when: 1730});
