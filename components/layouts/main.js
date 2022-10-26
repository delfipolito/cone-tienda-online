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
        <link rel="stylesheet" href="https://use.typekit.net/gwd5pil.css" />
      </Head>
      <AppNavbar />
      <main role="main">{children}</main>
      <AppFooter />
    </>
  );
}