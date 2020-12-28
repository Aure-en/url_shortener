import React from 'react'
import styled from 'styled-components'
import illustration from '../images/illustration-working.svg'
import { colors, button } from '../style';

const Container = styled.div`
  background-image: url(${illustration});
  background-repeat: no-repeat;
  background-position: 125% 50%;
  height: 70vh;
  margin: 0 5rem;
  display: flex;
  align-items: center;
  overflow: hidden;
`;

const Content = styled.div`
  max-width: 30rem;
`;

const Title = styled.h1`
  font-size: 3.75rem;
  font-weight: 700;
`;

const Description = styled.p`
  line-height: 1.5rem;
  color: ${colors.gray};
  margin: 1rem 0;
`;

const Button = styled.button`
  ${button}
  margin-top: 1rem;
  border-radius: 2rem;
`;

function Hero() {
  return (
    <Container >
      <Content>
        <Title>More than just shorter links</Title>
        <Description>Build your brand's recognition and get detailed insights on how your links are performing.</Description>
        <Button>Get Started</Button>
      </Content>
    </Container>
  )
}

export default Hero
