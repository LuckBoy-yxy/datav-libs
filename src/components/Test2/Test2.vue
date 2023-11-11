<template>
  <div class="test2">{{ message }}</div>
</template>

<script>
  import { ref } from 'vue'

  export default {
    name: 'TestCom2',
    setup() {
      const message = ref('小帅')

      return {
        message
      }
    }
  }
</script>

<style scoped lang="scss">
.test2 {
  color: lightgreen;
}
</style>