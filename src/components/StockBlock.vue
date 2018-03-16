<template>
  <div class="block mt-3 ml-auto mr-auto">
    <div class="top pl-3">
      <slot></slot>
    </div>
    <form class="form-inline">
      <div class="form-group mx-sm-3 mb-2 mr-auto">
        <label for="inputPassword2" class="sr-only">Quantity</label>
        <input type="password" class="form-control" id="inputPassword2" placeholder="Quantity">
      </div>
      <button type="submit" class="btn btn-primary mb-2 ml-auto mr-1">Buy</button>
    </form>
  </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.block{
  border: 1px solid #e9eef2;
  padding: 0;
  font-size: 16px;
  border-radius: 10px;
  max-width: 360px;
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
