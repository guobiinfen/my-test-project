import Vue from 'vue'
import Vuex from "vuex"
import user from './modules/user'
Vue.use(Vuex)

const store= new Vuex.Store({
    state: {
        userInfo: {}
    },
    mutation: {
        setUserInfo (state, data) {
            state.userInfo = data
        }
    },
    actions: {},
    getters: {},
    modules: {
        user,
    }
})

export default store