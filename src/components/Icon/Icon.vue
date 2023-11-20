<template>
  <div class="icon-wrapper" :style="{ ...style }">
    <svg class="icon">
      <use :href="iconName"></use>
    </svg>
  </div>
</template>

<script>
  import { computed } from 'vue'

  export default {
    name: 'IconCom',
    props: {
      name: String,
      prefix: {
        type: String,
        default: 'icon-'
      },
      style: Object,
    },
    setup(props) {
      const iconName = computed(() => {
        return `#${ props.prefix }${ props.name }`
      })

      return {
        iconName
      }
    }
  }
</script>

<style lang="scss" scoped>
.icon-wrapper {
  display: inline-block;
}
.icon {
  width: 100%;
  height: 100%;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>