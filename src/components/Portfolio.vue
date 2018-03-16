<template>
  <div class="row mt-5">
    <div class="col-6">
      <PortfolioBlock>
        <span><b>BMW</b></span>
        <span>(Price: 75)</span>
      </PortfolioBlock>
    </div>
  </div>
</template>
<script>
import PortfolioBlock from "./PortfolioBlock.vue"
export default {
  components: {
    PortfolioBlock: PortfolioBlock
  }
}
</script>
<style scoped>
</style>
