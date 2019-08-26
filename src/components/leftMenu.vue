<template>
    <div class="left-menu" style="height:100%;">
        <div class="logo" style="height: 64px;display: block;">LOGO</div>
        <div class="menu" style="height:calc(100% - 64px);overflow-y:scroll;">
                <Menu width="auto" theme="dark" >
               
                        <router-link to="/about/about">about</router-link>
                        <router-link to="/echarts/echarts">Echarts</router-link>
                    <Submenu name="1">
                        <template slot="title">
                                <router-link to="/home"> <Icon type="ios-paper" /> 内容管理</router-link> 
                           
                        </template>
                        <MenuItem name="1-1">文章管理</MenuItem>
                        <MenuItem name="1-2">评论管理</MenuItem>
                        <MenuItem name="1-3">举报管理</MenuItem>
                    </Submenu>
                    <Submenu name="2">
                        <template slot="title">
                            <Icon type="ios-people" /> 用户管理
                        </template>
                        <MenuItem name="2-1">新增用户</MenuItem>
                        <MenuItem name="2-2">活跃用户</MenuItem>
                    </Submenu>
                    <Submenu name="3">
                        <template slot="title">
                            <Icon type="ios-stats" /> 统计分析
                        </template>
                        <MenuGroup title="使用">
                            <MenuItem name="3-1">新增和启动</MenuItem>
                            <MenuItem name="3-2">活跃分析</MenuItem>
                            <MenuItem name="3-3">时段分析</MenuItem>
                        </MenuGroup>
                        <MenuGroup title="留存">
                            <MenuItem name="3-4">用户留存</MenuItem>
                            <MenuItem name="3-5">流失用户</MenuItem>
                        </MenuGroup>
                    </Submenu>
                </Menu>
        </div>
    </div>
</template>

<script>

    export default {
        name: "leftMenu",
        components: {
        }
    };
</script>

<style  scoped lang="less">
    .left-menu{
        overflow: hidden;
        .logo{
            font-weight: 800;
            color:#fff;
            line-height:64px;
        }
        .menu {
           color:#ccc;
        }
    }
    .menu::-webkit-scrollbar {display:none};

</style>