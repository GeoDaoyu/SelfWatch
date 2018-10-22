<template>
    <div>
        <el-form>
            <el-form-item>
            <h1>Log In</h1>
            </el-form-item>
            <el-form-item >
            <el-input type="text" placeholder="用户名" ref="userName" @keyup.enter.native="logIn"></el-input>
            </el-form-item>
            <el-form-item>
            <el-input size="medium" type="password" placeholder="密码" @keyup.enter.native="logIn"></el-input>
            </el-form-item>
            <el-form-item>
            <el-button plain @click="logIn" class="btn">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    name: 'Login',
    methods: {
        logIn: function () {
            this.$router.push({path: '/system'})
        }
    },
    mounted () {
        this.$refs['userName'].focus()
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    div {
        height: 100%;
        width: 100%;
        background-color: #409EFF;
    }
</style>
