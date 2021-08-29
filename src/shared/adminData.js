import { parselist } from './data'
export const getAdmin = async function() {
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