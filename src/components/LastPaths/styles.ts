import styled from "styled-components";

export const LastPathsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`

export const LastPath = styled.p`
    color: #FF0048;
    font-size: 0.6rem;

    & + & {
        margin-top: 1rem;
    }
`