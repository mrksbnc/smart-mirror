<template>
  <div class="d-flex flex-coulumn dashboard">
    <div class="block-wrapper">
      <div class="block flex-column">
        <DateTime />
        <Traffic />
        <Email />
      </div>
    </div>
    <div class="block-wrapper">
      <div class="block">
        <Weather />
      </div>
      <div class="block end">
        <Forecast />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
};
</script>
