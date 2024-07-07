import axios from "axios";
import database from "../assets/db.json";

const instance = axios.create({
  baseURL: "localhost:5174",
  headers: {
    "Content-Type": "application/json",
  },
});

const fakeInstance = {
  get: (url) => {
    if (url === "/projectCards") {
      return database.projectCards;
    }
  },
};

//export instance if using json-server to similuate backend locally
export default fakeInstance;
