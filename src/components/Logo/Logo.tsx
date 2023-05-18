import React from "react";

import * as S from "./Logo.styles";
import { useApp } from "../../context";

const Logo: React.FC = () => {
  const { foodVariants, foodIndex } = useApp();

  const { color } = foodVariants[foodIndex];

  return (
    <S.LogoContainer>
      <S.LogoText color={color}>Seu Negócio</S.LogoText>
    </S.LogoContainer>
  );
};

export default Logo;
