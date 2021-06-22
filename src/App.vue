<template>
  <div id="app">
    <div class="jumbotron">
      <br>
      <Color />
      <Bar />
      <ColorOption />
    </div>
  </div>
</template>

<script>
import Color from './components/Color.vue'
import Bar from './components/Bar.vue'
import ColorOption from './components/ColorOptions.vue'

export default {
  name: 'App',
  components: {
    Color,
    Bar,
    ColorOption
  },
  data() {
    return {
    }
  },
  methods:{

  }
}
</script>

<style scoped lang="css">
  #app {

  }

  h1 {
    color: rgb(5 36 68);
  }
  .jumbotron {
    background: #232323;
  }
</style>
