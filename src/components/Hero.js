import React from 'react'
import styled from 'styled-components'
import illustration from '../images/illustration-working.svg'
import { colors, button } from '../style';

const Container = styled.div`
  background-image: url(${illustration});
  background-repeat: no-repeat;
  background-position: 125% 50%;
  height: 70vh;
  width: 100vw;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 5rem;
  align-self: center;

  @media all and (max-width: 1200px) {
    max-width: 100%;
  }

  @media all and (max-width: 768px) {
    background-image: none;
    height: initial;
    align-items: center;
  }
`;

const Content = styled.div`
  max-width: 30rem;
  margin: 2rem 1rem;
`;

const Title = styled.h1`
  font-size: 3.75rem;
  font-weight: 700;
`;

const Description = styled.p`
  line-height: 1.5rem;
  color: ${colors.grayViolet};
  margin: 1rem 0;
`;

const Button = styled.button`
  ${button}
  margin-top: 1rem;
  border-radius: 2rem;
`;

const Image = styled.img`
  display: none;

  @media all and (max-width: 576px) {
    display: block;
  }
`;

function Hero() {
  return (
    <Container>
      <Image src={illustration} alt='Man working on a computer' />
      <Content>
        <Title>More than just shorter links</Title>
        <Description>Build your brand's recognition and get detailed insights on how your links are performing.</Description>
        <Button>Get Started</Button>
      </Content>
    </Container>
  )
}

export default Hero
