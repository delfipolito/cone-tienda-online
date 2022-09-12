import { Container, Row, Col, Button } from "react-bootstrap";
import Image from "next/future/image";

export default function Wallet() {
    return (
        <>
            <section className="products-masthead">
                <Container className="px-4 px-lg-5">
                    <Row>
                        <Col sm={12} md={4} lg={4} className="d-flex align-items-center">
                            <div className="text-white">
                                <h4>Wallet As a Service</h4>
                                <p className="font-p">
                                    We connect your mobile banking application, wallet or payment channel to our platform, allowing you to transfer, exchange and collect any tokenized asset. We deploy white-label wallets for institutions to power their acquiring networks and offer their users and merchants e-commerce and transfers in their own currencies.
                                </p>
                            </div>
                        </Col>
                        <Col sm={12} md={8} lg={8} className="d-flex align-items-center">
                            <div>
                                <Image src={require("../public/assets/products/wallet_as_service.png")} alt="Wallet as Service illustration" className="img-fluid" />
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
                                    Decreased risk of theft or loss of cash, by not having to carry it with you.
                                </p>
                            </Col>
                            <Col sm={6} className="col-md-5ths col-lg-5ths">
                                <h5>| 02</h5>
                                <p className="fs-8">
                                    Greater security when making transactions.
                                </p>
                            </Col>
                            <Col sm={6} className="col-md-5ths col-lg-5ths">
                                <h5>| 03</h5>
                                <p className="fs-8">
                                    APIs available for easy integration.
                                </p>
                            </Col>
                            <Col sm={6} className="col-md-5ths col-lg-5ths">
                                <h5>| 04</h5>
                                <p className="fs-8">
                                    Reduces the risk of fraud. Time saving.
                                </p>
                            </Col>
                            <Col sm={6} className="col-md-5ths col-lg-5ths">
                                <h5>| 05</h5>
                                <p className="fs-8">
                                    They offer greater security to the user.
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
                                        src={require("../public/assets/clients-koi/rus.svg")}
                                        alt="Logo RUS"
                                        className="pe-5 pe-lg-3 img-fluid"
                                        style={{ height: "auto" }}
                                    />
                                </Col>
                                <Col sm={12} md={3} lg={3} className="ps-0 pe-5 pe-sm-0 pe-md-0 pe-lg-0">
                                    <Image
                                        src={require("../public/assets/clients-koi/banco-de-valores.svg")}
                                        alt="Logo Banco de Valores"
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
