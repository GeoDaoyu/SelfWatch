<template>
    <div>
        <el-button @click="dialogVisible = true">上传文件</el-button>
        <li v-for="item in fileList" :key="item">{{ item }}</li>
        <upload 
        :visible.sync="dialogVisible" 
        :title="dialogTitle">
        </upload>
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
            dialogTitle: '添加文件',
            dialogVisible: false
        }
    },
    mounted: function () {
        let that = this
        this.$http.get('/fs/public')
        .then(response => {
            that.fileList = response.data.fileList
        })
        console.log(this.fileList)
    }
}
</script>

<style lang="scss" scoped>

</style>
