<template>
    <div>
        <el-button @click="dialogVisible = true">上传文件</el-button>
        <li v-for="item in fileList" :key="item">{{ item }}</li>
        <upload 
        :visible.sync="dialogVisible" 
        :title="dialogTitle">
        </upload>
        <el-button @click="deleteFile('113.txt')">删除文件</el-button>
        <br />
        <el-input type="text" v-model="fileName"></el-input>
        <el-button @click="downloadFile(fileName)">下载文件</el-button>
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
            fileName: '',
            dialogTitle: '添加文件',
            dialogVisible: false
        }
    },
    methods: {
        deleteFile (fileName) {
            this.$http.delete('/fs/public/' + fileName)
            .then(response => {
                console.log('ok')
                
            })
        },
        downloadFile (fileName) {
            this.$http.get('/fs/public/' + fileName)
            .then(response => {
                console.log('ok')
            })
            .catch(err => {
                console.log(err)
            })
        },

        getFileList () {
            // let that = this
            // this.$http.get('/fs/public')
            // .then(response => {
            //     that.fileList = response.data.fileList
            // })
        }
    },
    mounted: function () {
        this.getFileList()
    }
}
</script>

<style lang="scss" scoped>

</style>
