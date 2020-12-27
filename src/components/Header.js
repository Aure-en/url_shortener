import React from 'react'
import styled from 'styled-components';
import { colors } from '../style';

// Images
import { ReactComponent as Logo } from '../images/logo.svg';

const Container = styled.header`
  display: flex;
  align-items: center;
`;

const Nav = styled.nav`
  display: flex;
  flex: 1;
`;

const Authentification = styled.div`
  margin-left: auto;
`;

const Link = styled.a`
  padding: .5rem 1rem;
  color: ${colors.gray};

  &:hover {
    color: ${colors.black};
  }
`;

const Button = styled(Link)`
  background: ${colors.cyan};
  border-radius: 1rem;
  color: ${colors.white};

  &:hover {
    background: ${colors.lightCyan};
    color: ${colors.white};
  }
`;

function Header() {
  return (
    <Container>
      <Logo />
      <Nav>
        <div>
          <Link href='#'>Features</Link>
          <Link href='#'>Pricing</Link>
          <Link href='#'>Resources</Link>
        </div>
        <Authentification>
          <Link href='#'>Login</Link>
          <Button href='#'>Sign Up</Button>
        </Authentification>
      </Nav>
    </Container>
  )
}

export default Header
