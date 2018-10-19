<template>
    <el-dialog 
    :title="title" 
    :visible.sync="visible" 
    :before-close="closeHandler">
        <el-form 
        ref="form" 
        :model="fileList" 
        :rules="rules" 
        label-width="80px"
        status-icon
        size="small">
            <el-form-item label="文件" prop="file">
                <el-upload 
                ref="upload" 
                action="" 
                :on-change="handleChange"
                :auto-upload="false" 
                :multiple="false"
                :show-file-list="false">
                    <el-button type="primary">选择文件</el-button>
                </el-upload>
            </el-form-item>
            <el-form-item label="名称" prop="name">
                <el-input v-model="fileList.name" placeholder="选择文件后，名称自动获取"></el-input>
            </el-form-item>
            <el-form-item label="描述" prop="desc">
                <el-input 
                type="textarea" 
                v-model="fileList.desc" 
                placeholder="请输入描述" 
                :autosize="{ minRows: 2}"
                maxlength="200">
                </el-input>
                <span class="textareaCount"> {{ textareaCount }}</span>
            </el-form-item>
            <el-form-item style="text-align: right;">
                <el-button type="primary" @click="onSubmit('form')">提交</el-button>
                <el-button @click="closeAndReset('form')">取消</el-button>
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
        let checkFileName = (rule, value, callback) => {
            if (!value) {
                callback(new Error('文件名不能为空'));
            } else  {
                let count = this.queryCountByName(value)
                const reg = new RegExp('^[^\\\\\\/:*?\\"<>|]+$')
                if (count > 0) {
                    callback(new Error('文件名已存在'));
                } else if (!reg.test(value)) {
                    callback(new Error('文件名称不能包含特殊字符'));
                } else {
                    callback();
                }
            }
                
        };
        return {
            fileList: {
                file: {},
                name: '',
                desc: ''
            },
            rules: {
                file: [{
                    required: true
                }],
                name: [
                    {
                        required: true, message: '请输入文件名称', trigger: 'blur'
                    }, {
                        max: 20, message: '长度不能大于 20 个字符', trigger: 'blur'
                    }, {
                        validator: checkFileName, trigger: 'change'
                    }
                ],
                desc: [
                    {
                        required: true, message: '请输入文件描述', trigger: 'blur'
                    }, {
                        min: 5, message: '至少输入 5 个字符', trigger: 'blur'
                    },
                ]
            },
            textareaCount: 200
        }
    },
    methods: {
        closeHandler () {
            this.closeAndReset('form')
        },
        onSubmit (formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    // do submit
                } else {
                    return false;
                }
            });
        },
        closeAndReset (formName) {
            this.$refs[formName].resetFields()
            this.$refs['upload'].clearFiles()
            this.$emit("update:visible", false)
        },
        // 临时测试函数，以后替换为用文件名查询当前用户的文件列表，结果返回count
        queryCountByName (name) {
            let count = 0
            const names = [
                'abc', 'aaa', 'ccc'
            ]
            for (let item of names.values()) {
                if (name === item) {
                    count++
                }
            }
            return count
        },
        handleChange(file) {
            this.fileList.file = file.raw
            this.fileList.name = file.name
        }
    },
    watch: {
        fileList: {
            deep: true,
            handler: function (newVal, oldVal) {
                this.textareaCount = 200 - newVal.desc.length
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.textareaCount {
    position:absolute;
    right: 5px;
    bottom: 5px; 
    color: #dcdfe6;
    line-height: 1.5;
    font-size: small;
}
</style>
