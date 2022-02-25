const mongoose = require("mongoose");

const FavoritesSchema = new mongoose.Schema({
   dataID: Number,
   dataType: String,
   dataCoverImage: String,
   dataBannerImage: String,
   dataEnglish: String,
   dataRomaji: String,
   dataNative: String,
   dataEpisodes: Number,
   dataChapters: Number,
   dataVolumes: Number,
   dataDuration: Number,
   dataStatus: String,
   dataGenres: [String],
   dataSeason: String,
   dataStartDate: {
      month: Number,
      day: Number,
      year: Number,
   },
   dataEndDate: {
      month: Number,
      day: Number,
      year: Number,
   },
   dataSynonyms: [String],
   dataDescription: String,
   dataRecommendation: [
      {
         id: Number,
         coverImage: {
            extraLarge: String,
            large: String,
         },
         title: {
            english: String,
            romaji: String,
         },
         episodes: Number,
         status: String,
      },
   ],
   userID: mongoose.Schema.Types.ObjectId,
});

const Favorites = mongoose.model("anime", FavoritesSchema);
module.exports = Favorites;
