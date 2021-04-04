<template>
  <div class="date-time-wrapper">
    <span class="date-row">{{ date }}</span>
    <span class="time-row">{{ time }}</span>
  </div>
</template>

<script>
import { dateTimeFunctions } from '../core/DateTimeFunctions';

export default {
  name: 'DateTime',
  data() {
    return {
      time: null,
      date: null,
    };
  },

  created() {
    setInterval(() => {
      this.setDate();
      this.setTime();
    }, 1000);
  },

  methods: {
    setDate() {
      this.date = dateTimeFunctions.GetCurrentDate();
    },
    setTime() {
      this.time = dateTimeFunctions.GetCurrentTime();
    },
  },
};
</script>

<style scoped></style>
