<template>
    <el-row>
        <el-col :span="2"><img :src="logo" /></el-col>
        <el-col :span="22">
            <span class="title">A Vue.js project->SelfWatch</span>
        </el-col>
    </el-row>
</template>

<script>
import logo from '@/assets/logo.png'
export default {
    name: 'headLeft',
    data () {
        return {
            logo
        }
    }
}
</script>

<style lang="scss" scoped>
    span {
        font-size: 25px;
    }
</style>