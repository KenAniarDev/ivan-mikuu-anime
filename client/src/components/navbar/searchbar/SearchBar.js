import { useContext, useEffect, useRef, useState } from "react";
import { apiContext } from "../../../hooks/useContext";
import SearchHandler from "../functions/SearchHandler";
import { SearchContainer, SearchIcon, SearchInput } from "./SearchBar.styled";

const SearchBar = () => {
   //Ref
   const inputRef = useRef();

   //States
   const [isFocused, setIsFocused] = useState(false);
   const [searchValue, setSearchValue] = useState("");

   //useEffect
   useEffect(() => {
      inputRef.current.value = "";
      inputRef.current.focus();
   }, [isFocused]);

   const { setSearchAnime, setFilterAnime } = useContext(apiContext);

   const { searchSubmitHandler, searchHandler } = SearchHandler(
      searchValue,
      setSearchValue,
      setSearchAnime,
      setFilterAnime
   );

   return (
      <SearchContainer
         onClick={() => setIsFocused(true)}
         onFocus={() => setIsFocused(true)}
         onBlur={() => setIsFocused(false)}
         isFocused={isFocused}
         onSubmit={searchSubmitHandler}
      >
         <SearchIcon />
         <SearchInput
            isFocused={isFocused}
            ref={inputRef}
            onChange={searchHandler}
         />
      </SearchContainer>
   );
};

export default SearchBar;
