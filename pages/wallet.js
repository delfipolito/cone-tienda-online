import { Container, Row, Col, Button } from "react-bootstrap";
import Image from "next/future/image";
import Link from "next/link"

export default function Wallet(props) {
    const{Wallet} = props;
    console.log(props);
    return (
        <>
        <container fluid className="rectangulo text-white">
            <section className="container-fluid products-masthead-wallet h-100 d-flex flex-column align-items-center justify-content-center">
                <Row className="container">
                    <Col sm={12} md={4} lg={4} className="d-flex flex-column">
                        <h4 className="pb-4 fst-normal">Wallet as a service</h4>
                        <p className="fs-5 fw-light">
                            {Wallet.text}
                        </p>

                        <Link href="https://contact.koibanx.com/" className="btn-holder" passHref>
                            <Button
                            className="rounded-pill fs-5 w-50 btn-warning-koi mt-4"
                            variant="outline-warning"
                            >
                                Ask for a quote
                            </Button>
                        </Link>
                    </Col>
                    <Col sm={12} md={2} lg={2} className="d-flex align-items-center">
                    </Col>
                    <Col sm={12} md={6} lg={6}>
                        <div className="text-center">
                            <Image
                            src={require("../public/assets/products/wallet_as.svg")}
                            alt="Cross Border Settlements illustration"
                            className="img-fluid align-self-center"
                            width={450}
                            />
                        </div>
                    </Col>
                </Row>
                <Row className="container d-flex aling-items-center">
                    <Col sm={12} md={12} lg={12}>
                        <h4>{Wallet.beneficiostitle}</h4>
                    </Col>
                </Row>
                <Row className="container d-flex aling-items-center mt-3">
                    <Row>
                        <Col sm={6} className="col-md-5ths col-lg-5ths">
                            <h5>| 01</h5>
                            <p className="fs-8">
                                {Wallet.main1}
                            </p>
                        </Col>
                        <Col sm={6} className="col-md-5ths col-lg-5ths">
                            <h5>| 02</h5>
                            <p className="fs-8">
                                {Wallet.main2}
                            </p>
                        </Col>
                        <Col sm={6} className="col-md-5ths col-lg-5ths">
                            <h5>| 03</h5>
                            <p className="fs-8">
                                {Wallet.main3}
                            </p>
                        </Col>
                        <Col sm={6} className="col-md-5ths col-lg-5ths">
                            <h5>| 04</h5>
                            <p className="fs-8">
                                {Wallet.main4}
                            </p>
                        </Col>
                        <Col sm={6} className="col-md-5ths col-lg-5ths">
                            <h5>| 05</h5>
                            <p className="fs-8">
                                {Wallet.main5}
                            </p>
                        </Col>
                    </Row>
                </Row>
            </section>
        </container>
        </>
    );
}
export async function getStaticProps({locale}) {
  // const response = await fetch("URL");
  // const result = await response.json();

    const response = await import(`../lang/${locale}.json`);

    console.log(response.default.Wallet);
    return {
        props: {
            Wallet: response.default.Wallet,
        }
    }
}