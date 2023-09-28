import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '59253a96c11d46819dadcc8c94803529'
    }
})