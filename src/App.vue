<template>
    <div id="app">
        <header>
            <div class="top-bar">
                <a href="/" class="header-link home-link">Game City</a>
                <a href="/torchbearer" class="header-link menu-link">Torchbearer</a>
                <a href="/nineIsles" class="header-link menu-link">Nine Isles</a>
                <a href="/union" class="header-link menu-link">Union LARP</a>
            </div>
        </header>
        <main>
            <router-view></router-view>
        </main>
    </div>
</template>

<script>
    export default {
        name: 'app'
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
        height: 56px;
        background-color: #222;
    }

    .top-bar {
        padding-top: 10px;
        margin: auto 50px;
    }

    .header-link {
        color: #9d9d9d;
        text-decoration: none !important;
        margin: auto 0px;
        float: left;
    }

    .home-link {
        position: relative;
        font-size: 30px;
        line-height: 35px;
        margin-right: 30px;
    }

    .menu-link {
        line-height: 35px;
        margin-right: 20px;
        font-weight: bold;
    }
</style>
