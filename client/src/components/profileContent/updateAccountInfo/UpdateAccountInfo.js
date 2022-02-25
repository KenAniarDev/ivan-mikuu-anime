import axios from "axios";
import { AnimatePresence } from "framer-motion";
import React, { useContext, useEffect, useState } from "react";
import UpdateBackground from "../../../assets/images/howl.jpg";
import logo from "../../../assets/images/logo.svg";
import AuthContext from "../../../helper/AuthContext";
import toggle from "../../../helper/toggle";
import CloseButton from "./../../closebutton/CloseButton";
import PhotoPreview from "./photoPreview/PhotoPreview";
import {
   UpdateBackDrop,
   UpdateForm,
   UpdateLogo,
   UpdateModalBackgroundImage,
   UpdateModalContent,
} from "./UpdateAccountInfo.styled";
import UpdateButton from "./updateButton/UpdateButton";
import UpdateInputs from "./updateInputs/UpdateInputs";

const UpdateAccountInfo = ({ isVisible, setIsVisible }) => {
   const {
      userID,
      userDisplayName,
      userUserName,
      userPassword,
      getLoggeIn,
      userProfilePhoto,
   } = useContext(AuthContext);

   const [displayName, setDisplayName] = useState(userDisplayName);
   const [username, setUsername] = useState(userUserName);
   const [password, setPassword] = useState(userPassword);
   const [file, setFile] = useState();
   const [profilePicture, setProfilePicture] = useState("temp.png");

   useEffect(() => {
      setDisplayName(userDisplayName);
      setUsername(userUserName);
      setPassword(userPassword);

      return () => {
         setDisplayName("");
         setUsername("");
         setPassword("");
      };
   }, [userDisplayName, userUserName, userPassword]);

   useEffect(() => {
      setProfilePicture(
         file !== undefined ? Date.now() + file.name : "temp.png"
      );

      return () => {
         setProfilePicture("");
      };
   }, [file]);

   const updateHandler = async (e) => {
      e.preventDefault();

      try {
         const updateData = {
            userID,
            displayName,
            username,
            password,
            // profilePicture,
         };
         await axios.put("http://localhost:5000/auth/update", updateData);
         if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            updateData.profilePicture = filename;
            // profilePicture,
            await axios.post("http://localhost:5000/uploadImage", updateData);
         }
         getLoggeIn();
         toggle(setIsVisible);
      } catch (error) {
         console.error(error);
      }
   };

   return (
      <AnimatePresence>
         {isVisible && (
            <UpdateBackDrop
               key="modal"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
            >
               <UpdateModalContent>
                  <UpdateLogo src={logo} alt="Logo" />
                  <CloseButton onClick={() => toggle(setIsVisible)} />
                  <UpdateModalBackgroundImage
                     backgroundimage={UpdateBackground}
                  ></UpdateModalBackgroundImage>
                  <UpdateForm onSubmit={updateHandler}>
                     <PhotoPreview
                        setFile={setFile}
                        file={file}
                        userProfilePhoto={userProfilePhoto}
                     />
                     <UpdateInputs
                        setDisplayName={setDisplayName}
                        setUsername={setUsername}
                        setPassword={setPassword}
                        displayName={displayName}
                        username={username}
                        password={password}
                     />
                     <UpdateButton setIsVisible={setIsVisible} />
                  </UpdateForm>
               </UpdateModalContent>
            </UpdateBackDrop>
         )}
      </AnimatePresence>
   );
};

export default UpdateAccountInfo;
