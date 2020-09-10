import Clarifai from "clarifai";

const app = new Clarifai.App({ apiKey: "184fabe812944828b8bff9cbd35b1521" });

const predict = async (url) => {
  try {
    const response = await app.models.predict(Clarifai.GENERAL_MODEL, url);
    console.log(response);
  } catch (error) {
    console.log("Error predicting image", error);
  }
};

export default { predict };
