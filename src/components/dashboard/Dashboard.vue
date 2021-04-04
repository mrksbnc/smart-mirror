<template>
  <div class="d-flex flex-coulumn">
    <div class="block-wrapper">
      <div class="block">
        <TopLeft />
      </div>
      <div class="block">
        <BottomLeft />
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

<style>
.block-wrapper {
  width: 50%;
}

.block {
  min-width: 50%;
  min-height: 50%;
}
</style>
