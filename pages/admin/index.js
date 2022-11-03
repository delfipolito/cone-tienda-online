import { Container, Breadcrumb, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { BsCaretRightFill } from 'react-icons/bs';
import Link from 'next/link';

export default function Admin() {
    return (
        <Container fluid className="px-4">
            <h1 className="mt-4">Dashboard</h1>
            <Breadcrumb className="mb-4">
                <Breadcrumb.Item active>Home</Breadcrumb.Item>
            </Breadcrumb>
            <Row>
                <Col xl={3} md={6}>
                    <Card bg="primary" className="text-white mb-4">
                        <Card.Body className="fw-bold">
                            Jobs
                        
                        </Card.Body>
                        <Card.Footer className="d-flex align-items-center justify-content-between">
                            <Link href="/admin/jobs">
                                <a className="small text-white stretched-link text-decoration-none">View published</a>
                            </Link>
                            <div className="small text-white"><BsCaretRightFill /></div>
                        </Card.Footer>
                        <Card.Footer className="d-flex align-items-center justify-content-between">
                            <Link href="/admin/jobs/new">
                                <a className="small text-white stretched-link text-decoration-none">Add new</a>
                            </Link>
                            <div className="small text-white"><BsCaretRightFill /></div>
                        </Card.Footer>
                    </Card>
                </Col>
                {/* <Col xl={3} md={6}>
                    <Card bg="primary" className="text-white mb-4">
                        <Card.Body className="fw-bold">
                            Press
                        </Card.Body>
                        <Card.Footer className="d-flex align-items-center justify-content-between">
                            <Link href="/admin/press">
                                <a className="small text-white stretched-link text-decoration-none">View published</a>
                            </Link>
                            <div className="small text-white"><BsCaretRightFill /></div>
                        </Card.Footer>
                        <Card.Footer className="d-flex align-items-center justify-content-between">
                            <Link href="/admin/press/new">
                                <a className="small text-white stretched-link text-decoration-none">Add new</a>
                            </Link>
                            <div className="small text-white"><BsCaretRightFill /></div>
                        </Card.Footer>
                    </Card>
                </Col> */}
            </Row>
        </Container>
    );
};

Admin.pageLayout = 'admin'