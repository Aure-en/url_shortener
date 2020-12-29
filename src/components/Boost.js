import React from 'react'
import styled from 'styled-components'
import { colors, button } from '../style';
import bg_boost from '../images/bg-boost-desktop.svg';

const Container = styled.div`
  background: ${colors.violet};
  background-image: url(${bg_boost});
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  line-height: 2.75rem;
  color: ${colors.white}
`;

const Button = styled.button`
  ${button}
  border-radius: 2rem;
`;

function Boost() {
  return (
    <Container>
      <Title>Boost your links today</Title>
      <Button>Get started</Button>
    </Container>
  )
}

export default Boost
