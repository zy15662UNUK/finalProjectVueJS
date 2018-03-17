<template>
  <div class="row mt-5">
    <div class="col-6" v-for="elem in portfolio">
      <PortfolioBlock>
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
  computed: {
    ...mapGetters([
          "portfolio",
        ]),
  }
}
</script>
<style scoped>
</style>
