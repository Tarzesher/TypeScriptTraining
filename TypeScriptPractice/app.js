var Vehicle;
(function (Vehicle) {
    var Auto = (function () {
        function Auto() {
        }
        Auto.prototype.travel = function (t) {
        };
        return Auto;
    }());
    Vehicle.Auto = Auto;
})(Vehicle || (Vehicle = {}));
var car = new Vehicle.Auto();
car.door = 4;
car.wheels = 4;
car.travel({ destination: "mavambe", when: 1730 });
//# sourceMappingURL=app.js.map