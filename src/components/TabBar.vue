<template>
  <div class="tab-bar">
    <TabComponent v-for="tab in tabs"
         :key="tab.id"
         :tab="tab"
         @active="onActive(tab)"
         @close="onClose(tab)"
    />
  </div>
</template>

<script lang="ts">
  import { Vue, Component, Model } from 'vue-property-decorator';
  import Tab from '@/classes/Tab.class.ts';
  import TabComponent from '@/components/Tab.vue';

  @Component({
    name: 'Tab-bar',
    components: {
      TabComponent
    }
  })

  class TabsComponent extends Vue {
    @Model('input', { required: true }) public tabs!: Tab[];

    private currentTab: (Tab|null) = null;
    private prevTab: (Tab|null) = null;
    private localTabs: Tab[] = [];

    public onActive(selectedTab: Tab) {
      this.deactivateAllTabs();
      selectedTab.setIsActive(true);
      if (this.currentTab) {
        this.prevTab = Object.assign({}, this.currentTab);
      }
      this.currentTab = selectedTab;
      this.changeTabs();
    }
    public onClose(closedTab: Tab) {
      const index = this.tabs.indexOf(closedTab);
      this.localTabs = this.tabs.slice();
      this.localTabs.splice(index, 1);
      this.changeTabs();
    }
    private changeTabs() {
      this.$emit('input', this.localTabs);
    }
    private deactivateAllTabs() {
      this.localTabs.map((tabItem: Tab) => {
        tabItem.setIsActive(false);
      });
    }
  }

  export default TabsComponent;
</script>

<style scoped lang="stylus">
  .tab-bar
    min-height 29px
    border 1px solid #ccc
    border-top none
</style>
