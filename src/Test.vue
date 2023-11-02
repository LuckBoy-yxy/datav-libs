<template>
  <div class="test">{{ message }}</div>
</template>

<script>
  import { ref } from 'vue'

  export default {
    name: 'TestCom',
    setup() {
      const message = ref('大帅')

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