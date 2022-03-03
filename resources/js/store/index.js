import Vue from 'vue'
import Vuex from 'vuex'

import books from './books/index'
import categories from './categories/index'

Vue.use(Vuex)

export default function () {
    return new Vuex.Store({
        modules: {
            books,
            categories
        },

        // enable strict mode (adds overhead!)
        // for dev mode only
        strict: process.env.DEV
    })
}
