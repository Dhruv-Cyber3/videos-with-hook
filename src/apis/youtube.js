import axios from "axios";

const KEY = "AIzaSyDxERkvmelEcpcq4UF_-0QF9G6ahMbjJao";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
