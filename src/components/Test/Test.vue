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

      <symbol id="fitness" viewBox="0 0 1024 1024">
        <path
          d="M848.6912 238.7456a92.16 92.16 0 0 0-32 5.8368 104.5504 104.5504 0 0 0-208.7424 9.2672v150.9376H421.1712V253.8496a104.5504 104.5504 0 0 0-208.6912-9.2672 92.7744 92.7744 0 0 0-125.184 87.3472v340.3776a92.928 92.928 0 0 0 125.184 87.3472 104.5504 104.5504 0 0 0 208.6912-9.2672v-150.9376h186.7776v150.9376a104.5504 104.5504 0 0 0 208.7424 9.2672 92.16 92.16 0 0 0 32 5.7856A93.2352 93.2352 0 0 0 942.08 672.3072V331.9296a93.2352 93.2352 0 0 0-93.3888-93.184zM180.4288 704a31.6928 31.6928 0 0 1-31.6928-31.6928V331.9296a31.6928 31.6928 0 0 1 63.2832-2.9696v346.3168a31.744 31.744 0 0 1-31.5904 28.7232z m179.2 46.3872a43.1616 43.1616 0 1 1-86.272 0v-75.1104-343.3472-78.08a43.1616 43.1616 0 1 1 86.272 0z m247.9616-212.3776H421.4272v-71.68h186.2656z m104.96 255.5904a43.2128 43.2128 0 0 1-43.1616-43.1616v-496.64a43.1616 43.1616 0 0 1 86.3232 0V750.3872a43.2128 43.2128 0 0 1-43.1616 43.2128zM880.64 672.3072a31.6928 31.6928 0 0 1-63.232 2.8672v-346.112a31.6928 31.6928 0 0 1 63.232 2.8672z"
          fill="#F66A2F"
          p-id="1185"
        >
        </path>
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