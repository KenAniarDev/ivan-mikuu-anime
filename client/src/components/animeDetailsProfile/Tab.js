import Details from "./details/Details";
import Recommendation from "./recommendation/Recommendation";
import Summary from "./summary/Summary";

const tabs = [
   {
      pageTitle: "Details",
      element: (
         <Details
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.15 }}
         />
      ),
   },
   {
      pageTitle: "Sypnosis",
      element: (
         <Summary
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.15 }}
         />
      ),
   },
   {
      pageTitle: "Recommendation",
      element: (
         <Recommendation
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.15 }}
         />
      ),
   },
];

const [detailPage, summaryPage, recommendationPage] = tabs;

export const initialTabs = [detailPage, summaryPage, recommendationPage];
