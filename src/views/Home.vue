<template>
  <div class="home">
    <Toolbar @createTab="onCreateTab()"/>
    <Tab-bar v-model="tabs" />
    <Workspace :tabs="tabs" />
  </div>
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator';
  import Toolbar from '@/components/Toolbar.vue';
  import TabBar from '@/components/TabBar.vue';
  import Workspace from '@/components/Workspace.vue';

  import Tab from '@/classes/Tab.class.ts';

  @Component({
    name: 'home',
    components: {
      Toolbar,
      TabBar,
      Workspace,
    }
  })

  class Home extends Vue {
    public tabs: Tab[] = [];

    // public methods
    public onCreateTab() {
      this.addTab();
    }

    // private methods
    private getLastTab(): (Tab|null) {
      const tabsAmount = this.tabs.length;
      return tabsAmount > 0 ? this.tabs[tabsAmount - 1] : null;
    }
    private addTab() {
      const lastTab = this.getLastTab();
      const lastTabIndex = lastTab ? lastTab.id + 1 : 0;
      this.tabs.map((tab: Tab) => {
        if (tab.getIsActive()) {
          tab.setIsActive(false);
        }
      });
      this.tabs.push(new Tab(lastTabIndex, 'tabName'));
    }
  }

  export default Home;
</script>

<style lang="stylus">
  .home
    display grid
    height calc(100vh - 12px)
    grid-template-rows 31px 29px 1fr
</style>