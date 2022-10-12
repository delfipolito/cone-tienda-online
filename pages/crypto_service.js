import { Container, Row, Col, Button } from "react-bootstrap";
import Image from "next/future/image";
import Link from "next/link"

export default function CryptoService() {
    return (
        <>
            <section className="products-masthead-cryptoser text-white pt-5">
                <Container className="px-4 px-lg-5 pt-5">
                    <Row>
                        <Col sm={12} md={4} lg={4} className="d-flex align-items-center">
                            <div className="text-white">
                                <h4 className="pb-4 fst-normal">Crypto As a Service</h4>
                                <p className="fs-5 fw-light">
                                Cryptocurrency infrastructure for your channels. Plug and play solution, we enable banks and digital wallets to provide their own customers with the ability to buy, sell, receive, send and store cryptocurrencies on their platforms.
                                </p>
                                <div className="pt-4">
                                    <Link href="https://contact.koibanx.com/" className="btn-holder" passHref>
                                        <Button
                                        className="rounded-pill fs-5 w-50 btn-warning-koi"
                                        variant="outline-warning"
                                        >
                                        Ask for a quote
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </Col>
                        <Col sm={12} md={2} lg={2} className="d-flex align-items-center">
                        </Col>
                        <Col sm={12} md={6} lg={6} className="d-flex align-items-center">
                            <div>
                                <Image
                                src={require("../public/assets/products/crypto_service.svg")}
                                alt="Cross Border Settlements illustration"
                                className="img-fluid"
                                width={450}
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Container className="px-4 px-lg-5 pb-5">
                    <Row className="d-flex aling-items-center">
                        <Col sm={12} md={12} lg={12}>
                            <h4>Main Benefits</h4>
                        </Col>
                    </Row>
                    <Row className="pt-0 pt-md-3 pt-lg-5">
                        <Row className="gx-sm-0 gx-md-3 gx-lg-3 gy-2 gy-lg-0">
                            <Col sm={6} className="col-md-5ths col-lg-5ths">
                                <h5>| 01</h5>
                                <p className="fs-8">
                                    Allows the purchase, holding and sale of cryptocurrencies.
                                </p>
                            </Col>
                            <Col sm={6} className="col-md-5ths col-lg-5ths">
                                <h5>| 02</h5>
                                <p className="fs-8">
                                    Easy integration with wallets or banking systems.
                                </p>
                            </Col>
                            <Col sm={6} className="col-md-5ths col-lg-5ths">
                                <h5>| 03</h5>
                                <p className="fs-8">
                                    Total traceability and monitoring of transactions in real time.
                                </p>
                            </Col>
                            <Col sm={6} className="col-md-5ths col-lg-5ths">
                                <h5>| 04</h5>
                                <p className="fs-8">
                                    APIs very intuitive and easy to integrate.
                                </p>
                            </Col>
                            <Col sm={6} className="col-md-5ths col-lg-5ths">
                                <h5>| 05</h5>
                                <p className="fs-8">
                                    We have the best security and technology practices to ensure the best custody management.
                                </p>
                            </Col>
                        </Row>
                    </Row>
                </Container>
            </section>
        </>
    );
}
