export function observe(data) {
  console.log("---observe---");
  if (typeof data !== "object" || data === null) return;

  // 如果一个对象被劫持，那么久不需要再被劫持
  // 可以增添一个实例，用实例来判断是否被劫持过

  return new Observe(data);
}

class Observe {
  constructor(data) {
    this.walk(data);
  }
  walk(data) {
    Object.keys(data).forEach(key => defineReactive(data, key, data[key]));
  }
}

export function defineReactive(target, key, value) {
  observe(value);
  Object.defineProperty(target, key, {
    get() {
      return value;
    },
    set(newVal) {
      if (value === newVal) return;
      value = newVal;
    }
  });
}
