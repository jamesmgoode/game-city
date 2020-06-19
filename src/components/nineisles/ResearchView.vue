<template>
  <div>
    <h3>{{ type }}</h3>
    <table class="table nine-isles-table">
      <thead>
        <tr class="d-flex">
          <th class="col-3">Name</th>
          <th class="col-8">Description</th>
          <th class="col-1">Level</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="research in sortedResearch" :key="research.Name">
          <ResearchRow v-bind:researchDatum="research" />
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
// eslint-disable-next-line no-unused-vars
import { Research } from "../../services/nineisles/models/research";
import ResearchRow from "./ResearchRow.vue";

@Component({ components: { ResearchRow } })
export default class ResearchView extends Vue {
  @Prop() researchData!: Research[];

  get sortedResearch(): Research[] {
    return this.researchData.sort((a, b) => (a.level == b.level ? (a.name > b.name ? 1 : -1) : (a.level > b.level ? 1 : -1)));
  }

  get type(): string {
      return this.researchData[0].researchType;
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
