import React from "react";

import * as S from "./Nav.styles";
import { useApp } from "../../context";

const Nav: React.FC = () => {
  const { navItems, activeNav, setActiveNav } = useApp();

  return (
    <S.NavContainer>
      {navItems.map((item) => (
        <S.NavItem
          onClick={() => setActiveNav(item.id)}
          active={item.id === activeNav}
          key={item.id}
        >
          {item.name}
        </S.NavItem>
      ))}
    </S.NavContainer>
  );
};

export default Nav;
