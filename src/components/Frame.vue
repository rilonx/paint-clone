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

    public canvas: (HTMLCanvasElement|null) = null;
    private drawer: (Drawer|null) = null;

    // Hooks
    public mounted() {
      this.canvas = this.$refs.canvas as HTMLCanvasElement;
      this.drawer = new Drawer(this.canvas);
    }
    public destroyed() {
      if (this.drawer) {
        this.drawer.destroy();
      }
    }
    // todo создаем экземпляр класса рисования на канвасе передаем в него элемент канваса. используем хури для дестроя
  }

  export default FrameComponent;
</script>

<style scoped lang="stylus">
  .canvas
    width 100%
    height 100%
    background #fff

</style>
