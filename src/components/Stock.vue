<template>
  <div class="row mt-5">
    <div class="col-6">
      <StockBlock>
        <span><b>BMW</b></span>
        <span>(Price: 75)</span>
      </StockBlock>
    </div>
  </div>
</template>
<script>
import StockBlock from "./StockBlock.vue"
export default {
  components: {
    StockBlock: StockBlock
  }
}
</script>
<style scoped>
</style>
