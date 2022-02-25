import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { FiHeart, FiPlus } from "react-icons/fi";
import { ThemeProvider } from "styled-components";
import AuthContext from "../../../helper/AuthContext";
import toggle from "../../../helper/toggle";
import { animeDetailsContext, modalContext } from "../../../hooks/useContext";
import Button from "../../button/Button";
import {
   ButtonContainer,
   CardBackgroundImage,
   CardDetails,
   CardEpisode,
   CardImage,
   Cards,
   CardTitle,
   Like,
   TopContainer,
} from "./Card.styled";

const Card = ({
   id,
   episodes,
   chapters,
   volumes,
   title: { english, romaji, native },
   coverImage: { extraLarge, large },
   type,
   allData,
   bannerImage,
   status,
   duration,
   genres,
   season,
   startDate,
   endDate,
   synonyms,
   description,
   recommendations,
   reFetchData,
}) => {
   const { setOpenAnimeDetails, setAnimeDetails } =
      useContext(animeDetailsContext);
   const { isLogIn, userID } = useContext(AuthContext);

   const { theme, setOpenLogin } = useContext(modalContext);

   const viewMoreHandler = () => {
      toggle(setOpenAnimeDetails);
      setAnimeDetails(allData);
   };

   const [isFavorite, setIsFavorite] = useState(false);
   //Backend States
   //const [databaseData, setDatabaseData] = useState([]);
   const [dataID, setDataID] = useState();
   const [dataType, setDataType] = useState();
   const [dataCoverImage, setDataCoverImage] = useState();
   const [dataBannerImage, setDataBannerImage] = useState();
   const [dataEnglish, setDataEnglish] = useState();
   const [dataRomaji, setDataRomaji] = useState();
   const [dataNative, setDataNative] = useState();
   const [dataEpisodes, setDataEpisodes] = useState();
   const [dataChapters, setDataChapters] = useState();
   const [dataVolumes, setDataVolumes] = useState();
   const [dataStatus, setDataStatus] = useState();
   const [dataDuration, setDataDuration] = useState();
   const [dataGenres, setDataGenres] = useState([]);
   const [dataSeason, setDataSeason] = useState();
   const [dataStartDate, setDataStartDate] = useState({});
   const [dataEndDate, setDataEndDate] = useState({});
   const [dataSynonyms, setDataSynonyms] = useState([]);
   const [dataDescription, setDataDescription] = useState();
   const [dataRecommendation, setDataRecommendation] = useState({});

   useEffect(() => {
      setDataID((prev) => (prev = id));
      setDataType((prev) => (prev = type));
      setDataCoverImage(
         (prev) => (prev = extraLarge !== null ? extraLarge : large)
      );
      setDataBannerImage((prev) => (prev = bannerImage));
      setDataEnglish((prev) => (prev = english));
      setDataRomaji((prev) => (prev = romaji));
      setDataNative((prev) => (prev = native));
      setDataEpisodes((prev) => (prev = episodes));
      setDataChapters((prev) => (prev = chapters));
      setDataVolumes((prev) => (prev = volumes));
      setDataStatus((prev) => (prev = status));
      setDataDuration((prev) => (prev = duration));
      setDataGenres((prev) => (prev = genres));
      setDataSeason((prev) => (prev = season));
      setDataStartDate((prev) => (prev = startDate));
      setDataEndDate((prev) => (prev = endDate));
      setDataSynonyms((prev) => (prev = synonyms));
      setDataDescription((prev) => (prev = description));
      setDataRecommendation(
         (prev) =>
            (prev = recommendations.nodes.map(
               (media) => media.mediaRecommendation
            ))
      );
      return () => {
         setDataID();
         setDataType();
      };
   }, [
      id,
      type,
      extraLarge,
      large,
      bannerImage,
      english,
      romaji,
      native,
      episodes,
      chapters,
      volumes,
      status,
      duration,
      genres,
      season,
      startDate,
      endDate,
      synonyms,
      description,
      recommendations,
   ]);

   const deleteFavorite = async () => {
      setIsFavorite(false);
      reFetchData();
      await axios.delete(`http://localhost:5000/favorite/delete/${id}`, {
         withCredentials: true,
      });
   };

   const addFavorite = async () => {
      setIsFavorite(true);
      await axios.post(
         "http://localhost:5000/favorite/add",
         {
            dataID,
            dataType,
            dataCoverImage,
            dataBannerImage,
            dataEnglish,
            dataRomaji,
            dataNative,
            dataEpisodes,
            dataChapters,
            dataVolumes,
            dataStatus,
            dataDuration,
            dataGenres,
            dataSeason,
            dataStartDate,
            dataEndDate,
            dataSynonyms,
            dataDescription,
            dataRecommendation,
            userID,
         },
         {
            withCredentials: true,
         }
      );
   };

   const favoriteHandler = () => {
      isFavorite === true ? deleteFavorite() : addFavorite();
   };

   // const databaseID = isLogIn ? animeData?.map((id) => id.dataID) : "";

   // const checkID = useCallback(
   //    (ids) => {
   //       return ids === id;
   //    },
   //    [id]
   // );

   // const checkDBandAPI = isLogIn
   //    ? databaseID.some(checkID)
   //    : toggle(setIsFavorite);

   // useEffect(() => {
   //    setIsFavorite(isLogIn ? checkDBandAPI : "");

   //    return () => {
   //       setIsFavorite("");
   //    };
   // }, [checkID, databaseID, isLogIn, checkDBandAPI]);

   return (
      <Cards>
         <TopContainer>
            <CardImage
               src={extraLarge !== null ? extraLarge : large}
               isfavorite={isFavorite === true ? "liked" : undefined}
               alt="Poster"
            />
            <Like
               whileHover={{ scale: 1.15 }}
               whileTap={{ scale: 0.95 }}
               onClick={
                  isLogIn === true
                     ? favoriteHandler
                     : () => toggle(setOpenLogin)
               }
               isfavorite={isFavorite === true ? "liked" : undefined}
            >
               {isFavorite === true ? <FiHeart /> : <FiPlus />}
            </Like>
         </TopContainer>
         <CardBackgroundImage
            isfavorite={isFavorite === true ? "liked" : undefined}
            backgroundImage={extraLarge !== null ? extraLarge : large}
         />
         <CardDetails>
            <CardTitle>{english !== null ? english : romaji}</CardTitle>
            <CardEpisode>
               {type === "ANIME"
                  ? episodes !== null
                     ? `${episodes} ${episodes > 1 ? "Episodes" : "Episode"}`
                     : `Episode Not Available`
                  : chapters !== null || volumes !== null
                  ? chapters !== null
                     ? `${chapters} Chapters`
                     : `${volumes} Volumes`
                  : "Chapters Not Available"}
            </CardEpisode>
            <ButtonContainer>
               <ThemeProvider theme={theme}>
                  <Button
                     backgroundcolor={
                        isFavorite === true
                           ? theme.likeColor.backgroundColor
                           : theme.defaultButton.backgroundColor
                     }
                     onClick={viewMoreHandler}
                     text={"View More"}
                     size={"1.4rem"}
                  />
               </ThemeProvider>
            </ButtonContainer>
         </CardDetails>
      </Cards>
   );
};

export default Card;
