import { useState, useEffect } from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { BsPeopleFill } from 'react-icons/bs';
import { userService } from 'services';
import Image from 'next/future/image';
import Link from 'next/link'


function logout() {
    userService.logout();
}

export default function AdminNavbar() {
    
    const [user, setUser] = useState(null);

    useEffect(() => {
        const subscription = userService.user.subscribe(x => setUser(x));
        return () => subscription.unsubscribe();
    }, []);

    return (
        <>
            <Navbar
                variant="dark"
                bg="primary"
                expand="lg"
                className="py-3 sb-topnav"
            >
                <Container fluid>
                    <Link href="/admin" passHref>
                        <Navbar.Brand >
                            <Image
                                alt="Koibanx Logo"
                                src={require('public/assets/img/logo-about.png')}
                                width={150}
                                style={{ height: "auto" }}
                                className="img-fluid"
                            />
                        </Navbar.Brand>
                    </Link>
                    <Navbar.Toggle
                        className="navbar-toggle-right"
                        aria-controls="basic-navbar-nav"
                    />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto my-2 my-lg-0" as="ul">
                            <NavDropdown title={<BsPeopleFill />}
                                id="navbarScrollingDropdown"
                                align="end"
                            >
                                <Link href="/admin/settings" passHref>
                                    <NavDropdown.Item>
                                        Settings
                                    </NavDropdown.Item>
                                </Link>
                                <NavDropdown.Divider />
                                <NavDropdown.Item onClick={logout}>
                                    Logout
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}