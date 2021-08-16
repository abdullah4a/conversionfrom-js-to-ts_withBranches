/* eslint-disable */
<template>
  <div id="usercontainer">
    <div class="header">
      <h4>Admin</h4>
      <!-- <p>{{ fullNameAdmin | Capt }}</p> -->
    </div>
    <div class="content">
      <div class="field">
        <label for="adminid"> Admin ID </label><br />
        <input type="text" id="adminid" v-model="clonedAdmin.aid" readonly />
      </div>
      <div class="field">
        <label for="adminfirstname"> First Name</label><br />
        <input type="text" id="firstname" v-model="clonedAdmin.afirstName" />
      </div>
      <div class="field">
        <label for="adminlastame"> Last Name</label><br />
        <input type="text" id="adminlastname" v-model="clonedAdmin.alastname" />
      </div>
      <div class="field">
        <label for="aage"> Admin Age </label><br />
        <input type="text" id="aage" v-model="clonedAdmin.aage" />
      </div>
      <div class="btndiv">
        <button class="btn" @click="cancelbtn">
          {{ btnCancel | SaveSentenceCase }}
        </button>
      </div>
      <div class="btndiv">
        <button class="btn" @click="saveBtn">
          {{ btnSave | SaveSentenceCase }}
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
let admin: any;
let clonedAdmin = { ...admin };
import { Component, Prop, Vue } from "vue-property-decorator";
@Component({
  computed: {
    fullNameAdmin(): string {
      return `${clonedAdmin.afirstName}${clonedAdmin.alastname}`;
    },
  },
})
export default class admins extends Vue {
  btnSave = "save";
  btnCancel = "cancel";
  message = "This is message";
  cancelbtn(): void {
    this.$emit("cancel");
  }
  saveBtn(): void {
    this.$emit("save", clonedAdmin);
  }
}
</script>
