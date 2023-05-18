import { styled } from "styled-components";

export const OptionsContainer = styled.div`
    display: flex;
    gap: 30px;
    align-items: center;


`

export const OptionsItem = styled.div`
    width: 32px;
    height: 32px;
    background-color: #F1F1F1;
    border-radius: 50%;
    padding: 5px;

    cursor: pointer;

    &:hover {
        background-color: #E1E1E1;
        transform: scale(1.1);
    }
`