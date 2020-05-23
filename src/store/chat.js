import { v1 as uuidv1 } from 'uuid'

import { db } from '../firebase'


const state = {
    messages: [
        // {
        //     id: 0,
        //     username: 'alcatraz627',
        //     message: 'TestUno'
        // },
        // {
        //     id: 1,
        //     username: 'alcatraz627',
        //     message: 'Working!'
        // },
        // {
        //     id: 2,
        //     username: 'newuser2',
        //     message: 'Wow!'
        // },
    ],
    hasFetchedChat: false,
    isLoggedIn: false,
    username: undefined,
    // isLoggedIn: true,
    // username: 'alcatraz627',

};

const getters = {
    listChat: state => state.messages,
    getFetchedState: state => state.hasFetchedChat,
    getLoginState: state => state.isLoggedIn,
    getUserName: state => state.isLoggedIn ? state.username : undefined
};

const actions = {
    async fetchChat({ commit, state }) {
        const response = await db.ref('chats').on('value', snapshot => {
            let chats = []
            snapshot.forEach(snap => { chats.push({ id: snap.key, ...snap.val() }) });
            chats.sort((a, b) => (a.timestamp - b.timestamp))
            commit('setChat', chats);
            if (!state.hasFetchedChat) commit('setFetchState', true);
        })
    },
    async sendMessage({ commit, state: { username } }, message) {
        let id = db.ref('chats').push().key
        let data = { id, username, message, timestamp: Date.now() }
        let updates = { [id]: data }

        db.ref('chats').update(updates, error => {
            console.log(error ? error : "Sent!");
        })
    },
    logIn({ commit }, username) {
        console.log("Logging in:", username)
        commit('setUserName', username)
        commit('setLogInStatus', true)
    },
    logOut({ commit }) {
        commit('setUserName', null)
        commit('setLogInStatus', false)
    }
};

const mutations = {
    setChat: (state, chatList) => (state.messages = chatList),
    setFetchState: (state, fetchState) => (state.hasFetchedChat = !!fetchState),
    addMessage: (state, data) => state.messages = [...state.messages, { ...data }],
    setUserName: (state, username) => state.username = username,
    setLogInStatus: (state, status) => state.isLoggedIn = status,
};

export default { state, getters, actions, mutations }