<template>
  <div class="loading">
    <svg
      width="200"
      height="200"
      viewBox="0 0 50 50"
    >
      <circle
        cx="25"
        cy="25"
        r="22"
        fill="none"
        stroke="#3be6cb"
        stroke-width="3"
        stroke-dasharray="34 34"
        stroke-linecap="round"
      >

      </circle>

      <circle
        cx="25"
        cy="25"
        r="12"
        fill="none"
        stroke="#02bcfe"
        stroke-width="3"
        stroke-dasharray="19 19"
        stroke-linecap="round"
      >

      </circle>
    </svg>
  </div>
</template>

<script>
  export default {
    name: 'LoadingCom',
    setup() {
      
      return {
        
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>