const SearchHandler = (
   firstParams,
   setFirstParams,
   secondParams,
   filterAnime
) => {
   const searchHandler = (e) => {
      setFirstParams(e.target.value);
   };

   const searchSubmitHandler = (e) => {
      e.preventDefault();
      secondParams(firstParams);
      filterAnime({});
   };

   return { searchSubmitHandler, searchHandler };
};

export default SearchHandler;
