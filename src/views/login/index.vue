<template>
  <el-card class="login" shadow="always" :body-style="{ padding: '20px' }">
    <div slot="header" class="title">
      <span>登录</span>
    </div>
    <el-form :model="form" ref="formRef" :rules="rulesForm" :inline="false" size="normal">
      <el-form-item prop="username">
        <el-input v-model="form.username" prefix-icon="el-icon-user"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" v-model="form.password" prefix-icon="el-icon-lock" show-password></el-input>
      </el-form-item>
      <el-form-item class="btns">
        <el-button type="primary" @click="handleLogin('formRef')" :loading="isLogin">登录</el-button>
        <el-button type="info" @click="handleReset('formRef')">重置</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>
<script>
import { login } from '@/api';
export default {
  data() {
    return {
      isLogin: false,
      form: {
        username: 'admin',
        password: '123456',
      },
      rulesForm: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 8, message: '长度在 3 到 8 个字符', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 5, max: 12, message: '长度在 5 到 12 个字符', trigger: 'blur' },
        ],
      },
    };
  },
  methods: {
    handleLogin(refName) {
      this.$refs[refName].validate((valid) => {
        if (valid) {
          this.$store.dispatch('user/login', this.form).then((res) => {
            console.log(res);
            // this.$router.push('/');
          });
        }
      });
    },
    handleReset(refName) {
      this.$refs[refName].resetFields();
    },
  },
};
</script>
<style lang="scss" scoped>
.login {
  width: 25rem;
  margin: 100px auto;
  .title {
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
  }
  .btns {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
}
</style>
