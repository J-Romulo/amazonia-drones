'use client'
import styled, {keyframes} from "styled-components";
import Image from 'next/image'

export const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FF0048;
`

export const MainContent = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.5rem;
    row-gap: 1rem;
    width: 50%;
    height: 50%;
    border-radius: 10px;
    background-color: white;
    box-shadow: 0px 13px 27px -5px rgba(50, 50, 93, 0.25),
		0px 8px 16px -8px rgba(0, 0, 0, 0.3),
		0px -6px 16px -6px rgba(0, 0, 0, 0.025);
`

export const PresentationText = styled.p`
    text-align: justify;
`

export const StyledButton = styled.a`
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

const transitionAnimation = keyframes`
  0% {
    transform: translate(-100%, -100%) scale(0);
  }
  100% {
    transform: translate(75%, 75%) scale(2);
  }
`;

export const TransitionImage = styled(Image)`
  display: none;
  &.active {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 500%;
    height: 500%;
    animation: ${transitionAnimation} 3s ease-out forwards;
  }
`;