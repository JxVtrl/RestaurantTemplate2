import React from "react";

import * as S from "./AppBar.styles";
import { Logo, Nav, Options } from "..";

const AppBar: React.FC = () => {
  return (
    <S.AppBarContainer>
      <Logo />
      <Nav />
      <Options />
    </S.AppBarContainer>
  );
};

export default AppBar;
