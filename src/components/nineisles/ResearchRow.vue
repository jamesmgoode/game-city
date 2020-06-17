<template>
  <div class="d-flex">
    <td class="col-3">{{ researchDatum.name }}</td>
    <td class="col-8">{{ researchDatum.description }}</td>
    <td class="col-1">{{ researchDatum.level }}</td>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
// eslint-disable-next-line no-unused-vars
import { Research } from "../../services/nineisles/models/research";

@Component
export default class ResearchRow extends Vue {
  @Prop() researchDatum!: Research;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
td {
  text-align: left;
}
</style>
