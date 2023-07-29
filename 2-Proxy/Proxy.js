const usa = {
  country: "United States",
  army: "75th Rangers",
  power: 97,
  lang: "English",
};

// gets the original object and a handler object
const usaProxy = new Proxy(usa, {
  set: (target, prop, value) => {
    const oldValue = target[prop];
    console.log(oldValue);

    // target[prop] = value;
    Reflect.set(target, prop, value);
  },
  get: (target, prop) => {
    const value = target[prop];
    if (value === undefined) console.log("Property not found!");

    // if (value !== undefined) return value;
    if (value !== undefined) return Reflect.get(target, prop);
  },
});

usaProxy.army = "101st Airborne";
console.log(usa);
// {country: "United States", army: "New Army", power: 97, lang: "English"}

const power = usaProxy.power;
console.log(power); // 97

usaProxy.novalue; // Property not found!

//**  Reflect object */
// JavaScript provides a built-in object called Reflect, which makes it easier for us to manipulate the target object when working with proxies.

// Previously, we tried to modify and access properties on the target object within the proxy through directly getting or setting the values with bracket notation. Instead, we can use the Reflect object. The methods on the Reflect object have the same name as the methods on the handler object.

// Instead of accessing properties through obj[prop] or setting properties through obj[prop] = value, we can access or modify properties on the target object through Reflect.get() and Reflect.set(). The methods receive the same arguments as the methods on the handler object.

// Read only properties
const importantData = {
  name: "John Doe",
  age: 42,
};

const handler = {
  set: "Read-Only",
  defineProperty: "Read-Only",
  deleteProperty: "Read-Only",
  preventExtensions: "Read-Only",
  setPrototypeOf: "Read-Only",
};

const proxy = new Proxy(importantData, handler);
