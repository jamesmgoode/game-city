<template>
    <div id="app">
        <header>
            <div class="top-bar">
                <router-link to="/" class="header-link home-link">Game City</router-link>
                <div class="menu-items">
                    <router-link to="/torchbearer" class="header-link top-link">Torchbearer</router-link>
                    <router-link to="/nineIsles" class="header-link top-link">Nine Isles</router-link>
                    <router-link to="/union" class="header-link top-link">Union LARP</router-link>
                </div>
            </div>
        </header>
        <main>
            <router-view></router-view>
        </main>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component
    export default class App extends Vue {
    }
</script>

<style>
    body {
        margin: 0;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }

    main {
        text-align: center;
        max-width: 800px;
        margin: 40px auto;
    }

    header {
        height: auto;
        background-color: #222;
    }

    .top-bar {
        padding: 10px 0;
        margin: auto 50px;
        display: flex;
        flex-wrap: wrap;
    }

    .menu-items {
        display: flex;
        flex-wrap: wrap;
    }

    .header-link {
        color: #9d9d9d !important;
        text-decoration: none !important;
        margin: auto 0px;
        white-space: nowrap;
    }

        .header-link:hover {
            color: lightgrey !important;
        }

    .home-link {
        position: relative;
        font-size: 30px;
        line-height: 35px;
        margin-right: 30px;
    }

    .top-link {
        line-height: 35px;
        margin-right: 20px;
        font-weight: bold;
    }
</style>
