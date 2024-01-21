<script setup>
import GamesList from './components/GamesList.vue'
import GamesEdit from './components/GamesEdit.vue'
import GamesDelete from './components/GamesDelete.vue'
import GamesAdd from './components/GamesAdd.vue'
import UsersList from './components/UsersList.vue'
import UsersEdit from './components/UsersEdit.vue'
import UsersDelete from './components/UsersDelete.vue'
import UsersAdd from './components/UsersAdd.vue'

</script>

<template>
  <div id="app">
    <div class="container">
      <header>
        <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
      </header>
      <main>
        <div class="content-wrapper">
          <router-view></router-view>
        </div>
      </main>
    </div>
  </div>
</template>


<style>
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.container {
  width: 100%;
  max-width: 1024px;
  text-align: center;
}

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

.content-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.section {
  margin-top: 20px;
}
</style>
