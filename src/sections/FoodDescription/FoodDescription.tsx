import React from "react";

import * as S from "./FoodDescription.styles";
import { useApp } from "../../context";

const FoodDescription: React.FC = () => {
  const { foodIndex, foodVariants } = useApp();

  const { color, description, name } = foodVariants[foodIndex];

  return (
    <S.FoodDescriptionContainer>
      <S.DesignBy>Designed by Majors Studios</S.DesignBy>
      <S.FoodTitle color={color}>{name}</S.FoodTitle>
      <S.FoodDescription>{description}</S.FoodDescription>
    </S.FoodDescriptionContainer>
  );
};

export default FoodDescription;
