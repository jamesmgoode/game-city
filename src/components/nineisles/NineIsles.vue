<template>
  <div class="nine-isles">
    <h1>Nine Isles</h1>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class NineIsles extends Vue { }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
