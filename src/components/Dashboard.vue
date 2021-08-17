/* eslint-disable */
<template>
  <div class="home">
    <div id="nav">
      <div class="header"><h3>List of Names</h3></div>
      <div class="links">
        <p>Users</p>
        <ul>
          <li v-for="per in Users" :key="per.id">
            <a
              @click="selectUser(per)"
              :class="{ 'is-active': selectedUser === per }"
            >
              {{ per.firstName }}
            </a>
          </li>
        </ul>
        <p>Admins</p>
        <ul>
          <li v-for="ad in Admins" :key="ad.aid">
            <a
              @click="selectAdmin(ad)"
              :class="{ 'is-active': selectedAdmin === ad }"
            >
              {{ ad.afirstName }}
            </a>
          </li>
        </ul>
      </div>
    </div>
    <admins
      v-if="selectedAdmin"
      :admin="selectedAdmin"
      @save="saveBtn"
      @cancel="cancelbtn"
    />
    <users
      v-if="selectedUser"
      :user="selectedUser"
      @cancel="cancelbtn"
      @save="saveBtn"
    />
    <div class="message">
      <pre>{{ message }}</pre>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import admins from "./admins.vue";
import users from "./Users.vue";
import { Data } from "../shared";

@Component({
  components: {
    admins,
    users,
  },
})
export default class HelloWorld extends Vue {
  selectedAdmin: any;
  selectedUser: any;
  Admins: any;
  Users: any;
  message = "";
  cancelbtn() {
    this.selectedAdmin = undefined;
    this.selectedUser = undefined;
    this.message = "";
  }
  saveBtn() {
    if (this.selectedUser) {
      const index = this.Users.findIndex(
        (U: any) => U.id === this.selectedUser.id
      );
      this.Users.splice(index, 1, this.selectedUser);
      this.Users = { ...this.Users };
      this.selectedUser = undefined;
    } else {
      const index = this.Admins.findIndex(
        (Admn: any) => Admn.id === this.selectedAdmin.id
      );
      this.Admins.splice(index, 1, this.selectedAdmin);
      this.Admins = { ...this.Admins };
      this.selectedAdmin = undefined;
    }
  }
  async LoadUsers() {
    this.Users = undefined;
    this.Admins = undefined;
    this.message = "Please wait... Users and Admins are being Loaded";
    this.Users = await Data.getUser();
    this.Admins = await Data.getAdmin();
    this.message = "";
  }
  selectUser(persons: any): void {
    this.selectedUser = persons;
  }
  selectAdmin(adm: any): void {
    this.selectedAdmin = adm;
  }
  created() {
    this.LoadUsers();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #000000;
  margin: 10px;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
}
.header {
  width: auto;
  height: auto;
  margin: 10px;
  padding: 2px;
  border-radius: 4px;
  background-color: #42b984;
}
.home {
  width: 80%;
  height: auto;
  margin: auto;
}
.content {
  background-color: rgba(211, 211, 211, 0);
  margin: 10px;
  border-radius: 4px;
}
.content .field {
  padding: 2px;
  margin: auto;
  font-family: Georgia, serif;
}
label {
  float: left;
  margin: 20px;
}
input[type="text"],
input[type="password"],
select {
  font-size: 18px;
  width: 95%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
.is-active {
  background-color: #42b980;
  color: aliceblue;
}
.links {
  padding: 10px;
}
.message {
  border-radius: 4px;
  margin: 10px;
  padding: 10px;
  text-align: left;
  font-size: 18px;
  background-color: rgb(29, 160, 204);
}
.btndiv {
  display: inline;
  margin: 10px;
}
.btn {
  padding: 20px 30px;
  border-radius: 4px;
  background-color: rgb(14, 95, 122);
  font-size: 18px;
}
.btn:hover {
  box-shadow: 6px 4px gray;
}
</style>
