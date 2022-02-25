const animated = () => {
   const animateItem = {
      open: {
         y: 0,
         opacity: 1,
         transition: {
            y: { stiffness: 1000, velocity: -100 },
         },
      },
      closed: {
         y: 50,
         opacity: 0,
         transition: {
            y: { stiffness: 1000 },
         },
      },
   };

   const animateList = {
      open: {
         transition: { staggerChildren: 0.07, delayChildren: 0.2 },
      },
      closed: {
         transition: { staggerChildren: 0.05, staggerDirection: -1 },
      },
   };
   const animateNavbar = {
      open: (height = 1000) => ({
         clipPath: `circle(${height * 2 + 200}px at 80% 30px)`,
         transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2,
            staggerChildren: 0.07,
            delayChildren: 0.2,
         },
      }),
      closed: {
         clipPath: "circle(0px at 80% 30px)",
         transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40,
            staggerChildren: 0.05,
            staggerDirection: -1,
         },
      },
   };

   return { animateItem, animateList, animateNavbar };
};

export default animated;
