import React from "react";

import * as S from "./Main.styles";
import { FoodDescription, FoodImage } from "..";

const Main: React.FC = () => {
  return (
    <S.MainContainer>
      <FoodDescription />
      <FoodImage />
    </S.MainContainer>
  );
};

export default Main;
