import { useEffect, useState } from "react";
import axios from "axios";

export const useHistorial = () => {
  const [historial, setHistorial] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/historial")
      .then(res => setHistorial(res.data))
      .catch(err => console.error(err));
  }, []);

  return historial;
};
