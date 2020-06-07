<template>
  <table class="skills-table">
    <tbody>
      <tr v-for="skillView in skills" :key="skillView.skill.id">
        <SkillRow v-bind:skillData="skillView" />
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
// eslint-disable-next-line no-unused-vars
import { SkillData } from "../../services/torchbearer/models/skill-data";
import SkillRow from "./SkillRow.vue";

@Component({ components: { SkillRow } })
export default class SkillTable extends Vue {
  @Prop() skills!: SkillData[];
}
</script>

<style scoped>
.skills-table {
  margin: 20px 10px;
}

.skill-name {
  font-weight: bold;
  vertical-align: top;
}
</style>
