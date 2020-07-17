<template>
  <div class="all-research">
    <h2>All Researches</h2>
    <div v-if="researches.length">
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
import ResearchView from "./ResearchView.vue";

@Component({ components: { Loader, ResearchView } })
export default class AllResearch extends Vue {
  researches: Research[] = [];

  mounted() {
    nineIslesService
      .getAllResearch()
      .then(response => (this.researches = response.data as Research[]));
  }

  researchByType(type: string): Research[] {
    return this.researches.filter(r => r.researchType == type);
  }

  get researchTypes(): string[] {
    var researchTypes = this.researches.map(r => r.researchType);
    var distinctResearchTypes = new Set(researchTypes);
    var sortedResearchTypes = Array.from(distinctResearchTypes).sort((a, b) =>
      a > b ? 1 : -1
    );

    return sortedResearchTypes;
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
