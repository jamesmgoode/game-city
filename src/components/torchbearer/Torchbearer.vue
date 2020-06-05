<template>
  <div>
    <div class="torchbearer" v-if="skills.length">
      <h1>Torchbearer</h1>
      <div class="torchbearer-content">
        <h2>Torchbearer Skills</h2>
        <!-- <table>
                    <tbody>
                        <tr v-for="skillView in skills" :key="skillView.skill.id">
                            <td class="skill-name">{{ skillView.skill.name }}</td>
                            <td>{{ skillView.suggestedHelpSkills }}</td>
                        </tr>
                    </tbody>
                </table> -->
        <SkillTable v-bind:skills="skills" />
      </div>
    </div>
    <Loader v-else />
  </div>
</template>

<script lang="ts">
import axios from "axios";
import Loader from "../Loader.vue";
import SkillTable from "./SkillTable.vue";
import { Component, Vue } from "vue-property-decorator";
// eslint-disable-next-line no-unused-vars
import { SkillData } from "../../models/skill-data";

@Component({
  components: { Loader, SkillTable },
})
export default class Torchbearer extends Vue {
  skills: SkillData[] = [];

  mounted() {
    axios
      .get("https://www.unionlarp.co.uk/torchbearer/gettorchbearerskills")
      .then((response) => (this.skills = response.data));
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .torchbearer-content {
    text-align: left;
    }
</style>
