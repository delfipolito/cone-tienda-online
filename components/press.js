
import { Row, Col, Carousel, Button } from "react-bootstrap";
import Image from "next/future/image";
import press1 from "/public/assets/press/coindesk.svg";
import press2 from "/public/assets/press/forbes.svg";
import press3 from "/public/assets/press/el_tiempo.svg";
import press4 from "/public/assets/press/infobae.svg";
import press5 from "/public/assets/press/be_in_crypto.svg";


export default function Carousekoi() {
    return (
        <Row>
            <Carousel className="main-carousel">
                <Carousel.Item>
                    <div className="d-flex align-items-center mobile-column carousel-item-h">
                        <Col xs={12} sm={12} md={10} lg={7} className="px-5 px-md-0 ps-md-0 pe-md-0 ">
                            <h1 className="fs-4 d-block fw-normal align-items-start">&Prime;<br />Implement cryptocurrencies
                                    to the remittances it could bring
                                    benefits to its users Implement cryptocurrencies
                                    to the remittances it could bring
                                    benefits to its users
                            </h1>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={4} className="d-flex align-items-center justify-content-center">
                            <Button className="rounded-pill text-right mt-3 w-50 align-items-end" variant="outline-light" href="https://bit.ly/3Jd3WIZ" target="_blank">Read more</Button>
                        </Col>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="d-flex align-items-center mobile-column carousel-item-h">
                        <Col xs={12} sm={12} md={10} lg={7} className="px-5 px-md-0 ps-md-0 pe-md-0">
                            <h1 className="fs-4 d-block fw-normal">
                                &Prime;
                                <br />
                                Highly secure transactions as a result of being supported by blockchain technology. Highly secure transactions as a result of being supported by blockchain technology.
                            </h1>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={4} className="d-flex align-items-center justify-content-center">
                            <Button className="rounded-pill text-right mt-3 w-50" variant="outline-light" href="https://bit.ly/3Jd3WIZ" target="_blank">Read more</Button>
                        </Col>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="d-flex align-items-center mobile-column carousel-item-h">
                        <Col xs={12} sm={12} md={10} lg={7} className="px-5 px-md-0 ps-md-0 pe-md-0">
                            <h1 className="fs-5 d-block fw-normal">
                                &Prime;
                                <br />
                                Bitcoin has been around for over a decade, and it&apos;s proving to be stronger all the time.Bitcoin has been around for over a decade, and it&apos;s proving to be stronger all the time.
                            </h1>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={4} className="d-flex align-items-center justify-content-center">
                            <Button className="rounded-pill text-right mt-3 w-50" variant="outline-light" href="https://bit.ly/3Jd3WIZ" target="_blank">Read more</Button>
                        </Col>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="d-flex align-items-center mobile-column carousel-item-h">
                        <Col xs={12} sm={12} md={10} lg={7} className="px-5 px-md-0 ps-md-0 pe-md-0">
                            <h1 className="fs-4 d-block fw-normal">
                                &Prime;
                                <br />
                                When we talk about an NFT representing a digital work of art that is worth more than a physical work, a new concept appears that breaks conventional standards.
                            </h1>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={4} className="d-flex align-items-center justify-content-center">
                            <Button className="rounded-pill text-right mt-3 w-50" variant="outline-light" href="https://bit.ly/3Jd3WIZ" target="_blank">Read more</Button>
                        </Col>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="d-flex align-items-center mobile-column carousel-item-h">
                        <Col xs={12} sm={12} md={10} lg={7} className="px-5 px-md-0 ps-md-0 pe-md-0">
                            <h1 className="fs-4 d-block fw-normal">
                                &Prime;
                                <br />
                                There is no doubt that Bitcoin enjoys unrivaled popularity in the world of crypto assets. There is no doubt that Bitcoin enjoys unrivaled popularity in the world of crypto assets.
                            </h1>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={4} className="d-flex align-items-center justify-content-center">
                            <Button className="rounded-pill text-right mt-3 w-50" variant="outline-light" href="https://bit.ly/3Jd3WIZ" target="_blank">Read more</Button>
                        </Col>
                    </div>
                </Carousel.Item>
            </Carousel>
            <style jsx>
                {`
                `}
            </style>
        </Row>
    )

}