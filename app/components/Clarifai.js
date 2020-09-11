import Clarifai from "clarifai";

const app = new Clarifai.App({ apiKey: "YOUR_API_KEY" });

export default getPrediction = async (url) => {
  try {
    const response = await app.models.predict(Clarifai.GENERAL_MODEL, url);
    const word = response.outputs[0].data.concepts[0].name;
    return word;
  } catch (error) {
    console.log("Error predicting image", error);
  }
};
