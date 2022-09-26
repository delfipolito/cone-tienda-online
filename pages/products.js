import { Container, Row, Col, Button } from "react-bootstrap";
import Image from "next/future/image";

export default function Products() {
  return (
    <>
      <section className="products-masthead">
        <Container className="px-4 px-lg-5 py-4 text-white main-product">
          <Row
            className="d-flex align-items-center"
            style={{ height: "200px" }}
          >
            <Col sm={12} md={4} lg={4} className="align-middle">
              <h4>Crypto Checkout</h4>
              <p className="font-p">
                Enable your merchants, e-commerce platform, collecting provider
                and gateways to receive payments in any cryptocurrency. Payments
                can be credited directly in cryptos or automatically converted
                (total or partially) into fiat, invested into other cryptos or
                stable coins.
              </p>
            </Col>
            <Col sm={12} md={8} lg={8}>
              <div className="position-relative">
                <div className="align-middle text-center mw-100">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/mw8mMhySftU"
                    title="YouTube video player"
                    frameBorder={0}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <Container className="px-4 px-lg-5 py-4 pt-5">
          <Row className="d-flex aling-items-center">
            <Col sm={12} md={12} lg={12}>
              <h4>Main Benefits</h4>
            </Col>
          </Row>
          <Row>
            <Col sm={12} className="col-md-5ths col-lg-5ths px-5">
              <h5>| 01</h5>
              <p className="fs-8">
                We connect your mobile banking app to our platform.
              </p>
            </Col>
            <Col sm={12} className="col-md-5ths col-lg-5ths px-5">
              <h5>| 02</h5>
              <p className="fs-8">
                Enabling to transfer, trade, collect in any tokenized asset.
              </p>
            </Col>
            <Col sm={12} className="col-md-5ths col-lg-5ths px-5">
              <h5>| 03</h5>
              <p className="fs-8">
                Enabling to transfer, trade, collect in any tokenized asset.
              </p>
            </Col>
            <Col sm={12} className="col-md-5ths col-lg-5ths px-5">
              <h5>| 04</h5>
              <p className="fs-8">
                Enabling to transfer, trade, collect in any tokenized asset.
              </p>
            </Col>
            <Col sm={12} className="col-md-5ths col-lg-5ths px-5">
              <h5>| 05</h5>
              <p className="fs-8">
                Enabling to transfer, trade, collect in any tokenized asset.
              </p>
            </Col>
          </Row>
        </Container>
        <Container className="px-4 px-lg-5 py-4">
          <Row className="d-flex align-items-center">
            <Col sm={10} md={10} lg={10}>
              <Row className="text-white">
                <Col sm={10} md={3} lg={3}>
                  <Image
                    src={require("../public/assets/clients/banco_de_valores.svg")}
                    alt="Banco Valores"
                    width={235}
                    style={{ height: "auto" }}
                  />
                  <p className="font-p">Breve descripción del proyecto</p>
                </Col>
                <Col sm={10} md={3} lg={3}>
                  <Image
                    src={require("../public/assets/clients/Abank.svg")}
                    alt="Abank"
                    width={235}
                    style={{ height: "auto" }}
                  />
                  <p className="font-p">Breve descripción del proyecto</p>
                </Col>
              </Row>
            </Col>
            <Col sm={2} md={2} lg={2}>
              <Image
                src={require("../public/assets/img/press.svg")}
                alt="Press section"
                width={20}
                style={{ height: "auto" }}
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
