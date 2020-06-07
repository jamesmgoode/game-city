<template>
  <div class="row" v-on:click="helpIsHidden = !helpIsHidden">
    <td class="skill-name col-2">{{ skillData.skill.name }}</td>
    <td class="skill-description col-10">
      <p>{{ skillData.skill.quickDescription }}</p>
      <p v-if="!helpIsHidden">
        <b>Suggested Help:</b>
        {{ skillData.suggestedHelpSkills.join(", ") }}
      </p>
    </td>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
// eslint-disable-next-line no-unused-vars
import { SkillData } from "../../services/torchbearer/models/skill-data";

@Component
export default class SkillRow extends Vue {
  @Prop() skillData!: SkillData;
  @Prop() helpIsHidden: boolean = true;
}
</script>

<style scoped>
.skill-name {
  font-weight: bold;
  vertical-align: top;
}
</style>
