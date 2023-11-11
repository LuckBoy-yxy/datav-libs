<template>
  <div class="test1">{{ message }}</div>
</template>

<script>
  import { ref } from 'vue'

  export default {
    name: 'TestCom1',
    setup() {
      const message = ref('中帅')

      return {
        message
      }
    }
  }
</script>

<style scoped lang="scss">
.test1 {
  color: deeppink;
}
</style>