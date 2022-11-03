import { Container, Breadcrumb, Row, Col, Card, Alert } from 'react-bootstrap';
import { BsBagPlusFill, BsArrowLeftCircle } from 'react-icons/bs';
import JobForm from 'components/admin/JobForm';
import Link from 'next/link';

export default function NewJob() {

    return (
        <Container fluid className="px-4">
            <Row>
                <Col>
                    <h1 className="mt-4">Add - Jobs on Koibanx</h1>
                    <Breadcrumb className="mb-4">
                        <Link href="/admin/jobs" passHref>
                            <Breadcrumb.Item active><a href=""><BsArrowLeftCircle /> Return</a></Breadcrumb.Item>
                        </Link>
                        <Breadcrumb.Item active><a href="/jobs" rel="noreferrer" target="_blank">See on website</a></Breadcrumb.Item>
                    </Breadcrumb>
                    <Card className="mb-4">
                        <Card.Header><BsBagPlusFill /> Add new job</Card.Header>
                        <Card.Body>
                            <JobForm></JobForm>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

NewJob.pageLayout = 'admin'