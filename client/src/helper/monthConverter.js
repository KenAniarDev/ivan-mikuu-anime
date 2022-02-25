const monthConverter = (monthNum) => {
   const month = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
   ];

   const monthWord = month[monthNum - 1];

   return monthWord;
};

export default monthConverter;
