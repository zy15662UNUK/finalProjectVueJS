<template>
  <div id="">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Stock trader</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
          <router-link tag="li" to="/" exact active-class="active">
            <a class="nav-link">Home</a>
          </router-link>
          <router-link tag="li" to="/Portfolio" active-class="active">
            <a class="nav-link">Portfolio</a>
          </router-link>
          <router-link tag="li" to="/Stock" active-class="active">
            <a class="nav-link">Stocks</a>
          </router-link>
        </ul>
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#">End Day <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Save&Load
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Save</a>
              <a class="dropdown-item" href="#">Load</a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><b>Funds: $8.150</b></a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
<script>
export default {

}
</script>
<style scoped>
</style>
