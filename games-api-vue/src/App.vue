<template>
  <div id="app">
    <div class="container">
      <header>
        <img alt="Vue logo" class="logo" src="./assets/logo.png" width="125" height="125" />
      </header>
      <main>
        <div class="content-wrapper">
          <router-view></router-view>
        </div>
        <div>     
          <a href="http://localhost:5173/games">Games</a>
          <a href="http://localhost:5173/users">Users</a>
          <a href="http://localhost:5173/orders">Orders</a>
          <a href="http://localhost:5173/profiles">Profiles</a>
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
