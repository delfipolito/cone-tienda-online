import { Row, Col, Carousel, Button } from "react-bootstrap";
import Image from "next/future/image";

export default function Pressmobile() {
    return (
        <Row className="display-mobile-yes">
            <Carousel className="ps-5 mt-5">
                <Carousel.Item>
                    <div>
                        <Row className="px-4">
                            <Col xs={11} sm={11} md={12} lg={12} className="px-0">
                            <h3 className="margin-mobile">"</h3>
                            <p>
                            We want to remain at the forefront of redefining Latin America's financial system. A blockchain-based financial system inevitably results in faster, scalable and programmable financial products that will grant access to a broader segment of the population that is currently underserved.
                            </p>
                            </Col>
                        </Row>
                        <Row className="px-1">
                            <Col xs={6} sm={6} md={6} lg={6} className="pt-2">
                                <Image
                                src="/assets/press/coindesk.svg"
                                alt="Coindesk"
                                width={120}
                                height={50}
                                />
                            </Col>
                            <Col xs={6} sm={6} md={6} lg={6}>
                                <Button className="rounded-pill text-right mt-3 w-75 align-items-end fs-7" variant="outline-light" href="https://www.coindesk.com/business/2022/08/18/blockchain-protocol-algorand-leads-22m-investment-round-in-tokenization-firm-koibanx/" target="_blank">Read more</Button>
                            </Col>
                        </Row>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div>
                        <Row className="px-4">
                            <Col xs={10} sm={10} md={12} lg={12} className="px-0">
                            <h3 className="margin-mobile">"</h3>
                            <p>
                            The forms of intellectual property reached by the agreement include trademarks, patents and all kinds of copyright: such as songs, lyrics, videos, shows, conferences, podcasts and all forms of content that can be transmitted.
                            </p>
                            </Col>
                        </Row>
                        <Row className="px-1">
                            <Col xs={6} sm={6} md={6} lg={6} className="pt-2">
                                <Image
                                src="/assets/press/forbes.svg"
                                alt="Forbes"
                                width={120}
                                height={50}
                                />
                            </Col>
                            <Col xs={6} sm={6} md={6} lg={6}>
                                <Button className="rounded-pill text-right mt-3 w-75 align-items-end fs-7" variant="outline-light" href="https://www.coindesk.com/business/2022/08/18/blockchain-protocol-algorand-leads-22m-investment-round-in-tokenization-firm-koibanx/" target="_blank">Read more</Button>
                            </Col>
                        </Row>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div>
                        <Row className="px-4">
                            <Col xs={10} sm={10} md={12} lg={12} className="px-0">
                            <h3 className="margin-mobile">"</h3>
                            <p>
                            Mi Vacuna provides exact statistics on the penetration rate of the COVID-19 vaccination program. This application connects with the Koibanx platform, where a blockchain identity is created for each citizen with the records or information of each care and/or interaction with the Colombian health system.
                            </p>
                            </Col>
                        </Row>
                        <Row className="px-1">
                            <Col xs={6} sm={6} md={6} lg={6} className="pt-2">
                                <Image
                                src="/assets/press/el_tiempo.svg"
                                alt="El Tiempo"
                                width={120}
                                height={50}
                                />
                            </Col>
                            <Col xs={6} sm={6} md={6} lg={6}>
                                <Button className="rounded-pill text-right mt-3 w-75 align-items-end fs-7" variant="outline-light" href="https://www.coindesk.com/business/2022/08/18/blockchain-protocol-algorand-leads-22m-investment-round-in-tokenization-firm-koibanx/" target="_blank">Read more</Button>
                            </Col>
                        </Row>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div>
                        <Row className="px-4">
                            <Col xs={10} sm={10} md={12} lg={12} className="px-0">
                            <h3 className="margin-mobile">"</h3>
                            <p>
                            It is necessary to resolve, in advance, important technological and regulatory aspects to achieve an orderly massification of tokenization and, especially, to advance in a legal framework on the scope of smart contracts.
                            </p>
                            </Col>
                        </Row>
                        <Row className="px-0">
                            <Col xs={6} sm={6} md={6} lg={6} className="pt-2">
                                <Image
                                src="/assets/press/infobae.svg"
                                alt="Infobae"
                                width={120}
                                height={50}
                                />
                            </Col>
                            <Col xs={6} sm={6} md={6} lg={6}>
                                <Button className="rounded-pill text-right mt-3 w-75 align-items-end fs-7" variant="outline-light" href="https://www.coindesk.com/business/2022/08/18/blockchain-protocol-algorand-leads-22m-investment-round-in-tokenization-firm-koibanx/" target="_blank">Read more</Button>
                            </Col>
                        </Row>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div>
                        <Row className="px-4">
                            <Col xs={10} sm={10} md={12} lg={12} className="px-0">
                            <h3 className="margin-mobile">"</h3>
                            <p>
                            In the 2022 edition of the Green Awards festival, Algorand and Koibanx were invited to provide an explanatory workshop on blockchain technology and the different use cases. Thus, they listed the benefits of the Algorand blockchain in sustainable projects.
                            </p>
                            </Col>
                        </Row>
                        <Row className="px-1">
                            <Col xs={6} sm={6} md={6} lg={6} className="pt-2">
                                <Image
                                src="/assets/press/be_in_crypto.svg"
                                alt="Be In Crypto"
                                width={120}
                                height={50}
                                />
                            </Col>
                            <Col xs={6} sm={6} md={6} lg={6}>
                                <Button className="rounded-pill text-right mt-3 w-75 align-items-end fs-7" variant="outline-light" href="https://www.coindesk.com/business/2022/08/18/blockchain-protocol-algorand-leads-22m-investment-round-in-tokenization-firm-koibanx/" target="_blank">Read more</Button>
                            </Col>
                        </Row>
                    </div>
                </Carousel.Item>
            </Carousel>
        </Row>
    )
}