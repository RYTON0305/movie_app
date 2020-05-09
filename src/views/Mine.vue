<template>
  <div>
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button
          color="#ffd600"
          round
          block
          type="info"
          native-type="submit"
        >
          登录
        </van-button>
      </div>
    </van-form>
    <div class="bottom">
      <div class="left">立即注册</div>
      <div class="right">找回密码</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Mine',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    onSubmit(values) {
      console.log('submit', values)
    }
  }
}
</script>
<style lang="less" scoped>
.bottom {
  display: flex;
  color: #ffd600;
  justify-content: space-between;
  font-size: 12px;
  margin: 0 20px;
}
</style>
