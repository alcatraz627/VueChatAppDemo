import { db } from '../firebase'
import router from '../router'

const state = {
    messages: [], // List of message objects, with the id, username, message and timestamp
    hasFetchedChat: false, //
    username: undefined, // Username with which the login has been done
    isLoggedIn: false, // Boolean to track if the user has logged in
    /* NOTE: username == undefined is also a way of checking if the user has logged in, however, 
    it can lead to problems further down the line when scaling, owing to the way javascript 
    mishandles type conversion */
};

// Getters to retrieve data from the store
const getters = {
    // Fetch list of message objects from the store
    listChat: state => state.messages,
    // Has the chat before the login been fetched from firebase?
    getFetchedState: state => state.hasFetchedChat,
    // Is the user logged in
    getLoginState: state => state.isLoggedIn,
    // username property
    getUserName: state => state.isLoggedIn ? state.username : undefined
};

const actions = {
    // Fetch the chat from firebase and load it into the store
    // Is called on mounting the Chat component and sets up an observable to monitor for messages
    async fetchChat({ commit, state }) {
        // db.ref('chats') is the reference to the realtime database collection where chats are being stored
        // Subscribes to the observable and is called on every update to the database
        await db.ref('chats').on('value', snapshot => {
            let chats = []
            snapshot.forEach(snap => { chats.push({ id: snap.key, ...snap.val() }) });
            // Sort the chats based on timestamp
            chats.sort((a, b) => (a.timestamp - b.timestamp))
            // Load the chats into the store
            commit('setChat', chats);
            // Update the store to record that the initial fetch has been made
            if (!state.hasFetchedChat) commit('setFetchState', true);
        })
    },
    // Action to send a message to the database
    async sendMessage({ commit, state: { username } }, message) {
        // Create a new unique key for the new message
        let id = db.ref('chats').push().key
        // Data of the message object, with the timestamp
        let data = { id, username, message, timestamp: Date.now() }
        let updates = { [id]: data }

        // Update the value for the unique key created previously
        db.ref('chats').update(updates, error => {
            if(error) console.log(error);
        })
        
        // No need to add to the local state as the previous observable will fetch the message from the 
        // firebase realtime database as append it to the store automatically
    },
    // Log in a user
    logIn({ commit }, username) {
        commit('setUserName', username)
        commit('setLogInStatus', true)
        router.push("/chat")
    },
    // Log out the user
    logOut({ commit }) {
        commit('setUserName', null)
        commit('setLogInStatus', false)
        router.push("/")
    }
};

const mutations = {
    // Set the store chat message list
    setChat: (state, chatList) => (state.messages = chatList),
    // Set the fetch state of the messages
    setFetchState: (state, fetchState) => (state.hasFetchedChat = !!fetchState),
    // Add a message to the store
    addMessage: (state, data) => state.messages = [...state.messages, { ...data }],
    // Set the username session
    setUserName: (state, username) => state.username = username,
    // Set the login session tracker
    setLogInStatus: (state, status) => state.isLoggedIn = status,
};

export default { state, getters, actions, mutations }