import * as axios from "axios";
import { API_Config } from "./CONFIG";
// Configures Users
const getUser = async function() {
    try {
        const responce = await axios.get(`${API_Config}/User.json`);
        let data = parselist(responce);
        const users = data;
        return users;
    } catch (error) {
        console.error(`There is an Error ${error}`);
        return [];
    }
}

// parsing a Response for Both Users and Admins... and Cheking Status..
export const parselist = response => {
    if (response.status != 200) throw Error(response.message);
    if (!response.data) return [];
    let list = response.data;
    if (typeof list != "object") {
        list = [];
    };
    return list;
};
//Updation will go here..
const Update = function() {
        console.log("will provide Updation")
    }
    //Deletion will go here

//
export const Data = {
    getUser,
    getAdmin,
    Update
};