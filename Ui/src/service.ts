import axios from "axios";

const URL = "http://localhost:3333";

const api = {
  getData: async () => {
    const response = await axios.get(`${URL}/api/lecturers`);
    return response.data;
  },
};

export default api;
