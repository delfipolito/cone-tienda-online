import { Col, Button } from "react-bootstrap";

export default function Job({ title, description }) {
    return (
        <Col md={4} lg={4} sm={12}>
            <div className="pb-5">
                <div>
                    <h5 className="fs-6">{title}</h5>
                    <p className="font-p fs-8">
                        {description}
                    </p>
                </div>
                <Button
                    variant="outline-primary"
                    className="rounded-pill fs-8"
                    href="mailto:info@koibanx.com"
                >
                    Apply now
                </Button>
            </div>
        </Col>
    )
}