import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        messageInformation: '',
        colors: [],
        coloPicked: '',
        isHardMode: true,
        activeBackgroundColor: false
    },
    actions: {
        winGame({commit}, message){
            commit('win', message)
        },
        continueGame({commit}, message){
            commit('tryAgain', message)
        },
        initGame({commit}, params){
            commit('init', params)
        }
    },
    mutations: {
        win(state, message){
            state.messageInformation = message
            state.activeBackgroundColor = true
        },
        tryAgain(state, message){
            state.messageInformation = message
        },
        init(state, param)
        {
            state.colors = param.colors
            state.coloPicked = param.colorPicked
            state.isHardMode = param.isHard
            state.messageInformation = ''
            state.activeBackgroundColor = false
        }
    }
})