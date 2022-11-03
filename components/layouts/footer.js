import { Container, Row, Col, Button } from "react-bootstrap";
import Image from "next/future/image";
import Link from "next/link";
import { BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs";
import styles from "../../styles/Footer.module.css";

export default function AppFooter(props) {
  const { Footer, NoFooter } = props.children;

  if (NoFooter) {
    return;
  }

  return (
    <footer className="bg-dark mt-0 fs-7">
      <Container className="text-white pt-4 pb-3">
        <Row>
          <Col xs={6} sm={6} md={2} lg={2} className="h-100 pt-3 text-center fs-mobile">
            <span className="link-footer">{Footer && Footer.privacy || 'Privacy Policies'}</span>
          </Col>
          <Col xs={6} sm={6} md={3} lg={3} className="h-100 pt-3 text-center fs-mobile">
            <span className="link-footer">{Footer && Footer.termsConditions || 'Terms & Conditions: El Salvador'}</span>
          </Col>
          <Col xs={6} sm={6} md={5} lg={5} className="h-100 text-center row-btn">
            {/*<Link href="/jobs" passHref>*/}
            {/*  <Button*/}
            {/*    variant="outline-light"*/}
            {/*    className="rounded-pill px-4 m-2 fs-8"*/}
            {/*  >*/}
            {/*    {Footer && Footer.join || 'Join our Team'}*/}
            {/*  </Button>*/}
            {/*</Link>*/}
            <Button
              variant="outline-light"
              className="rounded-pill px-4 m-2 fs-8"
              href="mailto:info@koibanx.com"
            >
              {Footer && Footer.contact || 'Contact Us'}
            </Button>
          </Col>
          <Col xs={12} sm={12} md={2} lg={2} className="h-100">
            <p className="text-center align-middle fs-6 pt-3">
              <a href="https://www.linkedin.com/company/koibanx/mycompany/" className="text-white px-1" target="_blank" rel="noreferrer">
                <BsLinkedin style={{ "marginRight": "0.2em" }} />
              </a>
              <a href="https://twitter.com/koibanx" className="text-white px-1" target="_blank" rel="noreferrer">
                <BsTwitter style={{ "marginRight": "0.2em" }} />
              </a>
              <a href=" https://www.youtube.com/c/Koibanx " className="text-white px-1" target="_blank" rel="noreferrer">
                <BsYoutube />
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}