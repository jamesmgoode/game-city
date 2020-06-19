<template>
  <div class="nine-isles-home">
    <p>Welcome to Nine Isles</p>
    <ul>
        <li><router-link to="/nineisles/mynineisles">View my Nine Isles data</router-link></li>
        <li><router-link to="/nineisles/allresearch">View all researches</router-link></li>
    </ul>
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";

@Component
export default class NineIslesHome extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
    text-align: left;
    list-style: none;
}
</style>
