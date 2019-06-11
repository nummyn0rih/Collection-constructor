module.exports = Collection;

/**
 * Конструктор коллекции
 * @constructor
 */
function Collection() {
    this.value = [];
};


// Методы коллекции
Collection.prototype.append = function (item) {};
Collection.prototype.at = function (order) {};
Collection.prototype.values = function () {};
Collection.prototype.count = function () {};
Collection.prototype.removeAt = function (order) {};


/**
 * Создание коллекции из массива значений
 */
Collection.from = function () {};
