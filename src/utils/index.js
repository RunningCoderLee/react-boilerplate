class Utils {
  static store(namespace, data) {
    if (data) {
      return localStorage.setItem(namespace, JSON.stringify(data));
    }


    const store = localStorage.getItem(namespace);
    if (store) {
      return JSON.parse(store);
    }

    return [];
  }
}

export default Utils;
