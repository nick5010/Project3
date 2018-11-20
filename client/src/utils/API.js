import axios from "axios";

export default {
    getMessages: function(query) {
        return axios.get("/api/messages", { params: { q: query }});
    }
}