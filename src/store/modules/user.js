export default {
    state: {
        token: localStorage.getItem('token')
    },
    mutations: {
        setToken (state, token) {
            state.token = token
            localStorage.setItem('token', token)
        }
    },
    getters: {
        token: (state)=> state.token
    }
}