import React, { useState, useRef } from 'react'
import styled from 'styled-components';
import { colors, button } from '../style';

// Images
import { ReactComponent as Logo } from '../images/logo.svg';
import { ReactComponent as Hamburger } from '../images/icon-hamburger.svg';

const Container = styled.header`
  display: flex;
  align-items: center;
  padding: 1rem 5rem;
  width: 100vw;
  max-width: 1200px;
  align-self: center;
  color: #34313D;

  @media all and (max-width: 1200px) {
    max-width: 100%;
    padding: 1rem 0;
  }
  
  @media all and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }

  @media all and (max-width: 576px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 1rem;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex: 1;

  @media all and (max-width: 768px) {
    margin-top: 1rem;
  }

  @media all and (max-width: 576px) {
    position: absolute;
    top: 3rem;
    left: 50%;
    transform: translateX(-50%);
    width: 80vw;
    padding: 2rem;
    border-radius: 1rem;
    background: ${colors.violet};
    display: ${props => props.isNavOpen ? 'block' : 'none'};
    text-align: center;
  }
`;

const NavLinks = styled.div`
  @media all and (max-width: 576px) {
    position: relative;
    display: flex;
    flex-direction: column;
    padding-bottom: 1rem;

    &:before {
      content: '';
      position: absolute;
      bottom: 0;
      height: 1px;
      width: 90%;
      left: 50%;
      transform: translateX(-50%);
      background-color: ${colors.grayViolet};
      z-index: 1;
      opacity: .5;
    }
  }
`;

const Authentification = styled.div`
  margin-left: auto;
  margin-top: 1rem;

  @media all and (max-width: 576px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Link = styled.a`
  padding: .5rem 1rem;
  color: ${colors.grayViolet};
  font-weight: 500;

  &:hover {
    color: ${colors.black};
  }

  @media all and (max-width: 576px) {
    color: ${colors.white};
    padding: 1rem;

    &:hover {
      color: ${colors.cyan};
    }
  }
`;

const Button = styled(Link)`
  ${button}
  border-radius: 2rem;
`;

const NavButton = styled.button`
  display: none;
  color: ${colors.grayViolet};
  cursor: pointer;

  @media all and (max-width: 576px) {
    display: block;
  }
`;

function Header() {

  const navRef = useRef();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleOpenNav = () => {
    setIsNavOpen(true);
    const closeNavOnClick = (e) => {
      if (!navRef.current.contains(e.target)) {
        setIsNavOpen(false);
        document.removeEventListener('click', closeNavOnClick);
      }
    }
    setTimeout(() => document.addEventListener('click', closeNavOnClick));
  }

  return (
    <Container>
      <Logo />
      <NavButton onClick={handleOpenNav}><Hamburger /></NavButton>
      <Nav isNavOpen={isNavOpen} ref={navRef}>
        <NavLinks>
          <Link href='#'>Features</Link>
          <Link href='#'>Pricing</Link>
          <Link href='#'>Resources</Link>
        </NavLinks>
        <Authentification>
          <Link href='#'>Login</Link>
          <Button href='#'>Sign Up</Button>
        </Authentification>
      </Nav>
    </Container>
  )
}

export default Header
