<template>
  <div>
    <h1>键盘事件</h1>
    <label>姓名：</label>
    <input type="text" @click="logName"/>
    <label>年龄</label>
    <input type="text" @click="logAge"/>
  </div>
</template>

<script>
export default {
  return: {
    methods: {
      logName: function () {
        console.log('你正在输入名字')
      },
      logAge: function () {
        console.log('你正在输入年龄')
      }
    }
  }
}
</script>

<style scoped></style>
