module.exports = Collection;

/**
 * Конструктор коллекции
 * @constructor
 */
function Collection() {
    this.value = [];
};


// Методы коллекции
Collection.prototype.append = function (item) {
    if (item instanceof Array) {
        this.value = [...this.value, ...item];
    } else if (item.value instanceof Array) {
        this.value = [...this.value, ...item.value];
    } else {
        this.value.push(item);
    }
};

Collection.prototype.at = function (order) {
    if (order < 1 || order > this.value.length) {
        return null;
    }
    return this.value[order - 1];
};

Collection.prototype.values = function () {
    return this.value;
};

Collection.prototype.count = function () {
    return this.value.length;
};

Collection.prototype.removeAt = function (order) {
    if (this.value[order - 1]) {
        this.value.splice( (order - 1), 1);
        return true;
    }
    return false;
};


/**
 * Создание коллекции из массива значений
 */
Collection.from = function () {
    const newCollection = new Collection;
    newCollection.append(arguments[0]);
    return newCollection;
};
