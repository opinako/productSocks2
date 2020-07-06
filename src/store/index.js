import Vue from 'vue'
import Vuex from 'vuex'

import getters from './Getters.js'
import mutations from './Mutations.js'



Vue.use( Vuex )

export default new Vuex.Store( {
  state: {
    premium: true,
    cart: [],
    selectedVariant: 0,
    variants: [ {
        variantColor: 'green',
        variantId: 2234,
        variantQuantity: 10,
        variantImage: 'https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg'
      },
      {
        variantColor: 'blue',
        variantId: 2235,
        variantQuantity: 0,
        variantImage: 'https://www.vuemastery.com/images/challenges/vmSocks-blue-onWhite.jpg'
      }
    ],
    name:null,
    review:null,
    rating:null,
    errors:[],
    reviews:[]
  },
  actions: {},
  modules: {},
  mutations,
  getters
} )