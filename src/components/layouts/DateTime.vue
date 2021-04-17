<template>
  <div class="date-time-wrapper">
    <span class="date-row">{{ date }}</span>
    <span class="time-row">{{ time }}</span>
  </div>
</template>

<script>
import { dateTimeFunctions } from '../../core/DateTimeFunctions';

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
      this.SetDate();
      this.SetTime();
    }, 1000);
  },

  methods: {
    SetDate() {
      this.date = dateTimeFunctions.GetCurrentDate();
    },
    SetTime() {
      this.time = dateTimeFunctions.GetCurrentTime();
    },
  },
};
</script>
