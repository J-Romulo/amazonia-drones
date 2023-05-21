import styled from "styled-components";
import '../../app/globals.css'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const SelectionButtons = styled.div`
    display: flex;
    flex-direction: row;
    column-gap: 2rem;
    margin-bottom: 1.5rem;
`

export const SelectionButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    display: inline-block;
    background-color: #FFF;
    border-radius: 4px;
    text-decoration: none;
    cursor: pointer;
    transition: background-color 0.3s ease;

    > svg {
        color: #FF0048;
    }

    &:hover {
        background-color: #800024;
        > svg {
            color: #FFF;
        }
    }
`
export const CalculateButton = styled.div`
    width: fit-content;
    display: inline-block;
    padding: 10px 20px;
    background-color: #FF0048;
    color: #fff;
    border-radius: 4px;
    text-decoration: none;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #800024;
    }
`
export const Board = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`
export const LettersLine = styled.div`
    display: flex;
    margin-left: 1.5rem;
    margin-top: 0.5rem;
`

export const Letters = styled.span`
    font-size: 0.5rem;
    width: 1.7rem;
    height: 1.7rem;
`

export const Row = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    span {
        font-size: 0.5rem;
        margin-right: 0.5rem;
    }
`

export const Square = styled.div<{isDarkSquare: boolean; isSelected: boolean}>`
    width: 1.8rem;
    height: 1.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: 1px solid #c7c7c7;
    background-color: ${prop => prop.isDarkSquare ? '#FF0048' : 'white'};
    transition: transform 0.4s;

    > svg {
        display: ${prop => prop.isSelected ? 'block' : 'none'};
        color: ${prop => prop.isDarkSquare ? '#FFF' : '#FF0048'};;
    }

    &:hover {

        > svg {
            display: block;
        }

        transform: scale(1.3);
    }
`