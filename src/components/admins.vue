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
        <input type="text" id="adminid" v-model="clonedAdmin.id" readonly />
      </div>
      <div class="field">
        <label for="adminfirstname"> First Name</label><br />
        <input type="text" id="firstname" v-model="clonedAdmin.firstName" />
      </div>
      <div class="field">
        <label for="adminlastame"> Last Name</label><br />
        <input type="text" id="adminlastname" v-model="clonedAdmin.lastname" />
      </div>
      <div class="field">
        <label for="aage"> Admin Age </label><br />
        <input type="text" id="aage" v-model="clonedAdmin.age" />
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
// private clonedAdmin = { };
import { Component, Prop, Vue } from "vue-property-decorator";
@Component({
  // computed: {
  //   fullNameAdmin(): string {
  //     return `${this.admin.firstName}${admin.lastname}`;
  //   },
  // },
})
export default class admins extends Vue {
  private admin = {
    id: 0,
    firstName: "",
    lastname: "",
    age: 0,
  };
  private clonedAdmin = { ...this.admin };
  btnSave = "save";
  btnCancel = "cancel";
  message = "This is message";
  cancelbtn(): void {
    this.$emit("cancel");
  }
  saveBtn(): void {
    this.$emit("save", this.clonedAdmin);
  }
}
</script>
