import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "ac989381445a4337b583b66ae4d51b91",
  },
});
