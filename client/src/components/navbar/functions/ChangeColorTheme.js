const ChangeColorTheme = (setThemeHandler, theme) => {
   setThemeHandler((prev) => (prev = theme));
   return { setThemeHandler };
};

export default ChangeColorTheme;
