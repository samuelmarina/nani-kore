import { create } from "apisauce";

const apiClient = create({
  baseURL: "https://api.mymemory.translated.net/",
});

const get = apiClient.get;

apiClient.get = async (url, params, axiosConfig) => {
  const response = await get(url, params, axiosConfig);
  return response;
};

export default apiClient;
