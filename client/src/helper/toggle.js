const toggle = (state) => {
   state((prev) => !prev);

   return state;
};

export default toggle;
