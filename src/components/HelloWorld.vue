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
      <pre>{{ clonedselectedUser }}</pre>
    </div>
  </div>
</template>

<script lang="ts">
const User = [
  {
    id: 0,
    firstName: "Abdul manan",
    lastname: "Ali",
    age: 22,
    Salary: 0,
  },
  {
    id: 1,
    firstName: "Ahmad",
    lastname: "Raza",
    age: 21,
    Salary: 12000,
  },
  {
    id: 2,
    firstName: "Ali",
    lastname: "Raza",
    age: 23,
    Salary: 25000,
  },
  {
    id: 3,
    firstName: "Raza",
    lastname: "Mowana",
    age: 24,
    Salary: 100000,
  },
  {
    id: 4,
    firstName: "Shabbar",
    lastname: "Raza",
    age: 25,
    Salary: 35000,
  },
  {
    id: 5,
    firstName: "Asad ",
    lastname: "Shafique",
    age: 26,
    Salary: 40000,
  },
];
const Admin = [
  {
    aid: 0,
    afirstName: "Abdul manan",
    alastname: "Ali",
    aage: 22,
  },
  {
    aid: 1,
    afirstName: "Abdullah",
    alastname: "Iqbal",
    aage: 23,
  },
  {
    aid: 3,
    afirstName: "Abdullah",
    alastname: "Shahid",
    aage: 24,
  },
];
import { PropType } from "vue";
import { Component, Prop, Vue } from "vue-property-decorator";
import admins from "./admins.vue";
import users from "./Users.vue";
@Component
export default class HelloWorld extends Vue {
  @Prop({
    type: Array as PropType<string[]>,
    default: () => [],
  })
  private clonedselectedadmin!: string[];
  @Prop({
    type: Array as PropType<string[]>,
    default: () => [],
  })
  private clonedselectedperson!: string[];
  @Prop({
    type: Array,
    default: Array,
  })
  private selectedUser!: [];
  @Prop({
    type: Array,
    default: Array,
  })
  private selectedAdmin!: [];
  Users = [];
  Admins = [];
  // message = "This is message";
  cancelbtn() {
    this.selectedAdmin = [];
    this.selectedUser = [];
    // this.message = "";
  }
  saveBtn() {
    // if (this.selectedUser) {
    //   const index = this.Users.findIndex((u) => u.id === this.selectedUser.id);
    //   this.Users.splice(index, 1, this.selectedUser);
    //   this.Users = { ...this.Users };
    //   this.selectedUser = undefined;
    // } else {
    //   const index = this.Admins.findIndex(
    //     (ad) => ad.id === this.selectedAdmin.id
    //   );
    //   this.Admins.splice(index, 1, this.selectedAdmin);
    //   this.Admins = { ...this.Admins };
    //   this.selectAdmin = undefined;
    // }
    if (this.selectedUser) {
      this.clonedselectedperson = this.selectedUser;
    } else {
      this.clonedselectedperson = this.selectedAdmin;
    }
  }
  async GetUsers() {
    return new Promise((resolve) => {
      setTimeout(() => resolve(User), 1500);
    });
  }
  async GetAdmin() {
    return new Promise((resolve) => {
      setTimeout(() => resolve(Admin), 1500);
    });
  }
  async LoadUsers() {
    this.Users = [];
    this.clonedselectedperson = [
      "Please wait... Users and Admins are being Loaded",
    ];
    this.Users.push(this.GetUsers());
    this.Admins.concat(this.GetAdmin());
    this.clonedselectedperson = [];
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
