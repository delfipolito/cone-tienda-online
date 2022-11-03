import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { BsSpeedometer, BsCardHeading, BsFillBagDashFill, BsFillBagPlusFill } from 'react-icons/bs';
import Image from 'next/future/image';
import Link from 'next/link'

export default function AdminSidenav() {
    return (
        <div id="layoutSidenav_nav">
            <Nav className="sb-sidenav accordion sb-sidenav-dark" as="nav" id="sidenavAccordion">
                <div className="sb-sidenav-menu">
                    <Nav as="nav">
                        <div className="sb-sidenav-menu-heading">Home</div>
                        <Link href="/admin" passHref>
                            <Nav.Link>
                                <div className="sb-nav-link-icon"><BsSpeedometer /></div>Dashboard
                            </Nav.Link>
                        </Link>
                        {/* <div className="sb-sidenav-menu-heading">Index</div>
                        <Link href="/admin/press" passHref>
                            <Nav.Link>
                                <div className="sb-nav-link-icon"><BsCardHeading /></div>Press
                            </Nav.Link>
                        </Link>
                        <Link href="/admin/press/new" passHref>
                            <Nav.Link>
                                <div className="sb-nav-link-icon"><BsCardHeading /></div>Add New
                            </Nav.Link>
                        </Link> */}
                        <div className="sb-sidenav-menu-heading">Jobs</div>
                        <Link href="/admin/jobs" passHref>
                            <Nav.Link>
                                <div className="sb-nav-link-icon"><BsFillBagDashFill /></div>View Jobs
                            </Nav.Link>
                        </Link>
                        <Link href="/admin/jobs/new" passHref>
                            <Nav.Link>
                                <div className="sb-nav-link-icon"><BsFillBagPlusFill /></div>Add New
                            </Nav.Link>
                        </Link>
                    </Nav>
                </div>
                <div className="sb-sidenav-footer">
                    <div className="small text-center">
                        <a href="https://www.kalosmk.com" rel="noreferrer" target="_blank" className="text-decoration-none">www.kalosmk.com</a>
                    </div>
                </div>
            </Nav>
        </div >
    )
}