import Vuex from 'vuex'
import Vue from 'vue'
import chat from './chat'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: { chat }
});