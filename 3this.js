const rectangle = {
    _width: 5,
    _height: 5,

    // Сеттер для установки ширины прямоугольника
    set width(value) {
        if (typeof value === "number" && value > 0) {
            this._width = value;
        } else {
            console.error("Ширина должна быть положительным числом!");
        }
    },

    // Сеттер для установки высоты прямоугольника
    set height(value) {
        if (typeof value === "number" && value > 0) {
            this._height = value;
        } else {
            console.error("Высота должна быть положительным числом!");
        }
    },

    // Геттер для получения периметра прямоугольника
    get perimeter() {
        const perimeterValue = 2 * (this._width + this._height);
        return perimeterValue + "см";
    },

    // Геттер для получения площади прямоугольника
    get area() {
        const areaValue = this._width * this._height;
        return areaValue + "см²";
    },
};

console.log(rectangle.perimeter);
console.log(rectangle.area);
