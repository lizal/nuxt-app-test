<template>
  <div class="login-page">
    <div class="login-wrap">
      <div class="login-group">
        <el-input
          v-model="username"
          prefix-icon="el-icon-user"
          placeholder="请输入用户名"
        ></el-input>
      </div>
      <div class="login-group">
        <el-input
          v-model="password"
          type="password"
          prefix-icon="el-icon-lock"
          placeholder="请输入密码"
        ></el-input>
      </div>
      <el-button type="primary" @click="login">登录</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    login() {
      this.$api.commonApi
        .postAction('/api/sys/loginwithoutyzm', {
          username: this.username,
          password: this.password,
        })
        .then((res) => {
          if (res.success) {
            this.$cookies.set('token', res.result.token)
            localStorage.setItem('user', JSON.stringify(res.result.userInfo))
            this.$router.push('/')
          } else {
            this.$message(res.message)
          }
        })
    },
  },
}
</script>
<style lang="scss" scoped>
.login-page {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.login-wrap {
  width: 460px;
  padding: 20px;
  margin: 0 auto;
  text-align: center;
  border: 1px solid #ddd;
}
.login-group {
  margin-bottom: 20px;
}
</style>
