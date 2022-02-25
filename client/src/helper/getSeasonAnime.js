const getSeasonAnime = () => {
   const month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
   ];

   const winter = ["December", "January", "February"];
   const spring = ["March", "April", "May"];
   const summer = ["June", "July", "August"];
   const fall = ["September", "October", "November"];

   const d = new Date();
   let monthName = month[d.getMonth()];
   let seasonAnime;

   switch (true) {
      case winter.includes(monthName):
         seasonAnime = "WINTER";
         break;
      case spring.includes(monthName):
         seasonAnime = "SPRING";
         break;
      case summer.includes(monthName):
         seasonAnime = "SUMMER";
         break;
      case fall.includes(monthName):
         seasonAnime = "FALL";
         break;
      default:
         break;
   }

   return seasonAnime;
};

export default getSeasonAnime;
