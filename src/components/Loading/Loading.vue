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
        <!-- from="0 25 25" to="360 25 25" -->
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          values="0 25 25; 360 25 25"
          dur="2s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke"
          attributeType="XML"
          values="#3be6cb; #02bcfe; #3be6cb"
          dur="4s"
          repeatCount="indefinite"
        />
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
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          from="360 25 25"
          to="0 25 25"
          dur="2s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke"
          attributeType="XML"
          values="#02bcfe; #3be6cb; #02bcfe"
          dur="4s"
          repeatCount="indefinite"
        />
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