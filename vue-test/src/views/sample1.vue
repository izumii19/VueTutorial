<template>
  <div id="app">
    <p>{{ message }}</p>
    <p>{{ message2 }}</p>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      message: "Hello Vue.js!",
      message2: "データをバインドさせて表示してます"
    };
  }
};
</script>
 
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  border: 1px solid blue;
}
p {
  color: blue;
}
</style>