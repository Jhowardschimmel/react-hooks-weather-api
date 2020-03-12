import axios from "axios";

export default {
  searchTerms: function(query) {
    return axios.get(
      "api.openweathermap.org/data/2.5/weather?q=roswell,georgia&appid=fff4bd82a86c47ebcf45b2eaa19a0e8d"
    );
  }
};