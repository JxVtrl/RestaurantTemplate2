import { styled } from "styled-components";

export const NavContainer = styled.div`
  display: flex;
  gap: 52px;
`;

interface NavItemProps {
  active?: boolean;
}

export const NavItem = styled.span<NavItemProps>`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 26px;

  color: #2c2c2c;

  cursor: pointer;

  ${({ active }) =>
    active &&
    `
    text-decoration: underline;
    `}

  &:hover {
    text-decoration: underline;
  }
`;
