import { createStore } from 'vuex';
const store = createStore({
    state() {
        return {
            count: 0,
            user:null,
        }
    },
    getters: {
        doubleCount(state) {
            return state.count * 2;
        }
    },
    mutations: {
        increment(state) {
            state.count++;
        },
        setUser(state, user) {
            state.user = user;
        }
    },
    action: {
        async fetchUser({ commit }, id) {
            const res = await api.getUser(id);
            commit('setUser', res.data);
        }
    }
})
export default store;