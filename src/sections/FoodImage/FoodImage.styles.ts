import { styled } from "styled-components";

export const FoodImageContainer = styled.div`
    display: flex;
    align-items: center;

    position: relative;
    width: 100%;
    max-width: 721px;

    height: 100%;
`

export const FoodImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;

    position: absolute;
    inset: 0;
    z-index: -1;

    /* opacity: 0.5; */



`