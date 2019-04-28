

<template>
   <div id="app"> 
      <transition v-if="!$route.meta.NoNeedHome">
         <el-row class='container' >
             <el-col :span='24' class='header'>
                    <el-col :span="10" class="logo" >
                      <div >欢迎您！</div> {{msg}}
                    </el-col>
                   
                    <el-col :span="4" class="userinfo">
                        <el-dropdown trigger="hover">
                    <span class="el-dropdown-link userinfo-inner">
                        XX
                        <img src="./assets/logo.png" height="128" width="128"/>
                    </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>我的消息</el-dropdown-item>
                                <el-dropdown-item>设置</el-dropdown-item>
                                <el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </el-col>
             </el-col>
             <div class="line"></div>
             <el-col>
                   <el-menu
                    :default-active="$route.path"
                    router
                    class="el-menu-demo"
                    mode="horizontal"
                    @select="handleSelect"
                    :collapse="isCollapse"
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#ffd04b">
                    <el-menu-item index='/Home/Index'>首页</el-menu-item>
                    <el-submenu index="2">
                        <template slot="title">产品管理</template>
                        <el-menu-item index='/Product/ProductList'>产品列表</el-menu-item>
                        <el-menu-item index='/Product/Create'>上传产品</el-menu-item>
                        <el-menu-item index='/Product/ProductEdit'>货品浏览记录</el-menu-item>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title">订单管理</template>
                        <el-menu-item index="/Order">订单列表</el-menu-item>
                        <el-menu-item index="/Order/Edit">订单操作</el-menu-item>
                    </el-submenu>
                    <el-submenu index="4">
                        <template slot="title">系统管理</template>
                        <el-menu-item index="4-1">管理员列表</el-menu-item>
                        <el-menu-item index="4-2">管理员权限</el-menu-item>
                        <el-menu-item index="4-3">价格配置</el-menu-item>
                        <el-menu-item index="4-4">通知设置</el-menu-item>
                    </el-submenu>
                  </el-menu>
             </el-col>

             <el-col>
                     <el-breadcrumb separator="/" class="breadcrumb-inner">
                            <el-breadcrumb-item  v-for="item in $route.matched" :key="item.path">
                               <span style=""> {{ item.name }}</span>
                            </el-breadcrumb-item>
                    </el-breadcrumb>
                    
             </el-col>

             <el-col  class='main' >
                    <transition name="fade" mode="out-in">
                            <div class="content-az">
                                <router-view></router-view>
                            </div>
                      </transition>
             </el-col>

          </el-row>
        
      </transition>

      <transition v-else name="fade" mode="out-in">
            <div class="content-az">
                <router-view></router-view>
            </div>
        </transition>
   </div>
</template>
 

<script>
export default {
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      msg: '5555',
      isCollapse: false
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}

</script>


<style lang="css">
@import "./style/home.css";
    .el-menu-vertical-demo {
        /*width: 230px;*/
    }

    .el-breadcrumb{
        line-height: 60px !important;
    }

    .tags {
        position: relative;
        overflow: hidden;
        border: 1px solid #f0f0f0;
        margin-bottom: 20px;
        background: #f0f0f0;
    }

    .tags ul {
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        padding:0;
        margin: 0;
    }

    .tags-li {
        float: left;
        margin: 3px 5px 2px 3px;
        border-radius: 3px;
        font-size: 13px;
        overflow: hidden;
        height: 23px;
        line-height: 23px;
        border: 1px solid #e9eaec;
        background: #fff;
        padding: 3px 5px 4px 12px;
        vertical-align: middle;
        color: #666;
        -webkit-transition: all .3s ease-in;
        transition: all .3s ease-in;
    }
    .tags-li-icon{
        cursor: pointer;
    }

    .tags-li:not(.active):hover {
        background: #f8f8f8;
    }

    .tags-li-title {
        float: left;
        max-width: 80px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin-right: 5px;
        color: #666;
        text-decoration: none;
    }

    .tags-li.active {
        /*color: #fff;*/
        /*border: 1px solid #10B9D3;*/
        /*background-color: #10B9D3;*/
    }

    .tags-li.active .tags-li-title {
        /*color: #fff;*/
    }

    .tags-close-box {
        box-sizing: border-box;
        text-align: center;
        z-index: 10;
        float: right;
        margin-right: 1px;
        line-height: 2;
    }
.line {
    height: 1px;
    background-color: #e0e6ed;
    margin:35px 0 0 0
}

</style>