import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    background-color: #242a55;
    height: 100vh;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 95%;
    margin-top: 3rem;
`;

export const Title = styled.h1`
    color: #fffbfe;
    font-size: 2.25em;
`;

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 1rem;
`;

export const Prompt = styled.div`
    margin: 0.5rem 0;
    color: rgb(161, 165, 190);
`;

const Link = styled.a`
    display: inline-block;
    margin-left: 0.25rem;
`;

export const Signup = styled(Link)`
    border-radius: 0.25rem;
    border: 1px solid rgb(182, 187, 209);
    padding: 0.15rem 0.5rem;
    color: rgb(228, 232, 238);
`;

export const Reset = styled(Link)`
    border-bottom: 1px solid rgb(161, 165, 190);
`;
