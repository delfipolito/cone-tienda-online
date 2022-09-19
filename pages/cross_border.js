import { Container, Row, Col, Button } from "react-bootstrap";
import Image from "next/future/image";

export default function CrossBorder() {
    return (
        <>
            <section className="products-masthead">
                <Container className="px-4 px-lg-5">
                    <Row>
                        <Col sm={12} md={4} lg={4} className="d-flex align-items-center">
                            <div className="text-white">
                                <h4>Cross Border Settlements</h4>
                                <p className="font-p">
                                    Enabling instant USD-LATAM transfers in 9 LATAM countries by capturing USD locally in the US (FinCen regulated) via ACH or transfers, cards or cryptocurrencies. Convert that USD fiat to USDC and settle it locally.
                                </p>
                            </div>
                        </Col>
                        <Col sm={12} md={8} lg={8} className="d-flex align-items-center">
                            <div>
                                <Image src={require("../public/assets/products/cross_border_settlements.svg")} alt="Cross Border Settlements illustration" className="img-fluid" />
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Container className="px-4 pt-5 pt-sm-5 px-lg-5">
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
                                    Allows payments, collections and personal or corporate remittances.
                                </p>
                            </Col>
                            <Col sm={6} className="col-md-5ths col-lg-5ths">
                                <h5>| 02</h5>
                                <p className="fs-8">
                                    SaaS platform.
                                </p>
                            </Col>
                            <Col sm={6} className="col-md-5ths col-lg-5ths">
                                <h5>| 03</h5>
                                <p className="fs-8">
                                    APIs very intuitive and easy to integrate.
                                </p>
                            </Col>
                            <Col sm={6} className="col-md-5ths col-lg-5ths">
                                <h5>| 04</h5>
                                <p className="fs-8">
                                    Integrated KYC & AML.
                                </p>
                            </Col>
                            <Col sm={6} className="col-md-5ths col-lg-5ths">
                                <h5>| 05</h5>
                                <p className="fs-8">
                                    Better prices and times using crypto behind the scenes.
                                </p>
                            </Col>
                        </Row>
                    </Row>
                </Container>
                <Container className="px-4 pt-5 pt-sm-5 px-lg-5">
                    <Row className="pt-5 ge-5 d-flex align-items-center">
                        <Col sm={11} md={11} lg={11}>
                            <Row className="d-flex align-items-center gx-5">
                                <Col sm={12} md={3} lg={3} className="ps-0 pe-5 pe-sm-0 pe-md-0 pe-lg-0">
                                    <Image
                                        src={require("../public/assets/clients-koi/tigo.svg")}
                                        alt="Logo TIGO"
                                        className="pe-5 pe-lg-3 img-fluid"
                                        style={{ height: "auto" }}
                                    />
                                </Col>
                            </Row>
                        </Col>
                        <Col sm={1} md={1} lg={1} className="text-center">
                            <Image
                                src={require("../public/assets/img/cases.svg")}
                                alt="Products section"
                                width={18}
                                style={{ height: "auto" }}
                            />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}
