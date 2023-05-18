import React from "react";

import * as S from "./Options.styles";
import { useApp } from "../../context";

const Options: React.FC = () => {
  const { optionsItems } = useApp();

  return (
    <S.OptionsContainer>
      {optionsItems.map((item) => (
        <S.OptionsItem key={item.id}>{item.icon}</S.OptionsItem>
      ))}
    </S.OptionsContainer>
  );
};

export default Options;
