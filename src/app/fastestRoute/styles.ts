import styled from "styled-components";

export const MainContent = styled.main`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 1.5rem;
    row-gap: 1rem;
    width: 75%;
    height: 80%;
    border-radius: 10px;
    background-color: white;
    box-shadow: 0px 13px 27px -5px rgba(50, 50, 93, 0.25),
		0px 8px 16px -8px rgba(0, 0, 0, 0.3),
		0px -6px 16px -6px rgba(0, 0, 0, 0.025);

    @media (max-width: 768px) {
      flex-direction: column-reverse;
      justify-content: center;
      padding: 0.5rem;
      row-gap: 2rem;
      width: 95%;

      overflow-y: scroll;
    }
`

export const RightSection = styled.section`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
`

export const Title = styled.h2`
  font-size: 1.5rem;
  color: #FF0048;
`

export const GuidanceText = styled.p`
  color: #ff0048;
  font-size: 0.9rem;
  margin-top: 0.7rem;
`
export const LeftSection = styled.section`
  display: flex;
  justify-content: center;
  width: 80%;
  height: 100%;

  @media (max-width: 768px) {
    margin-bottom: 25rem;
  }
`

export const FastestRouteInfo = styled.div`
  width: 100%;
`

export const FastestRouteField = styled.div`
  margin-top: 0.8rem;
`

export const FastestRouteLabel = styled.p`
  color: #FF0048;
  font-weight: bold;
  font-size: 0.9rem;
  margin-bottom: 0.2rem;
`

export const FastestRouteData = styled.span`
  color: #FF0048;
  font-size: 0.8rem;
`

export const LoadingScreen = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.5);
`
export const LastPathsTitle = styled.h3`
  margin-top: auto;
  color: #FF0048;
`
export const LastPathsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: scroll;
  width: 100%;
  height: 30%;

  margin-top: 0.5rem;
`