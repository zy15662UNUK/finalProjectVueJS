<template>
  <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1 class="display-3">Trade or View your Portfolio</h1>
      <p class="lead">You may Save & Load your Data.</p>
      <p class="lead">Click on "End Day" to begin a new day.</p>
      <hr>
      <h3 class="display-5">Your Funds: ${{funds}} </h3>
    </div>
  </div>
</template>
<script>
import {mapGetters} from "vuex";
export default {
  computed: {
    ...mapGetters([
          "funds",
        ]),
  }
}
</script>
<style scoped>
.jumbotron{
  background-color: white;
  border: 1px solid #e9ecef;
}
</style>
