const ShowPreview = (image, setImage) => {
   const showPreviewHandler = (e) => {
      if (e.target.files && e.target.files.length > 0) {
         setImage(URL.createObjectURL(e.target.files[0]));
      }
   };

   return { image, showPreviewHandler };
};

export default ShowPreview;
