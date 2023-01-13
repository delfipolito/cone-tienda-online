import { useEffect, useState } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import classNames from "classnames";
import Image from "next/future/image";
import Link from 'next/link'
import logo from "../../public/assets/img/Logo_Koibanx_Blanco.svg";
import LanguageSelector from "../LanguageSelector";
import useTranslation from 'next-translate/useTranslation';

export default function AppNavbar() {
  const {t} = useTranslation();
  const [isShrunk, setShrunk] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShrunk((isShrunk) => {
        if (
          !isShrunk &&
          (document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20)
        ) {
          return true;
        }

        if (
          isShrunk &&
          document.body.scrollTop < 4 &&
          document.documentElement.scrollTop < 4
        ) {
          return false;
        }

        return isShrunk;
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Navbar
        variant="light"
        expand="lg"
        fixed="top"
        className={classNames("py-3 z-front-2", { "navbar-shrink": isShrunk })}
        id="mainNav"
      >
        <Container className="sticky-top">
          <Link href="/" passHref>
            <Navbar.Brand >
              <Image
                alt="Koibanx Logo"
                src={logo}
                width={150}
                height={76}
                className="img-fluid"
              />

            </Navbar.Brand>
          </Link>
          <Navbar.Toggle
            className="navbar-toggle-right"
            aria-controls="basic-navbar-nav"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto my-2 my-lg-0 d-flex align-items-center" as="ul">
              <Nav.Item as="li">
                <Link href="/#products" passHref>
                  <Nav.Link>
                    {t('common:NavBar.products')}
                  </Nav.Link>
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link href="/about" passHref>
                  <Nav.Link>
                    {t('common:NavBar.aboutUs')}
                  </Nav.Link>
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link href="https://contact.koibanx.com/" target="_blank">
                  DEMO
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <LanguageSelector />
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
