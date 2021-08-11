/* eslint-disable */
<template>
  <div id="usercontainer">
    <div class="header">
      <h4>Admin</h4>
      <p>{{ fullNameAdmin | Capt }}</p>
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
import { Component, Prop, Vue } from "vue-property-decorator";
@Component({})
export default class admins extends Vue {
  @Prop({})
  private admin!: any;
  @Prop({})
  private fullNameAdmin: any;
  btnSave = "save";
  btnCancel = "cancel";
  message = "This is message";
  clonedAdmin = { ...this.admin };
  cancelbtn(): void {
    this.$emit("cancel");
  }
  saveBtn(): void {
    this.$emit("save", this.clonedAdmin);
  }
  computed: Record<string, any> = {
    fullNameAdmin(): string {
      return this.clonedAdmin.afirstName + "" + this.clonedAdmin.alastname;
    },
  };
}
</script>
