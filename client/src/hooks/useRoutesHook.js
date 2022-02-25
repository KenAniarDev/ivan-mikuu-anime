import React from "react";
// import CommunityPost from "../components/communitypost/communitypost/CommunityPost";
import Anime from "../pages/Anime";
import Comics from "../pages/Comics";
import Profile from "../pages/Profile";
// import CommunitySave from "./../components/communitypost/communitysaved/CommunitySave";

const useRoutesHook = () => {
   const routes = [
      {
         path: "/",
         element: <Anime />,
      },
      {
         path: "/comics",
         element: <Comics />,
      },
      {
         path: "/profile",
         element: <Profile />,
      },
   ];

   return routes;
};

export default useRoutesHook;
