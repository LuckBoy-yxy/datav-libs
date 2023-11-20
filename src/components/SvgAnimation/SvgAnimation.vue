<template>
  <div class="container" >
    <svg
      width="500px"
      height="200px"
      viewBox="0 0 500 200"
    >
      <rect
        class="rect"
        x="10"
        y="10"
        width="100px"
        height="50px"
        fill="none"
        stroke-width="5"
        stroke="pink"
      ></rect>
    </svg>
  </div>

  <div class="container">
    <!-- 这里的 viewBox 和画布的宽高是一样的, 所以可以省略不写 -->
    <svg
      width="440"
      height="440"
      viewBox="0 0 440 440"
    >
      <circle
        cx="220"
        cy="220"
        r="200"
        stroke-width="20"
        stroke="#d1d3d7"
        fill="transparent"
      ></circle>

      <circle
        class="circle"
        cx="220"
        cy="220"
        r="200"
        stroke-width="20"
        stroke="#00a5e0"
        fill="none"
        transform="matrix(0 -1 1 0 0 440)"
      ></circle>
    </svg>
  </div>
</template>

<script>
  export default {
    name: 'SvgAnimation',
    setup() {

      return {

      }
    }
  }
</script>

<style lang="scss" scoped>
.container {
  svg {
    border: 1px solid #000;
  }
}

.rect {
  stroke-dasharray: 10 20 30;
}

.circle {
  animation: circle 5s linear infinite;
}

@keyframes circle {
  from {
    stroke-dasharray: 0 1257;
  }
  to {
    stroke-dasharray: 1257 0;
  }
}
</style>