<template>
  <div class="row mt-5">
    <div class="col-6" v-for="elem in portfolio">
      <PortfolioBlock @soldAStock="sellStock($event,elem)">
        <span><b>{{elem.brand}}</b></span>
        <span>(Price: {{elem.price}} | Quantity: {{elem.quantity}})</span>
      </PortfolioBlock>
    </div>
  </div>
</template>
<script>
import PortfolioBlock from "./PortfolioBlock.vue"
import {mapGetters} from "vuex";
export default {

  components: {
    PortfolioBlock: PortfolioBlock
  },
  methods: {
    sellStock(e,elem) {
      // receive the input quantity from StockBlock, and combine with the stock properties rendered here
      var payLoad = {brand: elem.brand,quantity: e,price: elem.price};
      // need to construct a 'simple' object as payLoad, cannot pass in elem
      this.$store.commit("sellStock",payLoad);
      this.$store.commit("removeFromPortfolio",payLoad);
    }
  },
  computed: {
    ...mapGetters([
          "portfolio",
        ]),
  }
}
</script>
<style scoped>
</style>
