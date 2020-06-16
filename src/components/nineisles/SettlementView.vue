<template>
  <div>
    <h2>{{ name }}</h2>
    <h3>Buildings</h3>
    <table class="table nine-isles-table">
      <thead>
        <tr class="d-flex">
          <th class="col-3">Name</th>
          <th class="col-5">Description</th>
          <th class="col-1">BP</th>
          <th class="col-2">Workers</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="building in sortedBuildings" :key="building.Name">
          <BuildingRow v-bind:buildingData="building" />
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
// eslint-disable-next-line no-unused-vars
import { Settlement } from "../../services/nineisles/models/settlement";
// eslint-disable-next-line no-unused-vars
import { Building } from "../../services/nineisles/models/building";
import BuildingRow from "./BuildingRow.vue";

@Component({ components: { BuildingRow } })
export default class SettlementView extends Vue {
  @Prop() settlement!: Settlement;

  get name(): string {
    return this.settlement?.Name;
  }

  get sortedBuildings(): Building[] {
    return this.settlement?.Buildings.sort((a, b) => (a.Name > b.Name ? 1 : -1));
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  text-align: left;
}

.nine-isles-table {
  margin: 10px;
}

th {
  text-align: left;
}
</style>
