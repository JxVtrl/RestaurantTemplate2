import React, { useEffect } from "react";

import * as S from "./FoodImage.styles";
import { useApp } from "../../context";
import { Discount } from "../../components";

const FoodImage: React.FC = () => {
  const { foodIndex, foodVariants } = useApp();
  const { image } = foodVariants[foodIndex];

  const imageRef = React.useRef<HTMLImageElement>(null);



  useEffect(() => {
    if (imageRef.current) {
      imageRef.current.animate(
        [
          { transform: "translateX(100%)", opacity: 0 },
          { transform: "translateX(0)", opacity: 1 },
        ],
        {
          duration: 500,
          easing: "ease-in-out",
          fill: "forwards",
        }
      );
    }
  }, [foodIndex]);

  return (
    <S.FoodImageContainer>
      <S.FoodImage ref={imageRef} src={image} />
      <Discount/>
    </S.FoodImageContainer>
  );
};

export default FoodImage;
