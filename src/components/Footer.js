import React from 'react';
import styled from 'styled-components';
import { colors } from '../style';

// Images
import { ReactComponent as Logo } from '../images/logo.svg';
import { ReactComponent as Facebook } from '../images/icon-facebook.svg';
import { ReactComponent as Pinterest } from '../images/icon-pinterest.svg';
import { ReactComponent as Instagram } from '../images/icon-instagram.svg';
import { ReactComponent as Twitter } from '../images/icon-twitter.svg';

const Container = styled.footer`
  background: ${colors.darkViolet};
`;

const Content = styled.div`
  width: 100vw;
  max-width: 1200px;
  display: flex;
  justify-content: space-around;
  color: white;
  margin: 3rem auto;

  @media all and (max-width: 1200px) {
    max-width: 100%;
  }

  @media all and (max-width: 576px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Category = styled.div`
  line-height: 2rem;

  @media all and (max-width: 576px) {
    width: 100%;
    text-align: center;
    margin: .75rem 0;
  }
`;

const CategoryTitle = styled.h4`
  font-weight: 700;
`;

const CategoryLink = styled.a`
  color: ${colors.grayViolet};

  &:hover {
    color: ${colors.cyan};
  }
`;

const Social = styled.div`
  display: flex;
`;

const Icon = styled.a`
  cursor: pointer;
  color: ${colors.white};
  margin: 0 .5rem;

  &:hover {
    color: ${colors.cyan};
  }
`;

function Footer() {
  const categories = [
    {
      title: 'Features',
      content: ['Link Shortening', 'Branded Links', 'Analytics'],
    },
    {
      title: 'Resources',
      content: ['Blog', 'Developers', 'Support'],
    },
    {
      title: 'Company',
      content: ['About', 'Our Team', 'Careers', 'Contact'],
    },
  ];

  return (
    <Container>
      <Content>
        <Logo />

        {categories.map(category => {
          return (
            <Category>
              <CategoryTitle>{category.title}</CategoryTitle>
              <ul>
              {category.content.map(link => {
                return (
                  <li><CategoryLink href='#'>{link}</CategoryLink></li>
                )
              })}
              </ul>
            </Category>
          )
        })}

        <Social>
        <Icon href='#'>
          <Facebook />
        </Icon>
        <Icon href='#'>
          <Twitter />
        </Icon>
        <Icon href='#'>
          <Pinterest />
        </Icon>
        <Icon href='#'>
          <Instagram />
        </Icon>
      </Social>
      </Content>
    </Container>
  );
}

export default Footer;
