<template>
    <div>
        <el-button @click="dialogVisible = true">上传文件</el-button>
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
            dialogTitle: '添加文件',
            dialogVisible: false
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
