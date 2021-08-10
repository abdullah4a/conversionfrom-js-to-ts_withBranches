<template>
  <div id="usercontainer">
    <div class="header">
      <h4>Admin</h4>
      <p>{{ fullNameAdmin | Capt }}</p>
    </div>
    <div class="content">
      <div class="field">
        <label for="id"> Admin ID </label><br />
        <input type="text" id="id" v-model="clonedAdmin.aid" readonly />
      </div>
      <div class="field">
        <label for="firstname"> First Name</label><br />
        <input type="text" id="firstname" v-model="clonedAdmin.afirstName" />
      </div>
      <div class="field">
        <label for="lastame"> Last Name</label><br />
        <input type="text" id="lastname" v-model="clonedAdmin.alastname" />
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
  @Prop({ type: Object, default: Object })
  private admin!: Object;

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
  private computed: object = {
    fullNameAdmin(): string {
      // return `${this.clonedAdmin.afirstName} ${this.clonedAdmin.alastname}`;
    },
  };
}
</script>
