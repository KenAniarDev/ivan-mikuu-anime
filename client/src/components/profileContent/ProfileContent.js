import { useContext, useState } from "react";
// import tempProfile from "../../assets/images/temp.png";
import AuthContext from "../../helper/AuthContext";
import toggle from "../../helper/toggle";
import { heroSectionContext } from "../../hooks/useContext";
import Button from "../button/Button";
import {
   ButtonContainer,
   Profile,
   ProfileContainer,
   ProfileDescription,
   ProfileImage,
   ProfileInfo,
   ProfileName,
} from "./ProfileContent.styled";
import UpdateAccountInfo from "./updateAccountInfo/UpdateAccountInfo";

const ProfileContent = () => {
   const { backgroundImage } = useContext(heroSectionContext);
   const { userDisplayName, userProfilePhoto } = useContext(AuthContext);
   const [isVisible, setIsVisible] = useState(false);

   return (
      <>
         <ProfileContainer img={backgroundImage}></ProfileContainer>
         <Profile>
            <ProfileImage src={userProfilePhoto} alt="Profile Photo" />
            <ProfileInfo>
               <ProfileDescription>Display Name</ProfileDescription>
               <ProfileName>{userDisplayName}</ProfileName>
               <ButtonContainer>
                  <Button
                     size="1.4rem"
                     onClick={() => toggle(setIsVisible)}
                     text="Update Profile"
                  />
               </ButtonContainer>
            </ProfileInfo>
         </Profile>
         <UpdateAccountInfo isVisible={isVisible} setIsVisible={setIsVisible} />
      </>
   );
};

export default ProfileContent;
