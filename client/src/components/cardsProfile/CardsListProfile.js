import { useContext } from "react";
import AuthContext from "../../helper/AuthContext";
import useFetchDB from "../../hooks/useFetchDB";
import { List, NoDataFound } from "../cards/cardslist/CardsList.styled";
import CardProfile from "./CardProfile";
import CardsLoading from "./CardsLoading";

const CardsListProfile = () => {
   const { isLogIn } = useContext(AuthContext);
   const { animeData, isLoading, refetchData } = useFetchDB(
      "http://localhost:5000/favorite/"
   );

   const menuItems = [];
   for (let index = 0; index < 50; index++) {
      menuItems.push(<CardsLoading key={index} />);
   }

   if (isLoading) return <List>{menuItems}</List>;

   return (
      <List>
         {isLogIn && animeData.length !== 0 ? (
            animeData?.map((datas) => {
               return (
                  <CardProfile
                     key={datas._id}
                     {...datas}
                     allData={datas}
                     refetchData={refetchData}
                  />
               );
            })
         ) : (
            <NoDataFound>Favorite is empty</NoDataFound>
         )}
      </List>
   );
};

export default CardsListProfile;
