import axios from "axios";
// console.log(BASE_URL)
export const AxiosUtility = axios.create({
  baseURL: `${process.env.BASE_URL}`,
  headers: {
    "Content-Type": "application/json",
  },
});

AxiosUtility.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);

export const getRequest = async (path: string, config = {}) => {
  try {
    const response = await AxiosUtility.get(path, config); // Make a GET request
    return response.data; // Return the response data
  } catch (error) {
    throw error; // Throw any errors
  }
};
export const postRequest = async (path: string, data: {}, config = {}) => {
  try {
    const response = await AxiosUtility.post(path, data, config); // Make a POST request
    return response.data; // Return the response data
  } catch (error) {
    throw error; // Throw any errors
  }
};
