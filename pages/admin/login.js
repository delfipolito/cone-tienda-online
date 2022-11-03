import { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import Link from 'next/link';
import Head from 'next/head'
import { useRouter } from 'next/router';
import { userService } from 'services';

export default function Login() {
    const router = useRouter()
    const [validated, setValidated] = useState(false);
    const [loginError, setLoginError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [canView, setCanView] = useState(false);

    useEffect(() => {
        // on initial load - run auth check 
        authCheck(router.asPath);

        // on route change start - hide page content by setting authorized to false  
        const hideContent = () => setCanView(false);
        router.events.on('routeChangeStart', hideContent);

        // on route change complete - run auth check 
        router.events.on('routeChangeComplete', authCheck)

        // unsubscribe from events in useEffect return function
        return () => {
            router.events.off('routeChangeStart', hideContent);
            router.events.off('routeChangeComplete', authCheck);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function authCheck(url) {

        if (userService.userValue) {
            setCanView(false);
            router.push({
                pathname: '/admin'
            });
        } else {
            setCanView(true);
        }
    }

    function handleSubmit(event) {
        setLoginError("");
        event.preventDefault();
        event.stopPropagation();

        setValidated(true);

        if (password == "" ||
            email == "") {
            setLoginError("Please fill in needed values");
            return;
        }

        return userService.login(email, password)
            .then(() => {
                const returnUrl = router.query.returnUrl || '/admin/';
                router.push(returnUrl);
            })
            .catch(error => { setLoginError(error) });
    }

    return (
        <>
            <Head>
                <title>Admin | Koibanx</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
            </Head>
            {canView && <div id="layoutAuthentication">
                <div id="layoutAuthentication_content">
                    <Container>
                        <Row className="justify-content-center">
                            <Col lg={5} md={5} sm={8} xs={8}>
                                <Card className="shadow-lg border-0 rounded-lg mt-5">
                                    <Card.Header>
                                        <p>Login</p>
                                    </Card.Header>
                                    <Card.Body>
                                        {loginError &&
                                            <Alert key="danger" variant="danger" className="text-center">
                                                {loginError}
                                            </Alert>}
                                        <Form onSubmit={handleSubmit} noValidate validated={validated}>
                                            <Form.Group className="mb-3" controlId="inputEmail">
                                                <Form.Label>Email address</Form.Label>
                                                <Form.Control
                                                    required
                                                    type="email" placeholder="name@example.com"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                />
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="inputPassword">
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control
                                                    required
                                                    type="password" placeholder="Password"
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                />
                                            </Form.Group>
                                            <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                                                <Link className="small" href="/admin/password">Forgot your Password?</Link>
                                                <Button variant="primary" type="submit">
                                                    Login
                                                </Button>
                                            </div>
                                        </Form>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className='layoutAuthentication_footer'>
                    <footer className="py-4 bg-dark mt-auto">
                        <Container fluid className="px-4">
                            <div className="d-flex align-items-center small">
                                <div className="text-muted">Devoloped by <a href="https://kalosmk.com">Kalos MK</a>&copy; 2022</div>
                            </div>
                        </Container>
                    </footer>
                </div>
            </div>}
        </>
    );
};

Login.pageLayout = 'none'