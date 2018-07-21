<template>
    <el-row>
        <el-col :span="2"><i class="el-icon-star-on"></i></el-col>
        <el-col :span="22">
            <span class="title">A Vue.js project->SelfWatch</span>
        </el-col>
    </el-row>
</template>

<script>
export default {
    name: 'headLeft',
    data () {
        return {
        }
    }
}
</script>

<style lang="scss" scoped>
    span {
        font-size: 25px;
    }
    i {
        font-size: 30px;
        padding: 15px;
    }
</style>