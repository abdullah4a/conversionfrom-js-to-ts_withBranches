<template>
  <div id="usercontainer">
    <div class="header">
      <h4>User</h4>
      <p>{{ fullName | Capt }}</p>
    </div>
    <div class="content">
      <div class="field">
        <label for="id"> User ID </label><br />
        <input type="text" id="id" v-model="clonedUser.id" readonly />
      </div>
      <div class="field">
        <label for="firstname"> First Name</label><br />
        <input type="text" id="firstname" v-model="clonedUser.firstName" />
      </div>
      <div class="field">
        <label for="lastame"> Last Name</label><br />
        <input type="text" id="lastname" v-model="clonedUser.lastname" />
      </div>
      <div class="field">
        <label for="age"> User Age </label><br />
        <input type="text" id="age" v-model="clonedUser.age" />
      </div>
      <div class="field">
        <label for="Uage"> User Salary </label><br />
        <input type="text" id="Uage" v-model="clonedUser.Salary" /><br />${{
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
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
@Component({})
export default class users extends Vue {
  @Prop({ type: Object, required: false })
  private user!: Object;

  btnSave = "save";
  btnCancel = "cancel";
  message = "This is message";
  clonedUser = { ...this.user };
  cancelbtn() {
    this.$emit("cancel");
  }
  saveBtn(): void {
    this.$emit("save", this.clonedUser);
  }
  private computed: Object = {
    fullName(): string {
      return `${this.clonedUser.firstName} ${this.clonedUser.lastname}`;
    },
  };
  @Watch("clonedUser.lastname", { immediate: true })
  private watchModel(val: any, oldVal: any) {
    if (val) {
      console.log(val);
    }
  }
}
</script>
