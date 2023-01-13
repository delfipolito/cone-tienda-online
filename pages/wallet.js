import { Container, Row, Col, Button } from "react-bootstrap";
import Image from "next/future/image";
import Link from "next/link"
import useTranslation from 'next-translate/useTranslation';

export default function Wallet() {
    const {t} = useTranslation();

    return (
        <>
            <section className="products-masthead-wallet text-white pt-5">
                <Container className="px-4 px-lg-3 pt-5">
                    <Row>
                        <Col sm={12} md={4} lg={4} className="d-flex align-items-center">
                            <div className="text-white">
                                <h4 className="pb-4 fst-normal">Wallet as a service</h4>
                                <p className="fs-5 fw-light">
                                    {t('common:Wallet.text')}
                                </p>
                                <div className="pt-4">
                                    <Link href="https://contact.koibanx.com/" className="btn-holder" passHref>
                                        <Button
                                            className="rounded-pill fs-5 w-50 btn-warning-koi"
                                            variant="outline-warning"
                                        >
                                            {t('common:Buttons.askQuote')}
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
                                    src={require("../public/assets/products/wallet_as.svg")}
                                    alt="Cross Border Settlements illustration"
                                    className="img-fluid"
                                    width={450}
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Container className="py-5">
                    <Row className="container d-flex aling-items-center">
                        <Col sm={12} md={12} lg={12}>
                            <h4>{t('common:Wallet.beneficiostitle')}</h4>
                        </Col>
                    </Row>
                    <Row className="container d-flex aling-items-center mt-2">
                        <Row>
                            <Col sm={6} className="col-md-5ths col-lg-5ths">
                                <h5>| 01</h5>
                                <p className="fs-8">
                                    {t('common:Wallet.main1')}
                                </p>
                            </Col>
                            <Col sm={6} className="col-md-5ths col-lg-5ths">
                                <h5>| 02</h5>
                                <p className="fs-8">
                                    {t('common:Wallet.main2')}
                                </p>
                            </Col>
                            <Col sm={6} className="col-md-5ths col-lg-5ths">
                                <h5>| 03</h5>
                                <p className="fs-8">
                                    {t('common:Wallet.main3')}
                                </p>
                            </Col>
                            <Col sm={6} className="col-md-5ths col-lg-5ths">
                                <h5>| 04</h5>
                                <p className="fs-8">
                                    {t('common:Wallet.main4')}
                                </p>
                            </Col>
                            <Col sm={6} className="col-md-5ths col-lg-5ths">
                                <h5>| 05</h5>
                                <p className="fs-8">
                                    {t('common:Wallet.main5')}
                                </p>
                            </Col>
                        </Row>
                    </Row>
                </Container>
            </section>
        </>
    );
}