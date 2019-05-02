<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>This page is made by izumii19</h2>
    <br>
    <img src="../../assets/avatar.png" width="15%" height="15%">
  </div>
</template>

<script>
export default {
  name: 'topPage',
  data () {
    return {
      msg: 'Hello World !!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  color: deeppink;
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
