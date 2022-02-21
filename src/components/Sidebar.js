import styled from "styled-components";
import Image from "next/image";
import { navItems } from "../utils";

const Sidebar = () => {
  return (
    <Wrapper>
      <LogoContainer>
        <Logo>
          <Image src="/img/logo.png" alt="Logo" width={256} height={56} />
        </Logo>
      </LogoContainer>
      <NavItemsContainer>
        {navItems.map((navItem, index) => (
          <NavItem key={index}>
            <NavIcon>{navItem.icon}</NavIcon>
            <NavTitle>{navItem.title}</NavTitle>
          </NavItem>
        ))}
      </NavItemsContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  border-right: 1px solid #282b2f;
  width: calc(22rem - 16px - 16px);
  padding: 0 1rem;
`;

const LogoContainer = styled.div`
  margin: 1.5rem 0;
`;

const Logo = styled.div`
  width: 44%;
  object-fit: contain;
  margin-left: 1.5rem;
`;

const NavItemsContainer = styled.div`
  margin-top: 3rem;
  cursor: pointer;
`;

const NavItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  font-weight: 500;
  border-radius: 0.5rem;
  margin-bottom: 1.5rem;
  height: 4rem;

  &:hover {
    background-color: #141519;
  }
`;

const NavIcon = styled.div`
  background-color: #141519;
  padding: 0.7rem;
  border-radius: 50%;
  margin: 0 1rem;
  display: grid;
  place-items: center;
`;

const NavTitle = styled.div``;

export default Sidebar;
