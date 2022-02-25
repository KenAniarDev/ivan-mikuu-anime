import React, { useContext } from "react";
import { heroSectionContext } from "../../hooks/useContext";
import FilterList from "./filterlist/FilterList";
import { Container, PageDescription, PageTitle } from "./HeroSection.styled";

const HeroSection = () => {
   const { backgroundImage, title, description } =
      useContext(heroSectionContext);

   return (
      <Container img={backgroundImage}>
         <PageTitle>{title}</PageTitle>
         <PageDescription>{description}</PageDescription>
         <FilterList />
      </Container>
   );
};

export default HeroSection;
