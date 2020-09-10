import client from "./translateClient";

const endpoint = "/get";

const getTranslation = (params) => client.get(endpoint, params);

export default {
  getTranslation,
};
