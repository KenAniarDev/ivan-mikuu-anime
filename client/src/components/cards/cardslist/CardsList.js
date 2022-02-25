import React, { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { cardsContext } from "../../../hooks/useContext";
import Card from "../card/Card";
import CardsLoading from "./../cardsloading/CardsLoading";
import { List } from "./CardsList.styled";

const CardsList = () => {
   const { data, isLoading } = useContext(cardsContext);

   const menuItems = [];
   for (let index = 0; index < 50; index++) {
      menuItems.push(<CardsLoading key={index} />);
   }

   if (isLoading) return <List>{menuItems}</List>;

   return (
      <List>
         {data?.map((datas) => {
            return <Card key={uuidv4()} {...datas} allData={datas} />;
         })}
      </List>
   );
};

export default CardsList;
