<template>
    <el-row>
        <el-col :span="22">
            <span>{{ userName }}</span>            
        </el-col>
        <el-col :span="2"><i class="el-icon-service"></i></el-col>
    </el-row>
</template>

<script>
export default {
    name: 'headRight',
    data () {
        return {
            userName: 'UserName'
        }
    }
}
</script>

<style lang="scss" scoped>
    .el-row {
        text-align: right;
    }
    i {
        font-size: 30px;
        padding: 15px;
    }
</style>