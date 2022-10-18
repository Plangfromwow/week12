"use strict";
exports.__esModule = true;
exports.Rectangle = void 0;
var Rectangle = /** @class */ (function () {
    function Rectangle(_length, _width) {
        this.length = _length;
        this.width = _width;
    }
    ;
    Rectangle.prototype.getArea = function () {
        return this.length * this.width;
    };
    return Rectangle;
}());
exports.Rectangle = Rectangle;
;
var r1 = new Rectangle(20, 30);
console.log(r1);
console.log(r1.getArea());
