<template>
  <div>
    <div class="torchbearer" v-if="skills.length">
      <h1>Torchbearer</h1>
      <div class="torchbearer-content">
        <h2>Torchbearer Skills</h2>
        <table>
          <tbody>
            <tr v-for="skillView in skills" :key="skillView.skill.id">
              <SkillRow v-bind:skillView="skillView" />
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <Loader v-else />
  </div>
</template>

<script>
import * as axios from "axios";
import Loader from "../Loader";
import SkillRow from "./SkillRow";

export default {
  name: "Torchbearer",
  components: { Loader, SkillRow },
  data() {
    return {
      skills: []
    };
  },
  mounted() {
    axios
      .get("https://www.unionlarp.co.uk/torchbearer/gettorchbearerskills")
      .then(response => (this.skills = response.data));
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.torchbearer-content {
  text-align: left;
}
</style>
