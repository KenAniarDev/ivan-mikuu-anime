import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (search, dataType, filterAnime) => {
   const [data, setData] = useState([]);
   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState(null);

   useEffect(() => {
      setIsLoading(true);

      const options = {
         method: "POST",
         url: "https://anilist-graphql.p.rapidapi.com/",
         headers: {
            "content-type": "application/json",
            "x-rapidapi-host": "anilist-graphql.p.rapidapi.com",
            "x-rapidapi-key":
               "949e6c26c6mshef14fc5e2540c63p122c75jsna6e98befbca6",
         },
         data: {
            query: `query ($page: Int, $perPage: Int, $search: String, $type: MediaType, $sort: [MediaSort], $season: MediaSeason, $status: MediaStatus, $format: MediaFormat) {
                Page(page: $page, perPage: $perPage) {
                    media(search: $search, type: $type, sort: $sort, season: $season, status: $status, format: $format) {
                        id 
                        title {
                            romaji
                            english
                            native
                        }
                        type
                        genres
                        episodes
                        chapters
                        volumes
                        startDate{
                            month
                            day
                            year  
                        }
                        endDate{ 
                            month
                            day
                            year   
                        }
                        description
                        season
                        duration
                        status
                        bannerImage
                        synonyms
                        coverImage{
                            extraLarge
                            large
                        }
                        recommendations{
                            nodes{
                                mediaRecommendation{
                                    id
                                    title{
                                        romaji
                                        english
                                        native
                                    }
                                    coverImage{
                                        extraLarge
                                        large
                                    }
                                    status
                                    episodes
                                    chapters
                                    volumes
                                }
                            }
                        }
                    }   
                }
            }`,
            variables: {
               search: search,
               type: dataType,
               page: 1,
               perPage: 50,
               sort: filterAnime.sort,
               status: filterAnime.status,
               format: filterAnime.format,
               season: filterAnime.season,
            },
         },
      };

      const fetchData = async () => {
         try {
            const response = await axios.request(options);
            const data = response.data.data.Page.media;
            setData(data);
         } catch (error) {
            setError(error);
         } finally {
            setIsLoading(false);
         }
      };
      fetchData();

      return () => {
         setData([]);
      };
   }, [search, dataType, filterAnime]);

   const options = {
      method: "POST",
      url: "https://anilist-graphql.p.rapidapi.com/",
      headers: {
         "content-type": "application/json",
         "x-rapidapi-host": "anilist-graphql.p.rapidapi.com",
         "x-rapidapi-key": "949e6c26c6mshef14fc5e2540c63p122c75jsna6e98befbca6",
      },
      data: {
         query: `query ($page: Int, $perPage: Int, $search: String, $type: MediaType, $sort: [MediaSort], $season: MediaSeason, $status: MediaStatus, $format: MediaFormat) {
                Page(page: $page, perPage: $perPage) {
                    media(search: $search, type: $type, sort: $sort, season: $season, status: $status, format: $format) {
                        id 
                        title {
                            romaji
                            english
                            native
                        }
                        type
                        genres
                        episodes
                        chapters
                        volumes
                        startDate{
                            month
                            day
                            year  
                        }
                        endDate{ 
                            month
                            day
                            year   
                        }
                        description
                        season
                        duration
                        status
                        bannerImage
                        synonyms
                        coverImage{
                            extraLarge
                            large
                        }
                        recommendations{
                            nodes{
                                mediaRecommendation{
                                    id
                                    title{
                                        romaji
                                        english
                                        native
                                    }
                                    coverImage{
                                        extraLarge
                                        large
                                    }
                                    status
                                    episodes
                                    chapters
                                    volumes
                                }
                            }
                        }
                    }   
                }
            }`,
         variables: {
            search: search,
            type: dataType,
            page: 1,
            perPage: 50,
            sort: filterAnime.sort,
            status: filterAnime.status,
            format: filterAnime.format,
            season: filterAnime.season,
         },
      },
   };

   const reFetchData = async () => {
      try {
         const response = await axios.request(options);
         const data = response.data.data.Page.media;
         setData(data);
      } catch (error) {
         setError(error);
      } finally {
         setIsLoading(false);
      }
   };

   return { data, isLoading, error, reFetchData };
};

export default useFetch;
