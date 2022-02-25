const router = require("express").Router();
const Favorite = require("../models/favoritesModel");
const auth = require("../middleware/auth");

router.post("/add", auth, async (req, res) => {
   try {
      const {
         dataID,
         dataType,
         dataCoverImage,
         dataBannerImage,
         dataEnglish,
         dataRomaji,
         dataNative,
         dataEpisodes,
         dataChapters,
         dataVolumes,
         dataDuration,
         dataStatus,
         dataGenres,
         dataSeason,
         dataStartDate,
         dataEndDate,
         dataSynonyms,
         dataDescription,
         dataRecommendation,
         userID,
      } = req.body;

      const addFavorite = new Favorite({
         dataID,
         dataType,
         dataCoverImage,
         dataBannerImage,
         dataEnglish,
         dataRomaji,
         dataNative,
         dataEpisodes,
         dataChapters,
         dataVolumes,
         dataDuration,
         dataStatus,
         dataGenres,
         dataSeason,
         dataStartDate,
         dataEndDate,
         dataSynonyms,
         dataDescription,
         dataRecommendation,
         userID,
      });

      const existingAnime = await Favorite.findOne({ dataID });
      if (existingAnime) return res.json("Anime already added");

      const savedFavorite = await addFavorite.save();

      res.json(savedFavorite);
   } catch (error) {
      console.error(error);
      res.status(500).send();
   }
});

router.delete("/delete/:id", auth, async (req, res) => {
   const id = req.params.id;
   await Favorite.findOneAndRemove({ dataID: id }).exec();
   // await Favorite.findByIdAndRemove(id).exec();

   res.send();
});

router.get("/", auth, async (req, res) => {
   try {
      const query = { userID: req.user };
      const favorite = await Favorite.find(query);

      res.send(favorite);
   } catch (error) {
      console.error(error);
      res.status(500).send();
   }
});

module.exports = router;
