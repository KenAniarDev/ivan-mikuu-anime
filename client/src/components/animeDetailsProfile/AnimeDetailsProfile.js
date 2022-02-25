import { AnimatePresence } from "framer-motion";
import React, { useContext, useState } from "react";
import toggle from "../../helper/toggle";
import { animeDetailsContext } from "../../hooks/useContext";
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
} from "../animeDetails/AnimeDetails.styled";
import CloseButton from "../closebutton/CloseButton";
import AnimeNavbar from "./animeNavbar/AnimeNavbar";
import { initialTabs } from "./Tab";

const AnimeDetailsProfile = () => {
   const {
      openAnimeDetails,
      setOpenAnimeDetails,
      dataEnglish,
      dataRomaji,
      dataNative,
      dataCoverImage,
      dataBannerImage,
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
                  <AnimeModalBackgroundImage backgroundimage={dataBannerImage}>
                     <HeaderWrapper>
                        <AnimePoster src={dataCoverImage} alt="Poster" />
                        <TitleWrapper>
                           <AnimeTitlePrimary>
                              {dataEnglish !== null ? dataEnglish : dataRomaji}
                           </AnimeTitlePrimary>
                           <AnimeTitleSecondary>
                              {dataNative}
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

export default AnimeDetailsProfile;
