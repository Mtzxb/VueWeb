<template>
    <div>
        <div class='bg bg-blur'></div>
        <div style='height: 180px;'></div>
        <el-form :model='ruleForm2' :rules='rules2' ref='ruleForm2' label-position='left' label-width='0px'
                 class='demo-ruleForm login-container'>
            <h3 class='title'>系统登录</h3>
            <el-form-item prop='account'>
                <el-input type='text' v-model='ruleForm2.account' auto-complete='off' placeholder='请输入账号'></el-input>
            </el-form-item>
            <el-form-item prop='checkPass'>
                <el-input type='password' v-model='ruleForm2.checkPass' auto-complete='off' placeholder=''></el-input>
            </el-form-item>
            <el-checkbox v-model='checked' checked class='remember'>记住密码</el-checkbox>

            <el-form-item style='width:100%;'>
                <el-button type='primary' style='width:100%;' @click.native.prevent='handleSubmit2' :loading='logining'>
                    登录
                </el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import { requestLogin } from '../api/api'
export default {
    data () {
        return {
                logining: false,
                ruleForm2: {
                    account: ''
                },
                rules2: {
                    account: [
                        { required: true, message: '请输入账号', trigger: 'blur'}
                    ],
                    checkPass: [
                        { required: true, message: '请输入密码', trigger: 'blur'}
                    ]
                },
                checked: true
            }
    },
    methods: {
        handleReset2 () {
            this.$refs.ruleForm2.resetFields()
        },
        handleSubmit2 (ev) {
            var _this = this;
            this.$refs.ruleForm2.validate((valid) => {
                if (valid) {
                    this.logining = true;
                    var loginParams = { name: this.ruleForm2.account, pwd: this.ruleForm2.checkPass }
                    requestLogin(loginParams).then(data => {
                        console.log(data)
                        this.logining = false
                        if (!data.success) {
                            _this.$message({
                                message: data.msg,
                                type: 'error'
                            });
                        } else {

                            _this.$notify({
                                type: 'success',
                                message: '登录成功!',
                                duration: 3000
                            });

                            var token = data.token;
                            _this.$store.commit('saveToken', token)

                            var curTime = new Date()
                            var expiredate = new Date(curTime.setSeconds(curTime.getSeconds() + data.expires_in))
                            _this.$store.commit('saveTokenExpire', expiredate)
                            window.localStorage.refreshtime = expiredate
                            _this.getUserInfoByToken(token)
                        }
                    })
                } else {
                    return false
                }
            })
        }
    }
}

</script>

<style>
    .bg {
        margin: 0px;
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background: url(../assets/loginbck.png) no-repeat top left;
        background-repeat: no-repeat;
        background-size: cover;
        width: 100%;
        height: 100%;
    }

    .login-container {
        -webkit-border-radius: 5px;
        border-radius: 5px;
        -moz-border-radius: 5px;
        background-clip: padding-box;
        margin: auto;
        width: 350px;
        padding: 35px 35px 15px 35px;
        background: #fff;
        border: 1px solid #eaeaea;
        box-shadow: 0 0 25px #cac6c6;

        position: relative;
    }

    .login-container .title {
        margin: 0px auto 40px auto;
        text-align: center;
        color: #505458;
    }

    .login-container .remember {
        margin: 0px 0px 25px 0px;
    }
</style>
