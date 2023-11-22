<template>
  <div class="loading">
    <svg
      :width="width"
      :height="height"
      viewBox="0 0 50 50"
      preserveAspectRatio="xMidYMid meet"
    >
      <circle
        cx="25"
        cy="25"
        r="22"
        fill="none"
        :stroke="outsideColor"
        stroke-width="3"
        stroke-dasharray="34 34"
        stroke-linecap="round"
      >
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          values="0 25 25; 360 25 25"
          :dur="duration + 's'"
          repeatCount="indefinite"
        />
        <!-- #3be6cb; #02bcfe; #3be6cb -->
        <animate
          attributeName="stroke"
          attributeType="XML"
          :values="outsideColorAnimation"
          :dur="duration * 2 + 's'"
          repeatCount="indefinite"
        />
      </circle>

      <circle
        cx="25"
        cy="25"
        r="12"
        fill="none"
        :stroke="insideColor"
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
          :dur="duration + 's'"
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke"
          attributeType="XML"
          :values="insideColorAnimation"
          :dur="duration * 2 + 's'"
          repeatCount="indefinite"
        />
      </circle>
    </svg>

    <div
      class="loading-text"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import { computed } from 'vue'

  export default {
    name: 'LoadingCom',
    props: {
      width: {
        type: [Number, String],
        default: 50
      },
      height: {
        type: [Number, String],
        default: 50
      },
      outsideColor: {
        type: String,
        default: '#3be6cb'
      },
      insideColor: {
        type: String,
        default: '#02bcfe'
      },
      duration: {
        type: [Number, String],
        default: 2
      }
    },
    setup(props) {
      const outsideColorAnimation = computed(() => {
        return `${props.outsideColor}; ${props.insideColor}; ${props.outsideColor}`
      })
      const insideColorAnimation = computed(() => {
        return `${props.insideColor}; ${props.outsideColor}; ${props.insideColor}`
      })

      return {
        outsideColorAnimation,
        insideColorAnimation
      }
    }
  }
</script>

<style lang="scss" scoped>
.loading {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .loading-text {
    margin-top: 25px;
    font-size: 20px;
    color: skyblue;
  }
}
</style>