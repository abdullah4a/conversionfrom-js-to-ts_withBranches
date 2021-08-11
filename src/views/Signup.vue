<template>
  <div class="content">
    <div class="field">
      <input type="text" name="Uname" id="Uname" />
    </div>
    <div class="field">
      <input type="password" name="Password" id="Password" />
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
  singup() {
    alert("Sorry can't Register you at the time");
  }
}
</script>
