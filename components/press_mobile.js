import { Row, Col, Carousel, Button } from "react-bootstrap";
import Image from "next/future/image";
import useTranslation from 'next-translate/useTranslation';

export default function Pressmobile() {
    const {t} = useTranslation();

    return (
        <Row className="display-mobile-yes">
            <Carousel className="ps-5 mt-5">
                <Carousel.Item>
                    <div>
                        <Row className="px-4">
                            <Col xs={11} sm={11} md={12} lg={12} className="px-0">
                            <h3 className="margin-mobile">"</h3>
                            <p>
                                {t('common:News.coindesk')}
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
                                <Button className="rounded-pill text-right mt-3 w-75 align-items-end fs-7" variant="outline-light" href="https://www.coindesk.com/business/2022/08/18/blockchain-protocol-algorand-leads-22m-investment-round-in-tokenization-firm-koibanx/" target="_blank">{t('common:News.buttonReadMore')}</Button>
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
                                {t('common:News.forbes')}
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
                                {t('common:News.eltiempo')}
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
                                {t('common:News.infobae')}
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
                                {t('common:News.beincrypto')}

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