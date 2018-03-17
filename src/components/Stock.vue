<template>
  <div class="row mt-5">
    <div class="col-6" v-for="elem in stock">
      <StockBlock>
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
  components: {
    StockBlock: StockBlock
  },
  computed: {
    ...mapGetters([
          "stock",
        ]),
  }
}
</script>
<style scoped>
</style>
