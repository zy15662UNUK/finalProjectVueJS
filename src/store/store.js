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
    ],
    funds: 10000,
  },
  getters: {
    stock: function(state){
      return state.stock;
    },
    portfolio: function(state){
      return state.portfolio;
    },
    funds: function(state){
      return state.funds;
    }
  },
  mutations: {
    addToPortfolio: function(state,stock){
      // update portfolio after buy a stock
      for(var i=0;i<state.portfolio.length;i++){
        if(state.portfolio[i].brand == stock.brand){
          state.portfolio[i].quantity = state.portfolio[i].quantity+stock.quantity;
          console.log("stock");
          console.log(stock);
          return;
        }
      }
      state.portfolio.push(stock);
    },
    buyStock: function(state,stock){
      // update funds after buy a stock
      var price = stock.price*stock.quantity;
      if(price>state.funds){
        alert("Insufficient funds!!");
      }else{
        state.funds-=price;
      }
    },
    removeFromPortfolio: function(state,stock){
      // update portfolio after sell a stock
      for(var i=0;i<state.portfolio.length;i++){
        if(state.portfolio[i].brand === stock.brand){
          if(state.portfolio[i].quantity>stock.quantity){
            state.portfolio[i].quantity-=stock.quantity;
            console.log(state.portfolio[i]);
          }else{
            state.portfolio.splice(i,1);
          }
        }
      }
    },
    sellStock: function(state,stock){
      // update funds after sell a stock
      var price;
      for(var i=0;i<state.portfolio.length;i++){
        if(state.portfolio[i].brand === stock.brand){
          if(state.portfolio[i].quantity>stock.quantity){
            price=stock.quantity*stock.price;
          }else{
            price=state.portfolio[i].quantity*state.portfolio[i].price;
          }
          state.funds+=price;
        }
      }
    },
  }
});
