<template>
    <div>
        <li v-for="item in fileList" :key="item">{{ item }}</li>
        <upload 
        :visible.sync="dialogVisible" 
        :title="dialogTitle">
        </upload>
        <el-form ref="form" :model="form" :inline="true" label-width="80px">
            <el-form-item label="我是谁">
                <el-input v-model="form.userName" @blur="getUserName"></el-input>
            </el-form-item>
            <el-form-item label="文件名称">
                <el-input v-model="form.fileName"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button @click="dialogVisible = true">上传文件</el-button>
                <el-button @click="downloadFile()">下载文件</el-button>
                <el-button @click="deleteFile()">删除文件</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import Upload from './Upload'
export default {
    name: 'File',
    components: {
        Upload
    },
    data () {
        return {
            fileList: [],
            form: {
                fileName: '',
                userName: ''
            },
            dialogTitle: '添加文件',
            dialogVisible: false
        }
    },
    methods: {
        deleteFile () {
            this.$http.delete('/fs/public/' + this.form.fileName)
            .then(response => {
                this.$message({
                    message: '删除文件成功',
                    type: 'success'
                });
            })
            .catch(err => {
                this.$message.error('删除文件失败');
                console.log(err)
            })
        },
        downloadFile () {
            window.open('http://127.0.0.1:3000/fs/public/' + this.form.fileName, '_self')
            // this.$http.get('/fs/public/' + fileName)
            // .then(response => {
            //     console.log('ok')
            // })
            // .catch(err => {
            //     console.log(err)
            // })
        },

        getFileList () {
            // let that = this
            // this.$http.get('/fs/public')
            // .then(response => {
            //     that.fileList = response.data.fileList
            // })
        },

        // 下面的都是为测试提供便利的函数
        // 获取用户名，以后替换为在登录时就获取到，至于存哪儿，再说
        getUserName () {
            sessionStorage.setItem('userName', this.form.userName)
        }
    },
    mounted: function () {
        this.getFileList()
    }
}
</script>

<style lang="scss" scoped>

</style>
