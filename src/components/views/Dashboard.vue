<template>
  <div class="d-flex flex-coulumn">
    <div class="block-wrapper">
      <div class="block">
        <DateTime />
        <Traffic />
      </div>
      <div class="block">
        <Email />
      </div>
    </div>
    <div class="block-wrapper">
      <div class="block">
        <Weather />
      </div>
      <div class="block"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
};
</script>
