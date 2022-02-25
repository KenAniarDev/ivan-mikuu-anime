import { useEffect, useRef, useState } from "react";

const HideProfileModal = () => {
   const dropDownRef = useRef();

   const [hide, setHide] = useState(false);

   useEffect(() => {
      const dropDownHandler = (e) => {
         if (
            hide &&
            dropDownRef.current &&
            !dropDownRef.current.contains(e.target)
         ) {
            setHide(false);
         }
      };

      document.addEventListener("mousedown", dropDownHandler);

      return () => {
         document.removeEventListener("mousedown", dropDownHandler);
      };
   }, [hide]);

   return { dropDownRef, hide, setHide };
};

export default HideProfileModal;
