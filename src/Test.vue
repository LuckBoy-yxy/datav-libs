<template>
  <div class="test">{{ message }}</div>
</template>

<script>
  export default {
    name: 'TestCom',
    setup() {
      const message = '大帅'

      return {
        message
      }
    }
  }
</script>

<style scoped lang="scss">
.test {
  color: skyblue;
}
</style>