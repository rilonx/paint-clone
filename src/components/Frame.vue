<template>
  <canvas ref="canvas" class="canvas"></canvas>
</template>

<script lang="ts">
  import { Vue, Component, Prop } from 'vue-property-decorator';
  import Tab from '@/classes/Tab.class.ts';
  import Drawer from '@/classes/Drawer.class.ts';

  @Component({
    name: 'Frame'
  })

  class FrameComponent extends Vue {
    @Prop({ required: true })
    public tab!: Tab;
    // todo add watcher tab.active for blocking pint on the canvas
    public canvas: (HTMLCanvasElement|null) = null;
    private drawer: (Drawer|null) = null;

    // Hooks
    public mounted() {
      this.canvas = this.$refs.canvas as HTMLCanvasElement;
      if (this.canvas.parentElement) {
        this.canvas.width = this.canvas.parentElement.clientWidth;
        this.canvas.height = this.canvas.parentElement.clientHeight;
        this.drawer = new Drawer(this.canvas);
      }
    }
    public destroyed() {
      if (this.drawer) {
        this.drawer.destroy();
      }
    }
  }

  export default FrameComponent;
</script>

<style scoped lang="stylus">
  .canvas
    width 100%
    height 100%
    background #fff

</style>
