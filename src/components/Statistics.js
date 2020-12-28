import React from 'react'
import styled from 'styled-components';
import { colors } from '../style';

// svg icons
import svg_1 from '../images/icon-brand-recognition.svg';
import svg_2 from '../images/icon-detailed-records.svg';
import svg_3 from '../images/icon-fully-customizable.svg';

const Container = styled.section`
  background: ${colors.background};
  padding: 5rem 0;
`;

const Heading = styled.div`
  max-width: 29rem;
  text-align: center;
  margin: 0 auto 5rem auto;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  line-height: 2.75rem;
`;

const Text = styled.p`
  line-height: 1.5rem;
  color: ${colors.grayViolet};
  margin: .5rem 0;
`;

const CardsList = styled.ul`
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  width: 100vw;
  max-width: 1200px;
  margin: 0 auto;
  align-items: start;

  @media all and (max-width: 1200px) {
    max-width: 100%;
  }

  // Cyan Line
  &:before {
    position: absolute;
    top: calc(50% - 1.5rem);
    left: 0;
    content: '';
    height: 5px;
    width: 90%;
    background-color: ${colors.cyan};
  }
`;

const Card = styled.li`
  position: relative;
  background: ${colors.white};
  padding: 4.25rem 2rem 2rem 2rem;
  border-radius: .5rem;
  margin-top: ${props => `${props.index * 2}rem`};
`;

const CardIcon = styled.div`
  position: absolute;
  top: -2.5rem;
  width: 5rem;
  height: 5rem;
  background-color: ${colors.violet};
  background-image: url(${props => props.icon});
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 50%;
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
`;

function Statistics() {

  const cards = [
    {
      icon: svg_1,
      title: 'Brand Recognition',
      text: "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.",
    },
    {
      icon: svg_2,
      title: 'Detailed Records',
      text: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
    },
    {
      icon: svg_3,
      title: 'Fully Customizable',
      text: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
    },
  ]

  return (
    <Container>
      <Heading>
        <Title>Advanced Statistics</Title>
        <Text>Track how your links are performing across the web with our advanced statistics dashboard.</Text>
      </Heading>

      <CardsList>
        {cards.map((card, index) => {
          return (
            <Card key={index} index={index}>
              <CardIcon icon={card.icon} />
              <CardTitle>{card.title}</CardTitle>
              <Text>{card.text}</Text>
            </Card>
          )
        })}
      </CardsList>
    </Container>
  )
}

export default Statistics
