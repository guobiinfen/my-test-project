<template>
  <!-- 公共组件 -->
  <div class="home" style="height:100%;">
      <Layout>
         <div :class="{'collapse-sider':!collapse}" class="main-base-wrap" @mouseenter="enterMenu" @mouseleave="leaveMenu" style="height:100%;background: #515a6e;">
            <Sider  class="collapseClass" >
            <left-menu></left-menu>
          </Sider>
         </div>
          <Layout>
            <Header>Header</Header>
            <Content> <router-view /></Content>
          </Layout>
        </Layout>
 
  </div>
</template>

<script>
import leftMenu from "@/components/leftMenu.vue";
import { setTimeout } from "timers";

export default {
  name: "home",
  data() {
    let collapse = localStorage.getItem("APP_SIDERBAR_COLLAPSE");
    return {
      //是否锁定hover效果
      hoverOnLockBtn: false,
      //是否折叠导肮
      collapse
    };
  },
  components: {
    leftMenu
  },
  methods: {
    enterMenu() {
      setTimeout(() => {
        console.log("yurule");
        if (!this.hoverOnLockBtn) {
          this.toggleCollapse(true);
        }
      }, 0);
    },
    leaveMenu() {
      setTimeout(() => {
        console.log("yuchule");
        if (!this.hoverOnLockBtn) {
          this.toggleCollapse(false);
        }
      }, 0);
    },
    toggleCollapse(collapse) {
      this.collapse = collapse;
      localStorage.setItem("APP_SIDERBAR_COLLAPSE", this.collapse);
    }
  },
  created(){
    this.$api.user.login({name:'fenfen'}).then(res=>{
    })
  }
};
</script>

<style lang="less">
.ivu-layout {
  height: 100%;
}
.ivu-layout-header {
  box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.2) !important;
  background: #fff !important;
  width: 100%;
  z-index: 10000;
  overflow: hidden;
}
.ivu-layout-content {
  padding-top: 74px;
  padding-left: 10px;
  height: calc(100%-64px);
  overflow: scroll;
}

.home {
  .main-base-wrap {
    .collapseClass{
      height: 100%;
      transition: all .3s;
    } 
    &.collapse-sider {
      /deep/.collapseClass {
        width: 80px !important;
        min-width: 80px !important;
        flex: 0 !important;
        height: 100%;
      }

      /deep/.left-menu {
        // width: 80px !important;
        .menu {
          width: 200px;
          .title-text {
            color: transparent;
          }
        }
      }
      /deep/.ivu-menu-submenu-title {
        margin-left: -66px;
      }
    }
  }
}
</style>
