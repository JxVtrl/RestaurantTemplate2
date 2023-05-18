import { styled } from "styled-components";

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface LogoProps {
  color?: string;
}

export const LogoText = styled.span<LogoProps>`
  color: ${({ color }) => color || "white"};

  font-family: "Roboto";
  font-style: normal;
  font-weight: 900;
  font-size: 26px;
  line-height: 30px;
  text-transform: uppercase;

  transition: color 0.3s ease-in-out;
`;
