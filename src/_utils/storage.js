function _getItem(key) {
    return localStorage.getItem(key);
}

function _setItem(key, data) {
    localStorage.setItem(key, data);
}

function _setItems(key, value) {
    const propertyObj = _getItem(key);
    const newStrData = propertyObj ? `${propertyObj}|${value}` : value;
    localStorage.setItem(key, newStrData);
}

function _removeItem(key) {
    localStorage.removeItem(key);
}

function _clearStorage() {
    localStorage.clear();
}

export const Storage = {
    getItem: _getItem,
    setItem: _setItem,
    setItems: _setItems,
    remove: _removeItem,
    clear: _clearStorage
};
