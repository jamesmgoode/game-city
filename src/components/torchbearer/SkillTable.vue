<template>
  <table>
    <tbody>
      <tr v-for="skillView in skills" :key="skillView.skill.id">
        <td class="skill-name">{{ skillView.skill.name }}</td>
        <td>{{ skillView.suggestedHelpSkills }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
// eslint-disable-next-line no-unused-vars
import { SkillData } from "../../models/skill-data";

@Component
export default class SkillTable extends Vue {
  @Prop() skills!: SkillData[];
}
</script>

<style scoped>
  .skill-name {
    font-weight: bold;
  }
</style>
