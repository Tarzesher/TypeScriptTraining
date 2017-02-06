var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Auto = (function () {
    function Auto(mph, wheels, doors) {
        if (mph === void 0) { mph = 0; }
        if (wheels === void 0) { wheels = 4; }
        this.mph = mph;
        this.wheels = wheels;
        this.doors = doors;
    }
    Auto.prototype.drive = function (speed) {
        this.mph += speed;
    };
    Auto.prototype.stop = function () {
        this.mph = 0;
    };
    return Auto;
}());
var Motorcycle = (function (_super) {
    __extends(Motorcycle, _super);
    function Motorcycle() {
        _super.apply(this, arguments);
        this.doors = 0;
        this.wheels = 2;
    }
    return Motorcycle;
}(Auto));
var bike = new Motorcycle();
//# sourceMappingURL=app.js.map