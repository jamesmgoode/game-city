<template>
  <div class="d-flex">
    <td class="col-3">{{ buildingData.name }}</td>
    <td class="col-6">{{ buildingData.description }}</td>
    <td class="col-1">{{ buildingData.buildPoints }}</td>
    <td class="col-2">{{ buildingData.workersRequired }}</td>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
// eslint-disable-next-line no-unused-vars
import { Building } from "../../services/nineisles/models/building";

@Component
export default class BuildingRow extends Vue {
  @Prop() buildingData!: Building;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
td {
  text-align: left;
}
</style>
