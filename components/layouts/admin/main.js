import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { userService } from 'services';

import Head from "next/head";
import AdminFooter from "./footer";
import AdminNavbar from "./navbar";
import AdminSidenav from "./sidenav";

export default function AdminLayout({ children }) {

    const router = useRouter();
    const [user, setUser] = useState(null);
    const [authorized, setAuthorized] = useState(false);

    useEffect(() => {
        // on initial load - run auth check 
        authCheck(router.asPath);

        // on route change start - hide page content by setting authorized to false  
        const hideContent = () => setAuthorized(false);
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
        setUser(userService.userValue);
        const publicPaths = ['/admin/login'];
        const path = url.split('?')[0];
        if (!userService.userValue && !publicPaths.includes(path)) {
            setAuthorized(false);
            router.push({
                pathname: '/admin/login',
                query: { returnUrl: router.asPath }
            });
        } else {
            setAuthorized(true);
        }
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
            {authorized &&
                <>
                    < AdminNavbar />
                    <div id="layoutSidenav">
                        <AdminSidenav />
                        <div id="layoutSidenav_content">
                            <main role="main">{children}</main>
                            <AdminFooter />
                        </div>
                    </div>
                </>
            }
        </>
    );
}
