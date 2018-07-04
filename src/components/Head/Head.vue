<template>
    <el-row>
        <el-col :span="12"><head-left></head-left></el-col>
        <el-col :span="12"><head-right></head-right></el-col>
    </el-row>
</template>

<script>
import headLeft from "./headLeft";
import headRight from "./headRight";

export default {
    name: 'Head',
    components:{
        headLeft,
        headRight
    }
}
</script>

<style lang="scss" scoped>
$head-height: 60px;
.el-row {
    height: $head-height;
    line-height: $head-height;
    color: white;
}
</style>
