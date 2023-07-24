"use strict";
const cart = {
    items: [], // Массив товаров
    count: 0, // Количество товаров
    discount: 0, // Скидка по умолчанию 0%

    // Геттер для получения общей стоимости товаров с учетом скидки
    get totalPrice() {
        return this.calculateItemPrice();
    },

    // Метод для пересчета стоимости всей корзины с учетом скидки
    calculateItemPrice() {
        return this.items.reduce(
            (total, item) =>
                total + item.price * item.quantity * (1 - this.discount / 100),
            0
        );
    },

    // Метод для увеличения количества товаров
    increaseCount(num) {
        this.count += num;
    },

    // Метод для добавления товара
    add(name, price, quantity = 1) {
        const item = {
            name,
            price,
            quantity,
        };

        this.items.push(item);
        this.increaseCount(quantity);
    },

    // Метод для очистки корзины
    clear() {
        this.items = [];
        this.count = 0;
    },

    // Метод для вывода информации о корзине
    print() {
        console.log(JSON.stringify(this.items));
        console.log("Общая стоимость корзины: " + this.totalPrice);
    },

    // Сеттер для установки скидки в зависимости от промокода
    setDiscount(promocode) {
        if (promocode === "METHED") {
            this.discount = 15; // Скидка 15%
        } else if (promocode === "NEWYEAR") {
            this.discount = 21; // Скидка 21%
        } else {
            console.log("Промокод не действителен.");
        }
    },
};

// Пример использования
cart.add("Товар 1", 10, 2);
cart.add("Товар 2", 5, 3);
cart.add("Товар 3", 8);
cart.print();

console.log("cart.totalPrice: ", cart.totalPrice);

cart.setDiscount("NEWYEAR"); // Установить скидку 21% с промокодом NEWYEAR
console.log("cart.totalPrice с промокодом NEWYEAR: ", cart.totalPrice);

concat; //объединения (конкатенации) двух или более массивов в один новый массив. Он не изменяет исходные массивы, а возвращает новый массив
