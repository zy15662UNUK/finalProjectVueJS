<template>
    <div class="container">
      <appHeader></appHeader>
      <Portfolio></Portfolio>
      <Stock></Stock>
    </div>
</template>

<script>
    import Header from "./components/Header.vue";
    import Portfolio from "./components/Portfolio.vue";
    import Stock from "./components/Stock.vue";

    export default {
      components: {
        appHeader: Header,
        Portfolio: Portfolio,
        Stock: Stock
      }
    }
</script>

<style>

</style>
