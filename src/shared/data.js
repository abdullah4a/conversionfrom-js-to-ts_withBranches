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
    // Configures Admins
const getAdmin = async function() {
        try {
            const responce = await axios.get(`${API_Config}/Admin.json`);
            let data = parselist(responce);
            const admins = data;
            return admins;
        } catch (error) {
            console.error(`There is an Error ${error}`);
            return [];
        }
    }
    // parsing a Response for Both Users and Admins... and Cheking Status..
const parselist = response => {
    if (response.status != 200) throw Error(response.message);
    if (!response.data) return [];
    let list = response.data;
    if (typeof list != "object") {
        list = [];
    };
    return list;
};
// 
export const Data = {
    getUser,
    getAdmin
};