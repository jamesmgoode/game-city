<template>
  <div class="nine-isles">
    <h1>Nine Isles</h1>
    <div v-for="settlement in nineIslesData.Settlements" :key="settlement.Name">
      <SettlementView v-bind:settlement="settlement" />
    </div>
    <h2>Research</h2>
    <div v-for="researchType in researchTypes" :key="researchType">
      <ResearchView v-bind:researchData="researchByType(researchType)" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
// eslint-disable-next-line no-unused-vars
import { Research } from "../../services/nineisles/models/research";
import { nineIslesService } from "../../services/nineisles/nineisles.service";
// eslint-disable-next-line no-unused-vars
import { NineIslesData } from "../../services/nineisles/models/nine-isles-data";
import SettlementView from "./SettlementView.vue";
import ResearchView from "./ResearchView.vue";

@Component({ components: { SettlementView, ResearchView } })
export default class NineIsles extends Vue {
  nineIslesData: NineIslesData = { Settlements: [], ResearchData: [] };

  mounted() {
    this.nineIslesData = nineIslesService.getNineIslesData();
  }

  researchByType(type: string): Research[] {
    return this.nineIslesData.ResearchData.filter(r => r.Type.toString() == type);
  }

  get researchTypes(): string[] {
    var researchTypes = this.nineIslesData.ResearchData.map(r => r.Type.toString());
    return researchTypes.filter((r, i) => researchTypes.indexOf(r) === i);
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
