<template>
  <div class="workspace">
    <div class="frame" v-for="tab in tabs" :class="{'frame_show': tab.isActive}">
      <Frame-space :tab="tab" />
    </div>
  </div>
</template>

<script lang="ts">
  import { Vue, Component, Prop } from 'vue-property-decorator';
  import Tab from '@/classes/Tab.class.ts';
  import FrameSpace from '@/components/Frame.vue';

  @Component({
    name: 'Workspace',
    components: {
      FrameSpace
    }
  })

  class WorkspaceComponent extends Vue {
    @Prop({ required: true }) public tabs!: Tab[];
  }

  export default WorkspaceComponent;
</script>

<style scoped lang="stylus">
  .workspace
    position relative
    border 1px solid #ccc
    border-top none
    overflow auto
    background #eee
  .frame
    position absolute
    top 0
    left 0
    width 100%
    height 100%
    padding 4px
    box-sizing border-box
    z-index 1
    background #eee
    &_show
      z-index 2

</style>
