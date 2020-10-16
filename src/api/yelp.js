import axios from "axios";

import { CLIENT_ID, API_KEY } from "../../env.config";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
});
