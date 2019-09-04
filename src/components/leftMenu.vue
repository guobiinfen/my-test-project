<template>
    <div class="left-menu" style="height:100%;">
        <div class="logo" style="height: 64px;display: block;">LOGO</div>
        <div class="menu" style="height:calc(100% - 64px);overflow-y:scroll;">
                <Menu width="200" theme="dark" accordion >
                    <Submenu name="1">
                        <template slot="title">
                                <router-link to="/home"> <Icon size='30' type="ios-paper" /> <span class="title-text">内容管理</span></router-link> 
                           
                        </template>
                        <MenuItem name="1-1">文章管理</MenuItem>
                        <MenuItem name="1-2">评论管理</MenuItem>
                        <MenuItem name="1-3">举报管理</MenuItem>
                    </Submenu>
                    <Submenu name="2">
                        <template slot="title">
                             <router-link to="/about/about1"><Icon size='30' type="ios-people" /> <span class="title-text">账户管理</span></router-link> 
                          
                        </template>
                        <MenuItem name="2-1">新增用户</MenuItem>
                        <MenuItem name="2-2">活跃用户</MenuItem>
                    </Submenu>
                    <Submenu name="3">
                        <template slot="title">
                            <router-link to="/echarts/echarts1"> <Icon size='30' type="ios-stats" />  <span class="title-text">统计分析</span></router-link> 
                           
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
        data(){
            return{
               
            }
        },
        components: {
        }
    };
</script>

<style type="text/less" scoped lang="less">
    
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