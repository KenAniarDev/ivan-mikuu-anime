import React from "react";
import {
   PhotoContainer,
   ProfilePhoto,
   UpdateIcon,
   UpdateIconContainer,
   UpdateLabel,
   UpdatePhoto,
   UpdatePhotoContainer,
   UpdateText,
} from "./PhotoPreview.styled";

const PhotoPreview = ({ setFile, file, userProfilePhoto }) => {
   return (
      <PhotoContainer>
         <ProfilePhoto
            src={file ? URL.createObjectURL(file) : userProfilePhoto}
            alt="Profile Photo"
         />
         <UpdatePhotoContainer>
            <UpdatePhoto
               type="file"
               id="file"
               accept="image/*"
               onChange={(e) => setFile(e.target.files[0])}
            />

            <UpdateLabel htmlFor="file">
               <UpdateIconContainer>
                  <UpdateIcon />
               </UpdateIconContainer>
               <UpdateText>Update Photo</UpdateText>
            </UpdateLabel>
         </UpdatePhotoContainer>
      </PhotoContainer>
   );
};

export default PhotoPreview;
