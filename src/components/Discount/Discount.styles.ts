import { styled } from "styled-components";

export const Container = styled.div`
  width: 505px;
  height: 155px;
  border: 1px solid #d9d9d9;
  background-color: #ffffff;
  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.15);
  border-radius: 20px;

  // center the content
  position: absolute;
  bottom: 10px;
  left: 50%;

  display: flex;
  flex-direction: column;

  overflow: hidden;
  padding: 12px 0;
`;

export const Title = styled.span`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  /* identical to box height */

  text-transform: uppercase;

  color: #000000;

  border-bottom: 1px solid #d9d9d9;
  height: fit-content;
  width: 100%;

  padding: 0 15px;
`;

export const Body = styled.div`
  display: flex;
  padding: 12px 15px;
  justify-content: space-between;
`;

export const BodyLeft = styled.div`
  display: flex;
  align-items: center;
`;

export const BodyRight = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Image = styled.img`
  width: 99px;
  height: 99px;
`;

export const Informations = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 12px;
`;

export const Name = styled.span`
  align-self: flex-start;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 800;
  font-size: 18px;
  line-height: 21px;

  text-transform: uppercase;

  color: #000000;

  width: 160px;
`;

export const Size = styled.span`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  text-transform: uppercase;

  color: #000000;
`;

export const PriceInformations = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
`;

export const PriceBefore = styled.span`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  text-decoration-line: line-through;
  text-transform: uppercase;

  color: #000000;
`;

export const PriceAfter = styled.span`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */

  text-transform: uppercase;

  color: #000000;
`;

export const Button = styled.button`
  background: #fff500;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
  border-radius: 25px;
  border: none;
  padding: 10px 20px;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  /* identical to box height */

  text-transform: uppercase;

  color: #000000;
`;
