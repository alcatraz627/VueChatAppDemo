# Chat App Demo

![Screenshot of the Homepage](https://i.imgur.com/oNPp1pQ.png)

This is a realtime chat app built with [Vue JS](https://vuejs.org/) as the frontend framework and Firebase for handling the back-end data. [Firebase RealTime Database](https://firebase.google.com/docs/database/) is used for live message sending and receiving. 

### Usage

It requires you to enter a username and lets you send messages by that username. It lets multiple people converse in the same chatroom, and even allows multiple client logins for the same username.

> The app is hosted at: [https://hopeful-wescoff-3b5431.netlify.app/](https://hopeful-wescoff-3b5431.netlify.app/)

#### This is a minimal demo of realtime chat

There is currently no authentication mechanism and anyone can join the chat, so multiple sessions with the same username can be held. There is minimal error handling and validation checks like not allowing an empty username to login or an empty message to be sent.

Chunk splitting and other optimizations are not implemented as the app is quite small and those optimizations will not make a significant improvement in loading speed.

There is no persistence of login, so the login information is lost upon refresh. However, the messages are stored in the _Firebase RealTime Database_ and persist through all changes; and the app shows the message history from the beginning to any user at all times.

### Additional libraries used
- It uses [Vue Material](https://vuematerial.io/) library for the UI elements.
- The project was bootstrapped with [Vue CLI](https://cli.vuejs.org/).
- State management is done with [Vuex](https://vuex.vuejs.org/).
- [Vue Router](https://router.vuejs.org/) is used to handle the application being on the login screen and the chat screen.

Although _Vue Material_ supports SASS/SCSS, plain CSS is used throughout the application.

> The application can be viewed on any device or browser capable of running javascript.

### Setup the project
```
yarn install
```

### Compiles and start the dev server
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```