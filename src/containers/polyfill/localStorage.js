const localStorage = {
  _data: {},

  setItem: (id, val) => {
    return this._data[id] = val;
  },

  getItem: (id) => {
    return this._data[id];
  },

  removeItem: (id) => {
    return delete this._data[id];
  },

  clear: () => {
    return this._data = {};
  }
};

export default ("undefined" !== typeof window.localStorage ? window.localStorage : localStorage);
