import { Container, Row, Col, Button } from "react-bootstrap";
import Image from "next/future/image";
import Link from "next/link";
import { BsLinkedin, BsTwitter, BsInstagram } from "react-icons/bs";
import koibanxImage from "../../public/assets/img/Logo_Koibanx_Blanco.svg";
import styles from "../../styles/Footer.module.css";

export default function AppFooter() {
  return (
    <footer className="footer bg-dark mt-0 fs-7">
      <Container className="px-4 px-lg-5 py-4 text-white">
        <Row className="align-items-center justify-content-between align-middle">
          <Col md={2} lg={2} className="text-center">
            <Image
              className="img-fluid"
              src={koibanxImage}
              width={120}
              style={{ height: "50px" }}
              alt="Koibanx Logo"
            ></Image>
          </Col>
          <Col md={4} lg={4} className="text-center">
            <div>
              <a href="https://linktr.ee/koibanxpolicy" target="_blank" rel="noreferrer" className="text-decoration-none">
                <p className="small text-center a-link pt-3 text-decoration-none">
                  Políticas de privacidad
                </p>
              </a>
            </div>
          </Col>
          <Col md={4} lg={4} className="text-center">
            <Link href="/jobs" passHref>
              <Button
                variant="outline-light"
                className="rounded-pill px-4 m-2 fs-8"
              >
                Join our team
              </Button>
            </Link>
            <Button
              variant="outline-light"
              className="rounded-pill px-4 m-2 fs-8"
              href="mailto:info@koibanx.com"
            >
              Contact us
            </Button>
          </Col>
          <Col md="2" className="text-center">
            <p className="text-center align-middle fs-6 pt-3">
              <a href="https://www.linkedin.com/company/koibanx/mycompany/" className="text-white px-1" target="_blank" rel="noreferrer">
                <BsLinkedin style={{ "marginRight": "0.2em" }} />
              </a>
              <a href="https://twitter.com/koibanx" className="text-white px-1" target="_blank" rel="noreferrer">
                <BsTwitter style={{ "marginRight": "0.2em" }} />
              </a>
              <a href="https://www.instagram.com/koibanx/?hl=es" className="text-white px-1" target="_blank" rel="noreferrer">
                <BsInstagram />
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
