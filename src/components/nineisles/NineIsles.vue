<template>
  <div class="nine-isles">
    <h1>Nine Isles</h1>
    <h2>Aviasta</h2>
    <h3>Buildings</h3>
    <table class="table buildings-table">
      <thead>
        <tr class="d-flex">
          <th class="col-3">Name</th>
          <th class="col-5">Description</th>
          <th class="col-1">BP</th>
          <th class="col-2">Workers</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="building in sortedBuildings" :key="building.Name">
          <BuildingRow v-bind:buildingData="building" />
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
// eslint-disable-next-line no-unused-vars
import { Settlement } from "../../services/nineisles/models/settlement";
import BuildingRow from "./BuildingRow.vue";
// eslint-disable-next-line no-unused-vars
import { Building } from "../../services/nineisles/models/building";
// eslint-disable-next-line no-unused-vars
import { Research } from "../../services/nineisles/models/research";

@Component({ components: { BuildingRow } })
export default class NineIsles extends Vue {
  buildingData: Building[] = [
    {
      Name: "Training Yard",
      Description: "+50% XP per person who trains here",
      BuildPoints: 10,
      WorkersRequired: 0
    },
    {
      Name: "Stone Walls",
      Description: "Stone fortifications to protect 500 people",
      BuildPoints: 50,
      WorkersRequired: 0
    },
    {
      Name: "Shield Makers' Workshop",
      Description: "Produces 10 shields per year",
      BuildPoints: 10,
      WorkersRequired: 10
    },
    {
      Name: "Wind Empowered Mill",
      Description: "Increases farm efficiency by 0.5 total",
      BuildPoints: 10,
      WorkersRequired: 10
    },
    {
      Name: "Armoury",
      Description: "Increase the life span of equipment by 20%",
      BuildPoints: 10,
      WorkersRequired: 0
    },
    {
      Name: "Pony Ranch",
      Description:
        "When staffed with 10 people will increase the number of wind ponies each year by D4",
      BuildPoints: 10,
      WorkersRequired: 10
    },
    {
      Name: "Bowyers' Workshops",
      Description: "Produces longbows",
      BuildPoints: 20,
      WorkersRequired: 20
    },
    {
      Name: "Holy Site",
      Description: "The Wind Tower",
      BuildPoints: 70,
      WorkersRequired: 0
    },
    {
      Name: "Textile Workshop",
      Description: "Produces 10 Units of Q2 textiles each year",
      BuildPoints: 10,
      WorkersRequired: 10
    },
    {
      Name: "Gorgon Cave",
      Description: "Home for a Chimaeric Gorgon",
      BuildPoints: 10,
      WorkersRequired: 0
    },
    {
      Name: "Arrow Towers",
      Description:
        "+1 defense for troops in the towers, consumes 5 bows a year, but will generate bow armed militia when the settlement is attacked",
      BuildPoints: 50,
      WorkersRequired: 0
    },
    {
      Name: "Silver Mine",
      Description: "Produce 20 units of Q4 silver each year",
      BuildPoints: 10,
      WorkersRequired: 10
    },
    {
      Name: "Gatherer’s Hut",
      Description: "Gather 'herbs'",
      BuildPoints: 10,
      WorkersRequired: 10
    }
  ];

  get sortedBuildings(): Building[] {
    return this.buildingData.sort((a, b) => (a.Name > b.Name ? 1 : -1));
  }

  researchData: Research[] = [
    {
      Name: "Mills",
      Description: "",
      Level: 1
    }
  ];

  get sortedResearch(): Research[] {
    return this.researchData.sort((a, b) => (a.Name > b.Name ? 1 : -1));
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  text-align: left;
}

.buildings-table {
  margin: 10px;
}

th {
  text-align: left;
}
</style>
