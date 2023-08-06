class Watcher {
  constructor() {
    this.observers = [];
  }

  subscrible(fn) {
    this.observers.push(fn);
  }

  unsubscrible(fn) {
    this.observers = this.observers.fillter((ob) => ob !== fn);
  }

  notify(data) {
    this.observers.forEach((ob) => {
      ob(data);
    });
  }
}

const MyWatcher = new Watcher();

const sendToCEO = (data) => console.log(`Hey CEO, data ===>`, data);
const sendToCTO = (data) => console.log(`Hey CTO, my data is ready ===>`, data);

MyWatcher.subscrible(sendToCEO);
MyWatcher.subscrible(sendToCTO);

const sentData = document.getElementById("btn");

sentData.addEventListener("click", () => {
  MyWatcher.notify({ name: "max", age: 29 });
});
