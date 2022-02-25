import { useContext, useEffect, useReducer, useState } from "react";
import { apiContext, heroSectionContext } from "../../../hooks/useContext";
import FilterOptions from "../filteroption/FilterOptions";
import { List } from "./FilterList.styled";

const FilterList = () => {
   const [selectedIndex, setSelectedIndex] = useState(0);
   const { filters } = useContext(heroSectionContext);
   const { setFilterAnime, setFilterTitle } = useContext(apiContext);

   //reducer
   const initialState = {
      request: {
         sort: "TRENDING_DESC",
         season: null,
         status: null,
         format: null,
      },
   };

   const reducer = (state, action) => {
      switch (action.type) {
         case "Trending":
            return { request: action.payload };
         case "Ongoing":
            return { request: action.payload };
         case "Popular":
            return { request: action.payload };
         case "Season":
            return { request: action.payload };
         case "Hiatus":
            return { request: action.payload };
         case "Novel":
            return { request: action.payload };
         case "Upcoming":
            return { request: action.payload };
         default:
            throw new Error();
      }
   };

   const [state, dispatch] = useReducer(reducer, initialState);

   const filterAnimeHandler = (action, { ...value }, index, title) => {
      setSelectedIndex(index);
      dispatch({ type: action, payload: value });
      setFilterTitle(title);
   };

   useEffect(() => {
      setFilterAnime(state.request);
      return () => {
         setFilterAnime();
      };
   }, [setFilterAnime, state.request]);

   return (
      <List>
         {filters?.map((object, index) => {
            return (
               <FilterOptions
                  key={object.key}
                  index={index}
                  selectedIndex={selectedIndex}
                  options={object.filterOption}
                  onClick={() => {
                     filterAnimeHandler(
                        object.filterOption,
                        {
                           ...object.filterAnime,
                        },
                        index,
                        object.filterTitle
                     );
                  }}
               />
            );
         })}
      </List>
   );
};

export default FilterList;
