<template>
  <div id="">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Stock trader</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
          <router-link tag="li" to="/" exact active-class="active">
            <a class="nav-link">Home</a>
          </router-link>
          <router-link tag="li" to="/Portfolio" active-class="active">
            <a class="nav-link">Portfolio</a>
          </router-link>
          <router-link tag="li" to="/Stock" active-class="active">
            <a class="nav-link">Stocks</a>
          </router-link>
        </ul>
        <ul class="navbar-nav">
          <li class="nav-item" @click="endDay">
            <a class="nav-link" href="#">End Day <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Save&Load
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#" @click="save">Save</a>
              <a class="dropdown-item" href="#" @click="load">Load</a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><b>Funds: ${{funds}}</b></a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
<script>
import {mapGetters} from "vuex";
var save;
export default {
  computed: {
    ...mapGetters([
          "funds",
        ]),
  },
  methods: {
    endDay() {
      this.$store.commit("dayEnd");
    },
    save(){
      // save into local local var 'save'
      // push to firebase, override the exist store by 'put' request
      save = {stock: [],portfolio:[]};
      this.saveHelp(save.stock,this.$store.state.stock);
      this.saveHelp(save.portfolio,this.$store.state.portfolio);
      save.funds=this.$store.state.funds;
      this.$http.put('https://vuejs-http-request-af190.firebaseio.com/data.json',save)
      .then(function(response){
        console.log(response);
      },function(error){
        console.log(error);
      });
      alert("saved")
    },
    load(){
      // download from the firebase and override local state by call mutation "load"
      this.$http.get('https://vuejs-http-request-af190.firebaseio.com/data.json')
      .then(
         function(response){
           return response.json();
           // .json() is to parse the jason
           // The response is a promise not object
         }
      )
   // Get response data is Async, need another .then() to accept the data
      .then(function(data){
         this.$store.commit("load",data);
      });
    },
    saveHelp(save,target){
      // to put contents in taget into save
      for(var i=0;i<target.length;i++){
        save.push({});
        for(var key in target[i]){
          console.log(key);
          save[i][key] = target[i][key];
        }
      }
    }
  }
}
</script>
<style scoped>
</style>
