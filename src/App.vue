<template>
  <div id="app">
    <div class="header">
      <span class="shopCartLbl">Clothing Store</span>
      <div class="spacer"></div>
      <font-awesome-icon icon="fa-solid fa-cart-shopping" />
      <div class="itemCounter">{{itemCount}}</div>
    </div>
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      itemCount: 0
    };
  },
  components: {
    
  }
}
</script>

<style>
body{
  margin: 0;
  padding: 0;
}
.header
{
  display: flex;
  align-items: center;
  flex-direction: row;
  height: 100px;
  background: rgb(60, 60, 60);
  color: white;
  font-size: 2rem;
}
.shopCartLbl
{
  margin-left: 80px;
}
.spacer
{
  width: 80%;
}
.itemCounter
{
  background: red;
  color: white;
  font-size: 1.2rem;
  position: relative;
  bottom: 20px;
  right: 5px;
}
</style>
