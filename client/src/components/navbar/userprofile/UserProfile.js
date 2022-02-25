import { useContext } from "react";
import AuthContext from "../../../helper/AuthContext";
import toggle from "../../../helper/toggle";
import DropDown from "../dropdown/DropDown";
import HideProfileModal from "../functions/HideProfileModal";
import {
   UserDropdownIcon,
   UserImage,
   UserProfileContainer,
} from "./UserProfile.styled";

const UserProfile = ({ setTabHandler }) => {
   const { dropDownRef, hide, setHide } = HideProfileModal();
   const { userProfilePhoto } = useContext(AuthContext);

   return (
      <>
         <UserProfileContainer
            ref={dropDownRef}
            onClick={() => toggle(setHide)}
         >
            <UserImage src={userProfilePhoto} />
            <UserDropdownIcon hide={hide ? "true" : ""} />
            <DropDown hide={hide} setTabHandler={setTabHandler} />
         </UserProfileContainer>
      </>
   );
};

export default UserProfile;
