import { AnimatePresence } from "framer-motion";
import React, { useContext, useState } from "react";
import toggle from "../../helper/toggle";
import { animeDetailsContext } from "../../hooks/useContext";
import CloseButton from "../closebutton/CloseButton";
import {
   AnimeBackDrop,
   AnimeModalBackgroundImage,
   AnimeModalContent,
   AnimePoster,
   AnimeTitlePrimary,
   AnimeTitleSecondary,
   ContentContainer,
   ContentTitle,
   HeaderWrapper,
   MainContentContainer,
   TitleWrapper,
} from "./AnimeDetails.styled";
import AnimeNavbar from "./animeNavbar/AnimeNavbar";
import { initialTabs } from "./Tab";

const AnimeDetails = () => {
   const {
      openAnimeDetails,
      setOpenAnimeDetails,
      title,
      coverImage,
      bannerImage,
   } = useContext(animeDetailsContext);

   const [selectedIndex, setSelectedIndex] = useState(initialTabs[0]);

   return (
      <AnimatePresence>
         {openAnimeDetails && (
            <AnimeBackDrop
               key="anime"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
            >
               <AnimeModalContent>
                  <CloseButton onClick={() => toggle(setOpenAnimeDetails)} />
                  <AnimeModalBackgroundImage backgroundimage={bannerImage}>
                     <HeaderWrapper>
                        <AnimePoster
                           src={
                              coverImage.extraLarge !== null
                                 ? coverImage.extraLarge
                                 : coverImage.large
                           }
                           alt="Poster"
                        />
                        <TitleWrapper>
                           <AnimeTitlePrimary>
                              {title.english !== null
                                 ? title.english
                                 : title.romaji}
                           </AnimeTitlePrimary>
                           <AnimeTitleSecondary>
                              {title.native}
                           </AnimeTitleSecondary>
                        </TitleWrapper>
                     </HeaderWrapper>
                  </AnimeModalBackgroundImage>

                  <MainContentContainer>
                     <AnimeNavbar
                        selectedIndex={selectedIndex}
                        setSelectedIndex={setSelectedIndex}
                        initialTabs={initialTabs}
                     />

                     <ContentContainer>
                        <ContentTitle>
                           {selectedIndex ? selectedIndex.pageTitle : null}
                        </ContentTitle>
                        {selectedIndex ? selectedIndex.element : null}
                     </ContentContainer>
                  </MainContentContainer>
               </AnimeModalContent>
            </AnimeBackDrop>
         )}
      </AnimatePresence>
   );
};

export default AnimeDetails;
