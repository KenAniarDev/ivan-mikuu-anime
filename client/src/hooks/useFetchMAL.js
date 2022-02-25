import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url, apiParams) => {
   //States
   const [data, setData] = useState([]);
   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState(null);

   useEffect(() => {
      setIsLoading(true);

      const fetchData = async () => {
         try {
            const response = await axios.get(`https://api.jikan.moe/v3/${url}`);
            const data = response.data[apiParams];
            setData(data);
         } catch (e) {
            setError(e);
         } finally {
            setIsLoading(false);
         }
      };
      fetchData();

      return () => {
         setData("");
      };
   }, [apiParams, url]);

   return { data, isLoading, error };
};

export default useFetch;
