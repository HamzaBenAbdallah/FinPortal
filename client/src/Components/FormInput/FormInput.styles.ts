import styled from "styled-components";

export const FormInputContainer = styled.span`
    display: flex;
    flex-direction: column;
    margin-bottom: 0.75rem;

    label {
        font-size: 1.1em;
        color: rgb(233, 237, 241);
        margin-left: 0.25rem;
        margin-bottom: 0.25rem;
    }

    input {
        background-color: transparent;
        border: 1px solid rgb(161, 165, 190);
        border-radius: 6px;
        padding: 0.65rem 1rem;
        color: rgb(243, 245, 248);

        &::placeholder {
            color: rgb(161, 165, 190);
        }

        &.red {
            border: 1px solid rgb(252, 66, 116);
        }
    }

    div {
        text-align: right;
        color: rgb(252, 66, 116);
        visibility: hidden;
        margin-top: 0.1rem;

        &.visible {
            visibility: visible;
        }
    }
`;
