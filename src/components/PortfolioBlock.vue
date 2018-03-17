<template>
  <div class="block mt-3 ml-auto mr-auto">
    <div class="top pl-3">
      <slot></slot>
    </div>
    <form class="form-inline">
      <div class="form-group mx-sm-3 mb-2 mr-auto">
        <label class="sr-only">Quantity</label>
        <input v-model="sellQuantity" type="text" class="form-control" placeholder="Quantity">
      </div>
      <button @click="sellAStock" type="submit" class="btn btn-primary mb-2 ml-auto mr-1">Sell</button>
    </form>
  </div>
</template>
<script>
export default {
  data: function(){
    return {
      sellQuantity: ""
    };
  },
  methods: {
    sellAStock() {
      var quantity = parseInt(this.sellQuantity);
      if(quantity > 0){
        this.$emit("soldAStock",quantity);
      }else{
        alert("The quantity input must be greater than 0!!");
      }
    }
  }
}
</script>
<style scoped>
.block{
  border: 1px solid #e9eef2;
  padding: 0;
  font-size: 16px;
  border-radius: 10px;
  max-width: 500px;
}
.top{
  background-color: #fc74bc;
  padding-top: auto;
  height: 30px;
  margin-bottom: 10px;
}
button{
  background-color: #fc74bc;
  border-color: #fc74bc;
}
</style>
