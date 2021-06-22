<template>

  <section class="src-components-bar">
    <div class="jumbotron">
      <button id="reset" @click="resetGame()"> New colors </button>
      <span class="message" v-bind:style="{ color: showMessage != '' ? '#000000' : '#ffffff' }"> {{showMessage}} </span>

      <button id="easy" v-bind:style="{ color: !showIsHardMode ? 'white' : 'steelblue', 'background-color': !showIsHardMode ? 'steelblue' : 'white' }" @click="activeEasy()">easy</button>
      <button id="hard" v-bind:style="{ color: showIsHardMode ? 'white' : 'steelblue', 'background-color': showIsHardMode ? 'steelblue' : 'white' }" @click="activeHard()">hard</button>
    </div>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-bar',
    props: {
    },
    mounted () {
      let param = this.initParams(true)
      this.$store.dispatch('initGame', param)
    },
    data () {
      return {
      }
    },
    methods: {
      initParams(isHardMode){
        let colors = this.createNewColors(isHardMode);
        let picked = this.pickedColor(colors);
        let param = {
          isHard: isHardMode, 
          colors: colors,
          colorPicked: picked
        };
        return param;
      },
      activeEasy(){
        if(this.$store.state.isHardMode){
          let param = this.initParams(false)
          this.$store.dispatch('initGame', param)
        }
      },
      activeHard(){
        if(!this.$store.state.isHardMode){
          let param = this.initParams(true)
          this.$store.dispatch('initGame', param)
        }
      },
      createNewColors(isHardMode){
        var colors = [];
        let cant = isHardMode ? 6 : 3;
        for (var i = 0; i < cant; i++) {
          colors.push(this.createRandomStringColor());
        }
        return colors;
      },
      createRandomStringColor(){
        let newColor = "rgb(" + this.randomInt() + ", " + this.randomInt() + ", " + this.randomInt() + ")" ;
        return newColor;
      },
      randomInt(){
        return Math.floor(Math.random() * 256);
      },
      pickedColor(color){
        return color[Math.floor(Math.random()*color.length)]
      },
      resetGame(){
        let param = this.initParams(this.$store.state.isHardMode)
        this.$store.dispatch('initGame', param)
      }
    },
    computed: {
      showMessage() {
        return this.$store.state.messageInformation
      },
      showIsHardMode(){
        return this.$store.state.isHardMode
      }
    }
}


</script>

<style scoped lang="css">
  .src-components-bar {

  }

  .jumbotron {
    background: #ffffff;
    height: 30px;
    text-align: center;
    margin: 0;
    margin-top: -30px;
  }
  
  button {
    border: none;
    background-color: white;
    font-family: "Montserrat", "Avenir";
    text-transform: uppercase;
    height: 100%;
    font-weight: 700;
    letter-spacing: 1px;
    color: steelblue;
    transition: all 0.3s;
    outline: none;
  }
  
  .message {
    
    display: inline-block;
    width: 20%;
  }
  .selected {
    background-color: steelblue;
    color: white;
  }
</style>
