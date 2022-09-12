import Head from "next/head";
import AppNavbar from "./navbar";
import AppFooter from "./footer";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8"></meta>
        <title>Koibanx</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="https://use.typekit.net/gwd5pil.css" />
      </Head>
      <AppNavbar />
      <main role="main">{children}</main>
      <AppFooter />
    </>
  );
}
