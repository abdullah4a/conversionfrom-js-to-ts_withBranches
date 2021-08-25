/* eslint-disable */
<template>
  <div id="usercontainer">
    <div class="header">
      <h4>User</h4>
      <!-- <p>{{ fullName | Capt }}</p> -->
    </div>
    <div class="content">
      <div class="field">
        <label for="Userid"> User ID </label><br />
        <input type="text" id="Userid" v-model="clonedUser.id" readonly />
      </div>
      <div class="field">
        <label for="Userfirstname"> First Name</label><br />
        <input type="text" id="Userfirstname" v-model="clonedUser.firstName" />
      </div>
      <div class="field">
        <label for="Userlastname"> Last Name</label><br />
        <input type="text" id="Userlastname" v-model="clonedUser.lastname" />
      </div>
      <div class="field">
        <label for="Userage"> User Age </label><br />
        <input type="text" id="Userage" v-model="clonedUser.age" />
      </div>
      <div class="field">
        <label for="USalary"> User Salary </label><br />
        <input type="text" id="USalary" v-model="clonedUser.Salary" /><br />${{
          user.Salary | Dollars
        }}
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
import { Component, Vue, Watch } from "vue-property-decorator";
@Component({
  // computed: {
  //   fullName(): string {
  //     return `${this.clonedUser.firstName} ${this.clonedUser.lastname}`;
  //   },
  // },
})
export default class users extends Vue {
  private user: any[] = [];
  private clonedUser = { ...this.user };
  btnSave = "save";
  btnCancel = "cancel";
  message: string = "";
  fullName: string = "";
  cancelbtn() {
    this.$emit("cancel");
  }
  saveBtn(): void {
    this.$emit("save", this.clonedUser);
  }

  // @Watch("clonedUser.lastname", { immediate: true })
  // private watchModel({ val, oldVal }: { val: any; oldVal: any }): void {
  //   if (val) {
  //     console.log(val);
  //   }
  // }
}
</script>
