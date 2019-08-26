<template>
  <!-- 公共组件 -->
  <div class="home" style="height:100%;">
      <Layout>
          <Sider hide-trigger>
            <left-menu></left-menu>
          </Sider>
          <Layout>
            <Header>Header</Header>
            <Content> <router-view /></Content>
          </Layout>
        </Layout>
 
  </div>
</template>

<script>
  import leftMenu from '@/components/leftMenu.vue'

export default {
  name: "home",
  components: {
    leftMenu
  }
};
</script>

<style>

  .ivu-layout{
  height: 100%;
}
.ivu-layout-header{
  box-shadow: 0px 5px 10px 2px rgba(0,0,0,0.2) !important;
  background: #fff !important;
  /* position: fixed; */
    width: 100%;
    z-index: 10000;
    overflow: hidden;
}
.ivu-layout-content{
  padding-top: 74px;
  padding-left: 10px;
  height: calc(100%-64px);
  overflow: scroll;
}
</style>
