<template>
  <el-container>
    <el-header>
        <!-- 头部组件 对应headComponent -->
        <head-component></head-component>
    </el-header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>Main</el-main>
    </el-container>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script>
import headComponent from "@/components/Head/Head";

export default {
    name: 'System',
    components:{
        headComponent
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
    background-color: #D3DCE6;
    color: #333;
    line-height: 200px;
    height: calc(100vh - 120px);
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    line-height: 160px;
  }
</style>
