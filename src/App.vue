<template>
  <div>
    <TravelMap class="travel-map"/>
  </div>
</template>

<script>
import TravelMap from "../src/view/TravelMap.vue";

export default {
  name: "App",
  components: {
    TravelMap
  }
};
</script>

<style lang="scss" scoped>
.travel-map {
  height: 400px;
}
</style>

