import { Col, Button } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import Link from "next/link";

export default function Job({ title, description }) {
    return (
        <Col md={4} lg={4} sm={12}>
            <Card className="bg-transparent h-100">
                <Card.Body className="d-flex flex-column ">
                    <Card.Title className="fs-6">{title}</Card.Title>
                    <Card.Text className="font-p fs-8">
                        {description}
                    </Card.Text>
                  <Link href="/job" passHref>
                    <Button 
                    variant="outline-primary"
                    className="rounded-pill fs-8 btn-orange mt-auto w-50"
                    href="mailto:info@koibanx.com">Apply now</Button>
                    </Link>
                </Card.Body>
            </Card>
        </Col>
    )
}