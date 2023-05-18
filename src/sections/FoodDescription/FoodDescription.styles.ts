import { styled } from "styled-components";

export const FoodDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DesignBy = styled.span`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 28px;
  text-transform: uppercase;

  color: #000000;
`;

interface FoodProps {
  color?: string;
}

export const FoodTitle = styled.span<FoodProps>`
  font-family: "Port Lligat Slab";
  font-style: normal;
  font-weight: 400;
  font-size: 120px;
  line-height: 129px;

  letter-spacing: -0.03em;

  color: ${(props) => props.color || "#000000"};

  transition: color 0.3s ease-in-out;
`;

export const FoodDescription = styled.span`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 26px;
  letter-spacing: -0.03em;

  color: #000000;

  max-width: 700px;
`;
