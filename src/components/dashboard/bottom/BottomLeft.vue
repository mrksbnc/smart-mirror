<template>
  <component :is="componentProp" />
</template>

<script>
export default {
  name: 'BottomLeft',
  props: {
    componentProp: {
      type: String,
    },
  },
};
</script>

<style></style>
