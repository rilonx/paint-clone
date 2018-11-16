<template>
  <div class="tab" @click="onActive()" :class="{'tab_active': tab.isActive}">
    <span class="tab__title">{{ tab.title }} {{ tab.id }}</span>
    <span class="fas fa-times tab__icon" @click.stop="onClose()"></span>
  </div>
</template>

<script lang="ts">
  import { Vue, Component, Prop } from 'vue-property-decorator';
  import Tab from '@/classes/Tab.class.ts';

  @Component({
    name: 'Tab'
  })

  class TabComponent extends Vue {
    @Prop({ required: true }) private tab!: Tab;

    constructor() {
      super();
    }
    public onClose() {
      this.$emit('close');
    }
    public onActive() {
      this.$emit('active');
    }
  }

  export default TabComponent;
</script>

<style scoped lang="stylus">
  .tab
    display inline-block
    cursor default
    border 1px solid #ddd
    padding 4px
    background-color #eee
    &_active
      background-color #fbfbfb

  .tab__title
    border-right 1px solid #ddd
    padding-right 4px

  .tab__icon
    font-size .8em
    vertical-align baseline
    padding-right 4px
    padding-left 4px
  .tab__icon:hover
    color #ddd
</style>
