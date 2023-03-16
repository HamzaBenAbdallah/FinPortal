import styled from "styled-components";

export const SeparatorContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;

    p {
        color: #4a5d8a;
    }
`;

const SeparatorLine = styled.div`
    height: 1px;
    margin: 0 1rem;
    flex: 1 1 0%;
    background-image: linear-gradient(
        90deg,
        rgba(233, 237, 241, 0) 35%,
        rgb(161, 165, 190)
    );
`;

export const SeparatorLineLeft = styled(SeparatorLine)``;

export const SeparatorLineRight = styled(SeparatorLine)`
    transform: rotate(180deg);
`;
