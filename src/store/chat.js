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
    // isLoggedIn: false,
    // username: undefined,
    isLoggedIn: true,
    username: 'alcatraz627',

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
            // snapshot.forEach(snap => chats.push(snap.val()));
            // console.log(chats);
            commit('setChat', chats);
            if (!state.hasFetchedChat) commit('setFetchState', true);
        })
    },
    async sendMessage({ commit, state: { username } }, message) {
        console.log(message)
        let id = db.ref('chats').push().key
        let data = { id, username, message }
        let updates = { [id]: data }

        db.ref('chats').update(updates, error => {
            console.log(error ? error : "Sent!");
        })

        // commit('addMessage', data)
    }
};

const mutations = {
    setChat: (state, chatList) => (state.messages = chatList),
    setFetchState: (state, fetchState) => (state.hasFetchedChat = !!fetchState),
    addMessage: (state, data) => state.messages = [...state.messages, { ...data }]
};

export default { state, getters, actions, mutations }