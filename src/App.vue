<template>
  <div id="app">
    <Home/>
  </div>
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator';
  import Home from '@/views/Home.vue';

  @Component({
    name: 'app',
    components: {
      Home
    }
  })

  class App extends Vue {

  }

  export default App;
</script>

<style lang="stylus">
  $fontColor = #2c3e50

  body
    margin 0
    padding 6px

  #app
    @font-face
      font-family 'Roboto Condensed'
      src url(./assets/fonts/RobotoCondensed-Regular.ttf)
    font-family 'Roboto Condensed', Helvetica, Arial, sans-serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    color $fontColor

  #nav
    padding 30px
    a
      font-weight bold
      color $fontColor
      &.router-link-exact-active
        color #42b983

  .btn
    outline none
    &_left-mrg
      margin-left 2px

  .icon
    color $fontColor

  .icon_big
    font-size 1.4em

</style>
