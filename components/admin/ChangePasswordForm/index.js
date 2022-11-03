import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { useState } from 'react';
import { userService } from 'services';

export default function ChangePasswordForm() {

    const [validated, setValidated] = useState(false);
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")
    const [changePasswordForm, setchangePasswordForm] = useState({
        current_password: "",
        new_password: "",
        new_password_repeat: ""
    })

    function cleanMessages() {
        setError("");
        setSuccess("");
    }

    const handleChange = (e) => {
        const target = e.target
        const value = target.value
        const name = target.name

        setchangePasswordForm({
            ...changePasswordForm,
            [name]: value,
        })
    }

    function handleSubmit(event) {
        cleanMessages();
        event.preventDefault();
        event.stopPropagation();
        setValidated(true);

        if (changePasswordForm.new_password == "" ||
            changePasswordForm.new_password_repeat == "" ||
            changePasswordForm.current_password == "") {
            setError("Please fill in needed values");
            return;
        }

        if (changePasswordForm.new_password != changePasswordForm.new_password_repeat) {
            setError("New Password and Repeat New Password are different");
            return;
        }

        return userService.changePassword(userService.userValue.id, changePasswordForm)
            .then((response) => {
                setSuccess("Your password has been updated successfully")
            })
            .catch(error => { setError(error) });

    }
    return (
        <Container fluid className="px-4">
            <Row>
                <Col xl={8} md={8}>
                    <Card bg="light" className="mb-4">
                        <Card.Header>
                            Change Password
                        </Card.Header>
                        <Card.Body>
                            {success &&
                                <Alert key="success" variant="success" className="text-center">
                                    {success}
                                </Alert>}
                            {error &&
                                <Alert key="danger" variant="danger" className="text-center">
                                    {error}
                                </Alert>}
                            <Form onSubmit={handleSubmit} noValidate validated={validated}>
                                <Form.Group className="mb-3" controlId="formCurrentPassword">
                                    <Form.Label>Current Password</Form.Label>
                                    <Form.Control name="current_password" type="password" placeholder="Enter your current password"
                                        value={changePasswordForm.current_password}
                                        onChange={handleChange}
                                        required />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formNewPassword">
                                    <Form.Label>New Password</Form.Label>
                                    <Form.Control name="new_password" type="password" placeholder="Enter your new password"
                                        value={changePasswordForm.new_password}
                                        onChange={handleChange}
                                        required />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formNewPasswordRepeat">
                                    <Form.Label>Repeat your New Password</Form.Label>
                                    <Form.Control type="password" name="new_password_repeat" placeholder="Re-Enter your new password"
                                        checked={changePasswordForm.new_password_repeat}
                                        onChange={handleChange}
                                        required />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Update
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}