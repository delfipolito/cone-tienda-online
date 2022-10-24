import { Row, Col, Carousel, Button } from "react-bootstrap";

export default function Press(props) {
    const{Press} = props;
    console.log(props);
    return (
        <Row className="display-mobile-none">
            <Carousel className="main-carousel px-5">
                <Carousel.Item>
                    <div className="d-flex align-items-center mobile-column carousel-item-h px-5 ">
                        <Col xs={12} sm={12} md={10} lg={7} className="px-5 px-md-0 ps-md-0 pe-md-0">
                            <h1 className="px-5 mb-0">&Prime;</h1>
                            <h1 className="fs-4-1 d-block fw-normal align-items-start px-5">
                                We want to remain at the forefront of redefining Latin America's financial system. A blockchain-based financial system inevitably results in faster, scalable and programmable financial products that will grant access to a broader segment of the population that is currently underserved.
                            </h1>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={4} className="d-flex align-items-center justify-content-center">
                            <Button className="rounded-pill text-right mt-3 w-75 align-items-end" variant="outline-light" href="https://www.coindesk.com/business/2022/08/18/blockchain-protocol-algorand-leads-22m-investment-round-in-tokenization-firm-koibanx/" target="_blank">Read more</Button>
                        </Col>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="d-flex align-items-center mobile-column carousel-item-h px-5">
                        <Col xs={12} sm={12} md={10} lg={7} className="px-5 px-md-0 ps-md-0 pe-md-0">
                            <h1 className="px-5 mb-0">&Prime;</h1>
                            <h1 className="fs-4-1 d-block fw-normal px-5">
                            The forms of intellectual property reached by the agreement include trademarks, patents and all kinds of copyright: such as songs, lyrics, videos, shows, conferences, podcasts and all forms of content that can be transmitted.
                            </h1>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={4} className="d-flex align-items-center justify-content-center">
                            <Button className="rounded-pill text-right mt-3 w-75" variant="outline-light" href="https://www.forbesargentina.com/innovacion/una-empresa-argentina-ayudara-exportar-creaciones-artistas-tecnologia-blockchain-n16390" target="_blank">Read more</Button>
                        </Col>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="d-flex align-items-center mobile-column carousel-item-h px-5">
                        <Col xs={12} sm={12} md={10} lg={7} className="px-5 px-md-0 ps-md-0 pe-md-0">
                            <h1 className="px-5 mb-0">&Prime;</h1>
                            <h1 className="fs-4-1 d-block fw-normal px-5">
                            Mi Vacuna provides exact statistics on the penetration rate of the COVID-19 vaccination program. This application connects with the Koibanx platform, where a blockchain identity is created for each citizen with the records or information of each care and/or interaction with the Colombian health system.
                            </h1>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={4} className="d-flex align-items-center justify-content-center">
                            <Button className="rounded-pill text-right mt-3 w-75" variant="outline-light" href="https://www.eltiempo.com/contenido-comercial/el-exito-e-impacto-de-mi-vacuna-en-alianza-con-la-plataforma-koibanx-675784" target="_blank">Read more</Button>
                        </Col>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="d-flex align-items-center mobile-column carousel-item-h px-5">
                        <Col xs={12} sm={12} md={10} lg={7} className="px-5 px-md-0 ps-md-0 pe-md-0">
                            <h1 className="px-5 mb-0">&Prime;</h1>
                            <h1 className="fs-4-1 d-block fw-normal px-5">
                            It is necessary to resolve, in advance, important technological and regulatory aspects to achieve an orderly massification of tokenization and, especially, to advance in a legal framework on the scope of smart contracts.
                            </h1>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={4} className="d-flex align-items-center justify-content-center">
                            <Button className="rounded-pill text-right mt-2 w-75" variant="outline-light" href="https://www.infobae.com/opinion/2022/09/01/el-negocio-de-la-tokenizacion-de-commodities-e-inmuebles-puede-desarrollarse-legalmente-en-argentina/" target="_blank">Read more</Button>
                        </Col>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="d-flex align-items-center mobile-column carousel-item-h px-5">
                        <Col xs={12} sm={12} md={10} lg={7} className="px-5 px-md-0 ps-md-0 pe-md-0">
                            <h1 className="px-5">&Prime;</h1>
                            <h1 className="fs-4-1 d-block fw-normal px-5">
                            In the 2022 edition of the Green Awards festival, Algorand and Koibanx were invited to provide an explanatory workshop on blockchain technology and the different use cases. Thus, they listed the benefits of the Algorand blockchain in sustainable projects.
                            </h1>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={4} className="d-flex align-items-center justify-content-center">
                            <Button className="rounded-pill text-right mt-3 w-75" variant="outline-light" href="https://es.beincrypto.com/tecnologia-blockchain-promueve-sustentabilidad-gracias-koibanx-algorand/" target="_blank">Read more</Button>
                        </Col>
                    </div>
                </Carousel.Item>
            </Carousel>
        </Row>
    )
}
export async function getStaticProps({locale}) {
  // const response = await fetch("URL");
  // const result = await response.json();

    const response = await import(`../lang/${locale}.json`);

    console.log(response.default.Press);
    return {
        props: {
            Press: response.default.Press,
        }
    }
}