<template>
  <div class="d-flex flex-column traffic-block">
    <div class="d-flex flex-row from">
      <div class="map-marker-block">
        <i class="fas fa-map-marker-alt"></i>
        <span>{{ from }}</span>
      </div>
      <div class="map-marker-block">
        <i class="fas fa-map-marker-alt"></i>
        {{ to }}
      </div>
    </div>
    <div class="d-flex flex-row">
      <div class="d-flex" v-for="(mode, index) in traffic" :key="index">
        <div class="travel-time-block mr-3">
          <i :class="GetFontAwsomeIconFromType(mode.type)"></i>
          <span>{{ DiffForTemplate(mode) + 'min' }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { traffic as trafficConfig } from '../config/config';
import { CalculateTimeDiffInMinutes } from '../utils/datetime';

export default {
  name: 'Traffic',
  computed: {
    ...mapGetters({
      traffic: 'traffic/GET_TRAFFIC_DATA',
    }),
    from: function() {
      return !trafficConfig?.location?.originAlias || trafficConfig.location.originAlias == ''
        ? 'starting point'
        : trafficConfig.location.originAlias;
    },
    to: function() {
      return !trafficConfig?.location?.destinationAlias ||
        trafficConfig.location.destinationAlias == ''
        ? 'destination'
        : trafficConfig.location.destinationAlias;
    },
  },
  methods: {
    GetFontAwsomeIconFromType(type) {
      if (!type) return '';
      switch (type) {
        case 'car':
          return 'fas fa-car';
        case 'bus':
          return 'fas fa-bus';
        case 'pedestrian':
          return 'fas fa-walking';
      }
    },
    DiffForTemplate(mode) {
      return CalculateTimeDiffInMinutes(mode.arrivalTime, mode.departureTime);
    },
  },
};
</script>

<style></style>
