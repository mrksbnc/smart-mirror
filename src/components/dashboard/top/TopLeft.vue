<template>
  <component :is="componentProp" />
</template>

<script>
export default {
  name: 'TopLeft',
  props: {
    componentProp: {
      type: String,
    },
  },
};
</script>

<style></style>
