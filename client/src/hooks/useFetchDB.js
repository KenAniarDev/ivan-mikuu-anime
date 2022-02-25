import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url) => {
   //States
   const [animeData, setAnimeData] = useState([]);
   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState(null);

   useEffect(() => {
      setIsLoading(true);

      const fetchData = async () => {
         try {
            const response = await axios.get(url, {
               withCredentials: true,
            });
            const data = response.data;
            setAnimeData(data);
         } catch (e) {
            setError(e);
         } finally {
            setIsLoading(false);
         }
      };

      fetchData();

      return () => {
         setAnimeData("");
      };
   }, [url]);

   const refetchData = async () => {
      const response = await axios.get(url, {
         withCredentials: true,
      });
      const data = response.data;
      setAnimeData(data);
   };

   return { animeData, isLoading, error, refetchData };
};

export default useFetch;
