<template>
  <div class="tool-bar">
    <button class="btn" title="New Document" @click="onCreateTab()">
      <i class="fas fa-folder-plus icon icon_big"></i>
    </button>
    <button class="btn btn_left-mrg" title="Save Document">
      <i class="fa fa-save icon icon_big"></i>
    </button>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';

  @Component({
    name: 'Toolbar'
  })

  class Toolbar extends Vue {
    public onCreateTab() {
      this.$emit('createTab');
    }
  }

  export default Toolbar;
</script>

<style scoped lang="stylus">
  .tool-bar
    background #eee
    padding 2px
    border 1px solid #ccc

</style>
