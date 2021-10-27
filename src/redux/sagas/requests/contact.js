import axios from "axios";

export function requestGetContact() {
  return axios.request({
    method: "get",
    url: "https://jsonplaceholder.typicode.com/users",
  });
}
