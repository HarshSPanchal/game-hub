import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '911078b1acde4ed6b28a5efe10d28b00'
    }
})