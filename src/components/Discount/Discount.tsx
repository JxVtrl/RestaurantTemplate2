import React, { useEffect } from "react";

import * as S from "./Discount.styles";
import { useApp } from "../../context";

const Discount: React.FC = () => {
  const { foodIndex, foodVariants } = useApp();
  const discountRef = React.useRef<HTMLDivElement>(null);

  const foodIndexLength = foodVariants.length;

  const { image, name } =
    foodVariants[foodIndex + 1 < foodIndexLength ? foodIndex + 1 : 0];

  useEffect(() => {
    if (discountRef.current) {
      discountRef.current.animate(
        [
          { transform: "translate(-50%,100%)" },
          { transform: "translate(-50%,0)" },
        ],
        {
          duration: 1500,
          easing: "ease-in-out",
          fill: "forwards",
        }
      );
    }
  }, [foodIndex]);
  return (
    <S.Container ref={discountRef}>
      <S.Title>Cupom de desconto</S.Title>
      <S.Body>
        <S.BodyLeft>
          <S.Image src={image} alt={name} />
          <S.Informations>
            <S.Name>{name}</S.Name>
            <S.Size>1 unidade</S.Size>
          </S.Informations>
        </S.BodyLeft>

        <S.BodyRight>
          <S.PriceInformations>
            <S.PriceBefore>R$ 14,99</S.PriceBefore>
            <S.PriceAfter>R$ 7,90</S.PriceAfter>
                  </S.PriceInformations>
                  <S.Button>Gerar cupom</S.Button>
        </S.BodyRight>
      </S.Body>
    </S.Container>
  );
};

export default Discount;
