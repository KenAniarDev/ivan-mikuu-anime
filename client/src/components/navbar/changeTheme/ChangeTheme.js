import React, { useContext, useEffect } from "react";
import {
   blueTheme,
   defaultTheme,
   greenTheme,
   orangeTheme,
   yellowTheme,
} from "../../../helper/theme";
import { modalContext } from "../../../hooks/useContext";
import ChangeColorTheme from "../functions/ChangeColorTheme";
import { ThemeColor, ThemeOption } from "./ChangeTheme.styled";

const ChangeTheme = () => {
   const { theme, setTheme } = useContext(modalContext);

   useEffect(() => {
      const localData = localStorage.getItem("theme");
      if (localData) setTheme(JSON.parse(localData));
   }, [setTheme]);

   useEffect(() => {
      localStorage.setItem("theme", JSON.stringify(theme));
   });

   return (
      <ThemeOption>
         <ThemeColor
            backgroundcolor="#902AFE"
            tab={theme.tab}
            index={0}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => ChangeColorTheme(setTheme, defaultTheme)}
         ></ThemeColor>
         <ThemeColor
            backgroundcolor="#F66B00CC"
            tab={theme.tab}
            index={1}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => ChangeColorTheme(setTheme, orangeTheme)}
         ></ThemeColor>
         <ThemeColor
            backgroundcolor="#4A9529"
            tab={theme.tab}
            index={2}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => ChangeColorTheme(setTheme, greenTheme)}
         ></ThemeColor>
         <ThemeColor
            backgroundcolor="#1C60D5"
            tab={theme.tab}
            index={3}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => ChangeColorTheme(setTheme, blueTheme)}
         ></ThemeColor>
         <ThemeColor
            backgroundcolor="#F6B23C"
            tab={theme.tab}
            index={4}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => ChangeColorTheme(setTheme, yellowTheme)}
         ></ThemeColor>
      </ThemeOption>
   );
};

export default ChangeTheme;
