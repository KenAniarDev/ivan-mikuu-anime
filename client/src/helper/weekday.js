const weekday = () => {
   const weekday = [
      "sunday",
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
   ];
   const d = new Date();
   let day = weekday[d.getDay()];

   return { day };
};

export default weekday;
