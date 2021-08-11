<template>
  <div class="content">
    <div class="field">
      <label for="Uname">Enter User Name</label>
      <input type="text" name="Uname" id="Uname" />
    </div>
    <div class="field">
      <label for="Password">Chosse a Password</label>
      <input type="password" name="Password" id="Password" v-model="password" />
    </div>
    <div class="field">
      <label for="CPassword">Confirm Password</label>
      <input
        type="password"
        name="CPassword"
        id="CPassword"
        v-model="confirmPwd"
        v-on:input="checkValidity"
      />
    </div>
    <div>
      <button class="btn" @click="singup">Sign up</button>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class singup extends Vue {
  password = "";
  confirmPwd = "";
  singup() {
    alert("Sorry axios isn't wroking.\ncan't Register you yet");
  }
  checkValidity() {
    if (this.confirmPwd) {
      if (this.password != this.confirmPwd) {
        alert("Retype Password");
      }
    }
  }
}
</script>
<style scoped>
.content {
  margin: 0% 28%;
  width: 60%;
}
</style>
