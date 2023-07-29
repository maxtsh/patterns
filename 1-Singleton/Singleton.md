# 𝐒𝐢𝐧𝐠𝐥𝐞𝐭𝐨𝐧 𝐏𝐚𝐭𝐭𝐞𝐫𝐧

Singletons are classes that can be instantiated once and can be accessed globally. This single instance can be shared throughout our application.

## 𝐒𝐢𝐧𝐠𝐥𝐞𝐭𝐨𝐧 𝐩𝐚𝐭𝐭𝐞𝐫𝐧 𝐢𝐦𝐩𝐨𝐫𝐭𝐚𝐧𝐭 𝐮𝐬𝐞 𝐜𝐚𝐬𝐞𝐬:

Here I will introduce five popular use cases that can take advantage of the singleton pattern.

### 1- 𝐋𝐨𝐠𝐠𝐢𝐧𝐠 𝐒𝐲𝐬𝐭𝐞𝐦

We may want to have only one instance of the logger, as multiple loggers can cause inconsistent and hard-to-read logs. In this case, we can apply the Singleton pattern to create a single logger instance that can be accessed from different parts of the code.

### 2- 𝐃𝐚𝐭𝐚𝐛𝐚𝐬𝐞 𝐂𝐨𝐧𝐧𝐞𝐜𝐭𝐢𝐨𝐧, 𝐒𝐨𝐜𝐤𝐞𝐭 𝐂𝐨𝐧𝐧𝐞𝐜𝐭𝐢𝐨𝐧𝐬

We may want to create a single database connection instance to avoid creating multiple connections that can cause performance issues. By using the Singleton pattern, we can create a single database connection instance that can be shared across the application, the same thing applies to Socket connections.

### 3- 𝐂𝐨𝐧𝐟𝐢𝐠𝐮𝐫𝐚𝐭𝐢𝐨𝐧 𝐌𝐚𝐧𝐚𝐠𝐞𝐫

We may want to have a single instance of the configuration manager to avoid reading the configuration from files or databases multiple times. By using the Singleton pattern, we can create a single instance of the configuration manager that can be accessed from anywhere in the code.

### 4- 𝐂𝐚𝐜𝐡𝐞 𝐌𝐚𝐧𝐚𝐠𝐞𝐫

We may want to implement a cache manager that caches frequently used data to reduce database calls and improve performance. By using the Singleton pattern, we can create a single instance of the cache manager that can be shared across the application.

### 5- 𝐔𝐬𝐞𝐫 𝐏𝐫𝐞𝐟𝐞𝐫𝐞𝐧𝐜𝐞𝐬

We may want to store user preferences such as font size, color scheme, etc. By using the Singleton pattern, we can create a single instance of the user preferences class that can be accessed and modified from different parts of the code.

## Disadvantages:

### 1- 𝐔𝐬𝐢𝐧𝐠 𝐚 𝐫𝐞𝐠𝐮𝐥𝐚𝐫 𝐣𝐚𝐯𝐚𝐬𝐜𝐫𝐢𝐩𝐭 𝐨𝐛𝐣𝐞𝐜𝐭

We can use a regular simple JavaScript object as shown in the below picture to make a singleton pattern without using class overkills.

### 2- 𝐓𝐞𝐬𝐭𝐢𝐧𝐠 𝐜𝐚𝐧 𝐛𝐞 𝐩𝐚𝐢𝐧𝐟𝐮𝐥

Since we can't create new instances each time, all tests rely on the modification to the global instance of the previous test, we need to isolate the tests.

### 3- 𝐃𝐞𝐩𝐞𝐧𝐝𝐞𝐧𝐜𝐲 𝐚𝐧𝐝 𝐆𝐥𝐨𝐛𝐚𝐥 𝐢𝐬𝐬𝐮𝐞𝐬

Since we have only one instance, using it everywhere may create overlap above the functionality and memory and result in unexpected behaviors.

#### 📃 𝐌𝐨𝐫𝐞 𝐫𝐞𝐬𝐨𝐮𝐫𝐜𝐞𝐬: 👇

##### 1- https://lnkd.in/eTaM4yXS

##### 2-https://lnkd.in/dEEr4F8x
