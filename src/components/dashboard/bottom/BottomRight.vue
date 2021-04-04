<template>
  <component :is="componentProp" />
</template>

<script>
export default {
  name: 'BottomRight',
  props: {
    componentProp: {
      type: String,
    },
  },
};
</script>

<style></style>
