import { useState, useEffect } from "react";
import { Camera } from "expo-camera";

export default useCamera = () => {
  const [hasPermission, setHasPermission] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  return { hasPermission };
};
