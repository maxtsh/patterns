# Observer Pattern

## 🔔𝐎𝐛𝐬𝐞𝐫𝐯𝐞𝐫 𝐝𝐞𝐬𝐢𝐠𝐧 𝐩𝐚𝐭𝐭𝐞𝐫𝐧 𝐰𝐢𝐭𝐡 𝐫𝐞𝐚𝐥-𝐰𝐨𝐫𝐥𝐝 𝐞𝐱𝐚𝐦𝐩𝐥𝐞𝐬

With the observer pattern, we can subscribe certain objects, the observers, to another object, called the observable. Whenever an event occurs, the observable notifies all its observers!

let's now define some vocabulary here:

1-𝐎𝐛𝐬𝐞𝐫𝐯𝐞𝐫𝐬: an array of observers that will get notified whenever a specific event occurs.
2-𝐒𝐮𝐛𝐬𝐜𝐫𝐢𝐛𝐞(): a method in order to add observers to the observers list.
3-𝐔𝐧𝐬𝐮𝐛𝐬𝐜𝐫𝐢𝐛𝐞(): a method in order to remove observers from the observers list.
4-𝐍𝐨𝐭𝐢𝐟𝐲(): a method to notify all observers whenever a specific event occurs.

## 𝐑𝐞𝐚𝐥-𝐭𝐢𝐦𝐞 𝐞𝐱𝐚𝐦𝐩𝐥𝐞𝐬 𝐟𝐨𝐫 𝐭𝐡𝐞 𝐨𝐛𝐬𝐞𝐫𝐯𝐞𝐫 𝐩𝐚𝐭𝐭𝐞𝐫𝐧

✅ 1-Stock Market Updates
✅ 2-Chat Applications
✅ 3-Weather Monitoring Systems
✅ 4-Distributed Systems and Message Queues

🔗 𝐑𝐞𝐚𝐝 𝐦𝐨𝐫𝐞:
https://lnkd.in/eQJkvPkx

There is also a state management library using Observer Pattern internally called RxJs.

ReactiveX combines the Observer pattern with the Iterator pattern and functional programming with collections to fill the need for an ideal way of managing sequences of events.

🔗 https://rxjs.dev/

### ✅ 𝐏𝐫𝐨𝐬:

Using the observer pattern is a great way to enforce the separation of concerns and the single-responsibility principle. The observer objects aren't tightly coupled to the observable object and can be (de)coupled at any time. The observable object is responsible for monitoring the events, while the observers simply handle the received data.

### ⭕ 𝐂𝐨𝐧𝐬:

If an observer becomes too complex, it may cause performance issues when notifying all subscribers.

🔗 Full article on Patterns.dev:
https://lnkd.in/es-VvZjy
