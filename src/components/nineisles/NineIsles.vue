<template>
  <div class="nine-isles">
    <h1>Nine Isles</h1>
    <div v-for="settlement in nineIslesData.Settlements" :key="settlement.Name">
      <SettlementView v-bind:settlement="settlement" />
    </div>
    <br />
    <h2>Research</h2>
    <h3>Civic</h3>
    <table class="table nine-isles-table">
      <thead>
        <tr class="d-flex">
          <th class="col-3">Name</th>
          <th class="col-5">Description</th>
          <th class="col-1">Level</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="research in researchByType('Civic')" :key="research.Name">
          <ResearchRow v-bind:researchData="research" />
        </tr>
      </tbody>
    </table>
    <br />
    <h3>Culture</h3>
    <table class="table nine-isles-table">
      <thead>
        <tr class="d-flex">
          <th class="col-3">Name</th>
          <th class="col-5">Description</th>
          <th class="col-1">Level</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="research in researchByType('Culture')" :key="research.Name">
          <ResearchRow v-bind:researchData="research" />
        </tr>
      </tbody>
    </table>
    <br />
    <h3>Economic</h3>
    <table class="table nine-isles-table">
      <thead>
        <tr class="d-flex">
          <th class="col-3">Name</th>
          <th class="col-5">Description</th>
          <th class="col-1">Level</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="research in researchByType('Economic')" :key="research.Name">
          <ResearchRow v-bind:researchData="research" />
        </tr>
      </tbody>
    </table>
    <br />
    <h3>Faith</h3>
    <table class="table nine-isles-table">
      <thead>
        <tr class="d-flex">
          <th class="col-3">Name</th>
          <th class="col-5">Description</th>
          <th class="col-1">Level</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="research in researchByType('Faith')" :key="research.Name">
          <ResearchRow v-bind:researchData="research" />
        </tr>
      </tbody>
    </table>
    <br />
    <h3>Magic</h3>
    <table class="table nine-isles-table">
      <thead>
        <tr class="d-flex">
          <th class="col-3">Name</th>
          <th class="col-5">Description</th>
          <th class="col-1">Level</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="research in researchByType('Magic')" :key="research.Name">
          <ResearchRow v-bind:researchData="research" />
        </tr>
      </tbody>
    </table>
    <br />
    <h3>Military</h3>
    <table class="table nine-isles-table">
      <thead>
        <tr class="d-flex">
          <th class="col-3">Name</th>
          <th class="col-5">Description</th>
          <th class="col-1">Level</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="research in researchByType('Military')" :key="research.Name">
          <ResearchRow v-bind:researchData="research" />
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

// eslint-disable-next-line no-unused-vars
import { Research } from "../../services/nineisles/models/research";
import ResearchRow from "./ResearchRow.vue";

import { nineIslesService } from "../../services/nineisles/nineisles.service";
// eslint-disable-next-line no-unused-vars
import { NineIslesData } from "../../services/nineisles/models/nine-isles-data";

import SettlementView from "./SettlementView.vue";

@Component({ components: { ResearchRow, SettlementView } })
export default class NineIsles extends Vue {
  nineIslesData: NineIslesData = { Settlements: [], ResearchData: [] };

  mounted() {
    this.nineIslesData = nineIslesService.getNineIslesData();
  }

  sortResearch(research: Research[]): Research[] {
    return research.sort((a, b) => (a.Name > b.Name ? 1 : -1));
  }

  researchByType(type: string): Research[] {
    return this.sortResearch(
      this.nineIslesData.ResearchData.filter(r => r.Type.toString() == type)
    );
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
