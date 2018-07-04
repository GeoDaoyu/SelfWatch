<template>
  <el-container>
    <el-header>
        <!-- 头部组件 对应headComponent -->
        <head-component></head-component>
    </el-header>
    <el-container>
      <el-aside width="200px"><aside-component></aside-component></el-aside>
      <el-main><router-view></router-view></el-main>
    </el-container>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script>
import headComponent from "@/components/Head/Head";
import asideComponent from "@/components/Aside/NavMenu";

export default {
    name: 'System',
    components:{
      headComponent,
      asideComponent
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  $system-color: #409EFF;
  .el-header, .el-footer {
    background-color: $system-color;
  }

  .el-aside {
    background-color: white;
    height: calc(100vh - 120px);
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    line-height: 160px;
  }
</style>
