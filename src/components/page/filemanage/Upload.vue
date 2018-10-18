<template>
    <el-dialog 
    :title="title" 
    :visible.sync="visible" 
    :before-close="closeHandler">
        <el-form 
        ref="form" 
        :model="fileList" 
        :rules="rules" 
        label-width="80px">
            <el-form-item label="文件名称" prop="name">
                <el-input v-model="fileList.name"></el-input>
            </el-form-item>
            <el-form-item label="文件描述" prop="desc">
                <el-input type="textarea" v-model="fileList.desc"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">提交</el-button>
                <el-button @click="closeAndResetDialog">取消</el-button>
            </el-form-item>
        </el-form>
    </el-dialog>
</template>

<script>
export default {
    name: 'upload',
    props: {
        visible: Boolean,
        title: String
    },
    data () {
        return {
            fileList: {
                file: {},
                name: '',
                desc: ''
            },
            rules: {
                name: [
                    {
                        required: true, message: '请输入文件名称', trigger: 'blur'
                    }, {
                        min: 1, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur'
                    }
                ]
        }
        }
    },
    methods: {
        closeHandler () {
            this.closeAndResetDialog()
        },
        onSubmit () {
            console.log('go')
        },
        closeAndResetDialog () {
            this.$refs['form'].resetFields()
            this.$emit("update:visible", false)
        },
        checkFileName (rule, value, callback) {

        }
    }
}
</script>

<style lang="scss" scoped>

</style>
