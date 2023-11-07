<template>
  <div class="test">{{ message }}</div>
  <div>{{ count }}</div>
  <div>{{ doubleCount }}</div>
  <button @click="count++">按钮</button>
</template>

<script>
  import { computed, ref } from 'vue'

  export default {
    name: 'TestCom',
    setup() {
      const message = '大帅'
      const count = ref(1)
      const doubleCount = computed(() => count.value * 2)

      return {
        message,
        count,
        doubleCount
      }
    }
  }
</script>

<style scoped lang="scss">
.test {
  color: skyblue;
}
</style>