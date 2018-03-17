import Vue from "vue";
import Vuex from "vuex";
// Import the modules for vuex
Vue.use(Vuex);
export const store = new Vuex.Store({
  state: {
    stock: [
      {brand: "BMW",price: 75},
      {brand: "Google",price: 114},
      {brand: "Apple",price: 312},
      {brand: "Twitter",price: 9},
    ],
    portfolio: [

    ]
  },
  getters: {
    stock: function(state){
      return state.stock;
    },
    portfolio: function(state){
      return state.portfolio;
    }
  },
  mutations: {
    updatePortfolio: function(state,boughtAStock){
      for(var i=0;i<state.portfolio.length;i++){
        if(state.portfolio[i].brand === boughtAStock.brand){
          state.portfolio[i].quantity = boughtAStock.quantity;
          return;
        }
      }
      state.portfolio.push(boughtAStock);
    }
  }
});
