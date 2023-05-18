import React from "react";

import * as S from "./Main.styles";
import { FoodDescription, FoodImage } from "..";
import { Discount } from "../../components";

const Main: React.FC = () => {
  return (
    <S.MainContainer>
      <FoodDescription />
      <FoodImage />
      <Discount/>
    </S.MainContainer>
  );
};

export default Main;
