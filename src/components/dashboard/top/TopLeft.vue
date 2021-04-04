<template>
  <div style="background-color: yellow;">
    <component :is="componentProp" />
  </div>
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
