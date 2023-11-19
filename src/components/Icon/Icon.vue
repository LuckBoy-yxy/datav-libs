<template>
  <svg :style="{ ...style }">
    <use :href="iconName"></use>
  </svg>
</template>

<script>
  export default {
    name: 'IconCom',
    props: {
      name: String,
      style: Object
    },
    setup(props) {
      const iconName = `#${ props.name }`

      return {
        iconName
      }
    }
  }
</script>

<style lang="less" scoped>

</style>