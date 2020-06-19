<template>
  <div class="my-nine-isles">
    <div v-if="nineIslesData.settlements.length + nineIslesData.researchData.length">
      <div v-for="settlement in nineIslesData.settlements" :key="settlement.name">
        <SettlementView v-bind:settlement="settlement" />
      </div>
      <h2>Research</h2>
      <div v-for="researchType in researchTypes" :key="researchType">
        <ResearchView v-bind:researchData="researchByType(researchType)" />
      </div>
    </div>
    <Loader v-else />
  </div>
</template>

<script lang="ts">
import Loader from "../Loader.vue";
import { Component, Vue } from "vue-property-decorator";
// eslint-disable-next-line no-unused-vars
import { Research } from "../../services/nineisles/models/research";
import { nineIslesService } from "../../services/nineisles/nineisles.service";
// eslint-disable-next-line no-unused-vars
import { NineIslesData } from "../../services/nineisles/models/nine-isles-data";
import SettlementView from "./SettlementView.vue";
import ResearchView from "./ResearchView.vue";

@Component({ components: { Loader, SettlementView, ResearchView } })
export default class MyNineIsles extends Vue {
  nineIslesData: NineIslesData = { settlements: [], researchData: [] };

  mounted() {
    nineIslesService
      .getNineIslesData()
      .then(response => (this.nineIslesData = response.data as NineIslesData));
  }

  researchByType(type: string): Research[] {
    return this.nineIslesData.researchData.filter(r => r.researchType == type);
  }

  get researchTypes(): string[] {
    var researchTypes = this.nineIslesData.researchData.map(r => r.researchType);
    return researchTypes.filter((r, i) => researchTypes.indexOf(r) === i).sort((a, b) => (a > b ? 1 : -1));
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
