import { useState } from "react";

import clarifai from "../components/Clarifai";
import translation from "../api/translation";

export default useImageRecognition = () => {
  const [data, setData] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const getWords = async (url) => {
    setLoading(true);
    const word = await clarifai(url);
    const translationResponse = await translation.getTranslation({
      q: word,
      langpair: "en|ja",
    });
    const translatedWord = translationResponse.data.responseData.translatedText;
    setLoading(false);

    console.log(word);

    return { word, translatedWord };

    setError(!word);
    setData([word, translatedWord]);
  };

  return {
    data,
    error,
    loading,
    getWords,
  };
};
