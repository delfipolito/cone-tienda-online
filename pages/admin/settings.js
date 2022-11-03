import ChangePasswordForm from 'components/admin/ChangePasswordForm';
import { useEffect, useState } from 'react';
import { Container, Breadcrumb, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { userService } from 'services';

export default function AdminSettings() {

    return (
        <>
            <Container fluid className="px-4">
                <h1 className="mt-4">Settings</h1>
                <Breadcrumb className="mb-4">
                    <Breadcrumb.Item active>Settings</Breadcrumb.Item>
                </Breadcrumb>
                <Row>
                    <Col xl={8} md={8}>
                        <Card bg="light" className="mb-4">
                            <Card.Body className="fw-bold">
                                Admin User
                            </Card.Body>
                            <Card.Footer className="d-flex align-items-center justify-content-between">
                                User: {userService.userValue.email}
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <ChangePasswordForm />
        </>
    );
};

AdminSettings.pageLayout = 'admin'