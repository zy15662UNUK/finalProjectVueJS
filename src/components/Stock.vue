<template>
  <div class="row mt-5">
    <div class="col-6" v-for="elem in stock">
      <StockBlock @boughtAStock="submitBought($event,elem)">
        <span><b>{{elem.brand}}</b></span>
        <span>(Price: {{elem.price}})</span>
      </StockBlock>
    </div>
  </div>
</template>
<script>
import StockBlock from "./StockBlock.vue"
import {mapGetters} from "vuex";
export default {
  data: function(){
    return {

    };
  },
  components: {
    StockBlock: StockBlock
  },
  computed: {
    ...mapGetters([
          "stock",
        ]),
  },
  methods: {
    submitBought(e,elem) {
      // receive the input quantity from StockBlock, and combine with the stock properties rendered here
      var payLoad = {brand: elem.brand,quantity: e,price: elem.price};
      // need to construct a 'simple' object as payLoad, cannot pass in elem
      this.$store.commit("addToPortfolio",payLoad);
      this.$store.commit("buyStock",payLoad);
    }
  }
}
</script>
<style scoped>
</style>
