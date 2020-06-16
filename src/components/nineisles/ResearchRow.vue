<template>
  <div class="d-flex">
    <td class="col-3">{{ researchData.Name }}</td>
    <td class="col-5">{{ researchData.Description }}</td>
    <td class="col-1">{{ researchData.Level }}</td>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
// eslint-disable-next-line no-unused-vars
import { Research } from '../../services/nineisles/models/research';
// eslint-disable-next-line no-unused-vars
import { ResearchType } from "../../services/nineisles/models/research-type";

@Component
export default class BuildingRow extends Vue {
  @Prop() researchData!: Research;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
td {
  text-align: left;
}
</style>
