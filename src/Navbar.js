import React, { useState, useEffect } from "react";
import styled from "styled-components";
import logo from "./assets/logo.svg";
import Menu from "./components/Menu";
import Tabs from "./components/Tabs";
import Hamburger from "hamburger-react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const location = useLocation();

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, [location]);
  const [isOpen, setOpen] = useState(false);
  const medium = 700;

  return (
    <NavbarSection>
      <NavbarContainer className={!isOpen && "isClosed"}>
        <StyledLink to="/">
          <img alt="" src={logo} />
        </StyledLink>
        {width >= medium ? (
          <Tabs mode={"large"} location={location.pathname} />
        ) : (
          <>
            <Hamburger
              toggled={isOpen}
              size={20}
              toggle={setOpen}
              direction="right"
            />
            <Menu open={isOpen} location={location.pathname} />
          </>
        )}
      </NavbarContainer>
    </NavbarSection>
  );
};

const StyledLink = styled(Link)`
  height: 21px;
`;

const NavbarSection = styled.section`
  z-index: 200;
  background: transparent;
  background: black;
  position: fixed;
  top: 0;
  width: 100%;
  box-sizing: border-box;
  padding: 20px 80px;
  margin: auto;

  @media only screen and (max-width: 850px) {
    padding: 20px 60px;
  }
  @media only screen and (max-width: 700px) {
    padding: 20px 40px;
  }
  .hamburger-react {
    position: relative;
    z-index: 3;
    color: white;
  }
  img {
    @media only screen and (max-width: 700px) {
      height: 11px;
    }
  }
`;

const NavbarContainer = styled.div`
  padding: 0;
  margin-top: 0;
  margin-bottom: 0;
  @media only screen and (max-width: 700px) {
    padding: 10px 0;
    align-items: center;
  }
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-items: center;
`;

export default Navbar;
