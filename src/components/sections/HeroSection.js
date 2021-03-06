import React from "react"
import styled, { keyframes } from "styled-components"
import { WaveBackground } from "../backgrounds/WaveBackground"
import PrimaryButton from "../buttons/PrimaryButton"
import ProfilePicture from "../ProfilePicture"
import { H2, MediumText } from "../styles/TextStyles"
import Socials from "../Socials"

function HeroSection() {
  return (
    <Wrapper>
      <WaveBackground />
      <ContentWrapper>
        <TextWrapper>
          <ProfilePicture />
          <Title>Hi, i'm Abdulrahim Iliasu Illo</Title>
          <Description>
            I'm a Software Engineer who loves Sofware Developement, Artificial
            Intelligence and Entreprenuership
          </Description>
          <PrimaryButton />
        </TextWrapper>
        <Socials />
      </ContentWrapper>
    </Wrapper>
  )
}

export default HeroSection

const Wrapper = styled.div`
  overflow: hidden;
`
const animation = keyframes`
  from { opacity: 0; transform: translateY(-10px); filter: blur(10px); }
  to { opacity: 1; transform: translateY(0px); filter: blur(0px); }
`

const ContentWrapper = styled.div`
  max-width: 1234px;
  padding: 200px 10px;
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-around;

  @media only screen and (max-width: 620px) {
    grid-template-columns: auto;
    justify-content: space-evenly;
    padding: 120px 10px;
    gap: 5px;
  }

  @media only screen and (min-width: 450px) and (max-width: 768px) {
    padding: 150px 20px 250px;
    gap: 20px;
  }

  @media only screen and (min-width: 768px) and (max-width: 1140px) {
    padding: 150px 20px 250px;
    gap: 40px;
  }
`
const TextWrapper = styled.div`
  max-width: 360px;
  display: grid;
  gap: 30px;
  > * {
    :nth-child(1) {
      animation: ${animation} 1s 0s forwards;
    }
    :nth-child(2) {
      animation: ${animation} 1s 0.2s forwards;
    }
    :nth-child(3) {
      animation: ${animation} 1s 0.3s forwards;
    }
    :nth-child(4) {
      animation: ${animation} 1s 0.4s forwards;
    }
  }

  @media only screen and (max-width: 450px) {
    padding: 10px;
    gap: 20px;
  }
`

const Title = styled(H2)`
  color: white;
  text-shadow: 0px 20px 40px rgba(0, 0, 0, 0.3);
`
const Description = styled(MediumText)``
