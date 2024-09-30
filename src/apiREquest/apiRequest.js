// import Axios from "axios";

// const API_KEY = "df8b606e7b09a88c572c100e1ac1f5d2";
// const BASE_URL = "https://api.themoviedb.org/3";

// const tmdb = Axios.create({
//   baseURL: BASE_URL,
//   params: {
//     api_key: API_KEY,
//   },
// });

// export default tmdb

import axios from "axios";
const BASEURL = "https://api.themoviedb.org/3";
const options = {
  params: {},
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZjhiNjA2ZTdiMDlhODhjNTcyYzEwMGUxYWMxZjVkMiIsIm5iZiI6MTcyNzYyODU2OC44ODU2NDgsInN1YiI6IjY2Zjk1MmFmMTQwZmJmNmExYTVmNzIwMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Gb8esPPbS0BlQ_2KHDLiOSKuJLjyX7dmD-75DSvwflQ",
  },
};

export const fetchApi = async (url) => {
  const { data } = await axios.get(`${BASEURL}/${url}`, options);
  return data;
};
