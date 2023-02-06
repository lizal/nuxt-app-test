<template>
  <el-container>
    <el-header>
      <h1>home</h1>
      <router-link to="/login">登录</router-link>
    </el-header>
    <el-main> </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'IndexPage',
  created() {
    // const token = localStorage.getItem('token')
  },
}
</script>
