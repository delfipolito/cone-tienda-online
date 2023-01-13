import {Row, Col, Carousel, Button} from "react-bootstrap";
import useTranslation from 'next-translate/useTranslation';

export default function Press() {
    const {t} = useTranslation();

    return (
        <Row className="display-mobile-none">
            <Carousel className="main-carousel px-5">
                <Carousel.Item>
                    <div className="d-flex align-items-center mobile-column carousel-item-h">
                        <Col xs={12} sm={12} md={10} lg={7}>
                            <h1 className="px-5 mb-0">&Prime;</h1>
                            <h1 className="fs-4-1 d-block fw-normal align-items-start px-5">
                                {t('common:News.coindesk')}
                            </h1>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={4}
                             className="d-flex align-items-center justify-content-center">
                            <Button className="rounded-pill text-right mt-3 w-75 align-items-end"
                                    variant="outline-light"
                                    href="https://www.coindesk.com/business/2022/08/18/blockchain-protocol-algorand-leads-22m-investment-round-in-tokenization-firm-koibanx/"
                                    target="_blank">{t('common:News.buttonReadMore')}</Button>
                        </Col>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="d-flex align-items-center mobile-column carousel-item-h">
                        <Col xs={12} sm={12} md={10} lg={7}>
                            <h1 className="px-5 mb-0">&Prime;</h1>
                            <h1 className="fs-4-1 d-block fw-normal px-5">
                                {t('common:News.forbes')}
                            </h1>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={4}
                             className="d-flex align-items-center justify-content-center">
                            <Button className="rounded-pill text-right mt-3 w-75" variant="outline-light"
                                    href="https://www.forbesargentina.com/innovacion/una-empresa-argentina-ayudara-exportar-creaciones-artistas-tecnologia-blockchain-n16390"
                                    target="_blank">{t('common:News.buttonReadMore')}</Button>
                        </Col>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="d-flex align-items-center mobile-column carousel-item-h">
                        <Col xs={12} sm={12} md={10} lg={7}>
                            <h1 className="px-5 mb-0">&Prime;</h1>
                            <h1 className="fs-4-1 d-block fw-normal px-5">
                                {t('common:News.eltiempo')}
                            </h1>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={4}
                             className="d-flex align-items-center justify-content-center">
                            <Button className="rounded-pill text-right mt-3 w-75" variant="outline-light"
                                    href="https://www.eltiempo.com/contenido-comercial/el-exito-e-impacto-de-mi-vacuna-en-alianza-con-la-plataforma-koibanx-675784"
                                    target="_blank">{t('common:News.buttonReadMore')}</Button>
                        </Col>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="d-flex align-items-center mobile-column carousel-item-h">
                        <Col xs={12} sm={12} md={10} lg={7}>
                            <h1 className="px-5 mb-0">&Prime;</h1>
                            <h1 className="fs-4-1 d-block fw-normal px-5">
                                {t('common:News.infobae')}
                            </h1>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={4}
                             className="d-flex align-items-center justify-content-center">
                            <Button className="rounded-pill text-right mt-2 w-75" variant="outline-light"
                                    href="https://www.infobae.com/opinion/2022/09/01/el-negocio-de-la-tokenizacion-de-commodities-e-inmuebles-puede-desarrollarse-legalmente-en-argentina/"
                                    target="_blank">{t('common:News.buttonReadMore')}</Button>
                        </Col>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="d-flex align-items-center mobile-column carousel-item-h">
                        <Col xs={12} sm={12} md={10} lg={7}>
                            <h1 className="px-5">&Prime;</h1>
                            <h1 className="fs-4-1 d-block fw-normal px-5">
                                {t('common:News.beincrypto')}
                            </h1>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={4}
                             className="d-flex align-items-center justify-content-center">
                            <Button className="rounded-pill text-right mt-3 w-75" variant="outline-light"
                                    href="https://es.beincrypto.com/tecnologia-blockchain-promueve-sustentabilidad-gracias-koibanx-algorand/"
                                    target="_blank">{t('common:News.buttonReadMore')}</Button>
                        </Col>
                    </div>
                </Carousel.Item>
            </Carousel>
        </Row>
    )
}