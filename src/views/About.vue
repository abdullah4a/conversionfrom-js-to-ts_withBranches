<template>
  <div class="about">
    <div class="container">
      <div class="links is-active">
        <router-link to="/signup">Register</router-link>
      </div>
    </div>
    <div class="home">
      <div>
        <h1>This is about page</h1>
      </div>
      <div>
        <h2>We are the Users</h2>
      </div>
    </div>
  </div>
</template>
<style scoped>
.container {
  float: right;
}
.is-active {
  border-radius: 5px;
}
.home {
  margin: 5%;
  width: 79%;
}
</style>
