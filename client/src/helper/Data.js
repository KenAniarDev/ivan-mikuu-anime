import { v4 as uuidv4 } from "uuid";
import animeBG from "../assets/images/anime.jpg";
import mobileBG from "../assets/images/bg1.jpg";
import comicsBG from "../assets/images/comics.jpg";
import communityBG from "../assets/images/communityv2.jpg";
import getSeasonAnime from "./getSeasonAnime";

export const animeData = {
   backgroundImage: animeBG,
   title: "Anime Section",
   description:
      "Track, discover, and share anime. Discover top-rated and popular shows through reviews and recommendations.",
   filters: [
      {
         key: uuidv4(),
         filterOption: "Trending",
         filterAnime: {
            sort: "TRENDING_DESC",
            season: undefined,
            status: undefined,
            format: undefined,
         },
         filterTitle: "Top Trending Anime",
      },
      {
         key: uuidv4(),
         filterOption: "Ongoing",
         filterAnime: {
            sort: "POPULARITY_DESC",
            season: undefined,
            status: "RELEASING",
            format: undefined,
         },
         filterTitle: "Popular Ongoing Anime",
      },
      {
         key: uuidv4(),
         filterOption: "Season",
         filterAnime: {
            sort: "POPULARITY_DESC",
            season: getSeasonAnime(),
            status: undefined,
            format: undefined,
         },
         filterTitle: `Top ${
            getSeasonAnime().charAt(0) +
            getSeasonAnime().substring(1).toLowerCase()
         } Anime`,
      },
      {
         key: uuidv4(),
         filterOption: "Popular",
         filterAnime: {
            sort: "POPULARITY_DESC",
            season: undefined,
            status: undefined,
            format: undefined,
         },
         filterTitle: "Popular Anime",
      },
      {
         key: uuidv4(),
         filterOption: "Upcoming",
         filterAnime: {
            sort: "POPULARITY_DESC",
            season: undefined,
            status: "NOT_YET_RELEASED",
            format: undefined,
         },
         filterTitle: "Popular Upcoming Anime",
      },
   ],
};

export const comicsData = {
   backgroundImage: comicsBG,
   title: "Comics Section",
   description:
      "Track, discover, and share manga, manhwa and manhua. Discover top-rated and popular shows through reviews and recommendations.",
   filters: [
      {
         key: uuidv4(),
         filterOption: "Trending",
         filterAnime: {
            sort: "TRENDING_DESC",
            season: undefined,
            status: undefined,
            format: undefined,
         },
         filterTitle: "Top Trending Comics",
      },
      {
         key: uuidv4(),
         filterOption: "Ongoing",
         filterAnime: {
            sort: "POPULARITY_DESC",
            season: undefined,
            status: "RELEASING",
            format: undefined,
         },
         filterTitle: "Popular Ongoing Comics",
      },

      {
         key: uuidv4(),
         filterOption: "Popular",
         filterAnime: {
            sort: "POPULARITY_DESC",
            season: undefined,
            status: undefined,
            format: undefined,
         },
         filterTitle: "Popular Comics",
      },
      {
         key: uuidv4(),
         filterOption: "Hiatus",
         filterAnime: {
            sort: "POPULARITY_DESC",
            season: undefined,
            status: "HIATUS",
            format: undefined,
         },
         filterTitle: "On a break",
      },
      {
         key: uuidv4(),
         filterOption: "Novel",
         filterAnime: {
            sort: "POPULARITY_DESC",
            season: undefined,
            status: undefined,
            format: "NOVEL",
         },
         filterTitle: "Popular Novel",
      },
   ],
};

export const communityData = {
   backgroundImage: communityBG,
   title: "Community Section",
   description:
      "Knowledge is powerful, community is strength and positive attitude is everything",
};

export const profileData = {
   backgroundImage: mobileBG,
};
