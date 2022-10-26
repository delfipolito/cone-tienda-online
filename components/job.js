import { Col, Button } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import Link from "next/link";

export default function Job({ title, description }) {
    return (
        <Col md={4} lg={4} sm={12}>
            <Card className="bg-transparent h-100">
                <Card.Body className="d-flex flex-column">
                    <Card.Title className="fs-6">{title}</Card.Title>
                    <Card.Text>
                        <p>{description}</p>
                    </Card.Text>
                    <Link href="/job" passHref>
                    <Button 
                    variant="outline-primary"
                    className="rounded-pill btn-orange mt-auto w-50 fw-bold"
                    href="mailto:info@koibanx.com">Ver más</Button>
                    </Link>
                </Card.Body>
            </Card>
        </Col>
    )
}