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
        <TopRight />
      </div>
      <div class="block">
        <BottomRight />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
};
</script>
