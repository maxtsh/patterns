let state = 0;
let instance = null;

class Singleton {
  constructor() {
    if (instance) throw new Error("You can create only one single instance!");
    instance = this;
  }

  getInstance() {
    return this;
  }

  inc() {
    return ++state;
  }

  dec() {
    return --state;
  }
}

const singleton2 = Object.freeze({
  inc: () => ++state,
  dec: () => --state,
});

const singleton = Object.freeze(new Singleton());

const body = document.querySelector("body");
const incBtn = document.createElement("button");
const decBtn = document.createElement("button");
incBtn.innerText = "Increment";
decBtn.innerText = "Decrement";
body.appendChild(incBtn);
body.appendChild(decBtn);

incBtn.addEventListener("click", () => {
  console.log(singleton2.inc());
});
decBtn.addEventListener("click", () => {
  console.log(singleton2.dec());
});
