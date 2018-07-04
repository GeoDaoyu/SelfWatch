<template>
    <el-row>
        <el-col :span="22">
            <span>{{ userName }}</span>            
        </el-col>
        <el-col :span="2"><img :src="user" /></el-col>
    </el-row>
</template>

<script>
import user from '@/assets/user.png'
export default {
    name: 'headRight',
    data () {
        return {
            user,
            userName: '用户名'
        }
    }
}
</script>

<style lang="scss" scoped>
    .el-row {
    text-align: right;
    }
    img {
        padding: 10px;
    }
</style>