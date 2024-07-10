import axios from "axios";
import database from "../assets/db.json";

//you will need to have a run script for json-server in your package.json
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
    } else if (url === "/ideas") {
      return database.ideas;
    }
  },
};

//export instance if using json-server to similuate backend locally, and make calls async
export default fakeInstance;
