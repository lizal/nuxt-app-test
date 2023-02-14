<template>
  <el-container>
    <el-header class="header-wrap">
      <div class="logo">logo 系统名称</div>
      <div v-if="user.realname">{{ user.realname }}</div>
      <router-link v-else to="/login">登录</router-link>
    </el-header>
    <el-main class="main">
      <div class="main-content"></div>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      user: {},
    }
  },
  // async getPageData({$api}) {
  //   let responseData = await $api.commonApi.get('').then(res => {
  //     return res.result
  //   })
  //   return responseData
  // },
  mounted() {
    this.user = JSON.parse(localStorage.getItem('user') || '{}')
    console.log(this.user)
  },
}
</script>

<style lang="scss" scoped>
.el-container {
  height: 100%;
}
.header-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.main {
  height: calc(100% - 60px);
  background-color: #f1f1f1;
}
</style>
