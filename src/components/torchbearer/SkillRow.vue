<template>
  <div class="row" v-on:click="toggleHelp()">
    <td class="skill-name col-2">{{ skillData.skill.name }}</td>
    <td class="skill-description col-9">
      <p>{{ skillData.skill.quickDescription }}</p>
      <p v-if="!helpIsHidden">
        <b>Suggested Help:</b>
        {{ suggestedHelpSkillsList }}
      </p>
    </td>
    <td class="col-1">{{ beginnersLuck }}</td>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
// eslint-disable-next-line no-unused-vars
import { SkillData } from "../../services/torchbearer/models/skill-data";

@Component
export default class SkillRow extends Vue {
  @Prop() skillData!: SkillData;

  helpIsHidden: boolean = true;

  private toggleHelp(): void {
    this.helpIsHidden = !this.helpIsHidden;
  }

  get suggestedHelpSkillsList(): String {
    return this.skillData.suggestedHelpSkills.join(", ");
  }

  get beginnersLuck(): String {
    if (this.skillData.skill.beginnersLuckHealth) {
      return "H";
    } else {
      return "W";
    }
  }
}
</script>

<style scoped>
.skill-name {
  font-weight: bold;
  vertical-align: top;
}
</style>
