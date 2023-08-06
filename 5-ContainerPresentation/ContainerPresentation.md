# Container/Presentational Pattern

## 🔔𝐌𝐨𝐝𝐞𝐫𝐧 𝐑𝐞𝐚𝐜𝐭 𝐂𝐨𝐧𝐭𝐚𝐢𝐧𝐞𝐫/𝐏𝐫𝐞𝐬𝐞𝐧𝐭𝐚𝐭𝐢𝐨𝐧𝐚𝐥 𝐏𝐚𝐭𝐭𝐞𝐫𝐧 𝐰𝐢𝐭𝐡 𝐡𝐨𝐨𝐤𝐬!

In React, one way to enforce separation of concerns is by using the Container/Presentational pattern. With this pattern, we can separate the view from the application logic.

I shared a simple example in the below image that shows how clean it can be to create a custom hook in each component which you are going to have business logic and make it way more cleaner and understandable!

## 𝐖𝐡𝐚𝐭 𝐚𝐫𝐞 𝐭𝐡𝐞 𝐛𝐞𝐧𝐞𝐟𝐢𝐭𝐬 𝐨𝐟 𝐝𝐨𝐢𝐧𝐠 𝐭𝐡𝐢𝐬?

✅ 1- 𝐒𝐞𝐩𝐚𝐫𝐚𝐭𝐢𝐨𝐧 𝐨𝐟 𝐜𝐨𝐧𝐜𝐞𝐫𝐧𝐬

The Container/Presentational pattern encourages the separation of concerns. Presentational components can be pure functions that are responsible for the UI, whereas container components are responsible for the state and data of the application. This makes it easy to enforce the separation of concerns.

✅ 2- 𝐑𝐞𝐮𝐬𝐚𝐛𝐢𝐥𝐢𝐭𝐲 𝐚𝐧𝐝 𝐜𝐨𝐧𝐬𝐢𝐬𝐭𝐞𝐧𝐜𝐲

Presentational components are easily made reusable, as they simply display data without altering this data. We can reuse the presentational components throughout our application for different purposes.

Since presentational components don't alter the application logic, the appearance of presentational components can easily be altered by someone without knowledge of the codebase, for example, a designer. If the presentational component was reused in many parts of the application, the change can be consistent throughout the app.

✅ 3- 𝐓𝐞𝐬𝐭𝐢𝐧𝐠

Testing presentational components is easy, as they are usually pure functions. We know what the components will render based on which data we pass, without having to mock a data store.

## ⭕ 𝐖𝐡𝐚𝐭 𝐚𝐫𝐞 𝐭𝐡𝐞 𝐝𝐢𝐬𝐚𝐝𝐯𝐚𝐧𝐭𝐚𝐠𝐞𝐬?

Well, I can not mention anything about this design pattern here except that, this pattern can easily be overkill in smaller-sized applications.

## Resource:

https://www.patterns.dev/posts/presentational-container-pattern
