import React from "react";
import MainContent from "../components/mainContent/MainContent";
import { profileData } from "../helper/Data";
import { heroSectionContext } from "../hooks/useContext";
import ProfileContent from "./../components/profileContent/ProfileContent";

const Profile = () => {
   return (
      <heroSectionContext.Provider value={{ ...profileData }}>
         <ProfileContent />
         <MainContent />
      </heroSectionContext.Provider>
   );
};

export default Profile;
