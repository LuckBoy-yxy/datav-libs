<template>
  <svg
    width="0"
    height="0"
    viewBox="0 0 100 100"
  >
    <defs>
      <symbol id="more" viewBox="0 0 100 100">
        <circle
          r="5"
          cx="20"
          cy="25"
          fill="currentColor"
        />
        <circle
          r="5"
          cx="20"
          cy="50"
          fill="currentColor"
        />
        <circle
          r="5"
          cx="20"
          cy="75"
          fill="currentColor"
        />

        <line
          x1="40"
          y1="25"
          x2="90"
          y2="25"
          stroke-width="8"
          stroke="currentColor"
        />
        <line
          x1="40"
          y1="50"
          x2="75"
          y2="50"
          stroke-width="8"
          stroke="currentColor"
        />
        <line
          x1="40"
          y1="75"
          x2="90"
          y2="75"
          stroke-width="8"
          stroke="currentColor"
        />
      </symbol>

      <symbol id="filledArrowRight" viewBox="0 0 100 100">
        <polyline
          points="20 10, 80 50, 20 90"
          fill="currentColor"
        >
        </polyline>
      </symbol>

      <symbol id="arrowRight" viewBox="0 0 100 100">
        <polyline
          points="20 10, 80 50, 20 90, 20 10"
          fill="transparent"
          stroke="currentColor"
          stroke-width="3"
        >
        </polyline>
      </symbol>
    </defs>
  </svg>
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

</style>