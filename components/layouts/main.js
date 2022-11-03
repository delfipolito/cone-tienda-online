import Head from "next/head";
import AppNavbar from "./navbar";
import AppFooter from "./footer";

export default function Layout({ children }) {

  return (
    <>
      <Head>
        <title>Koibanx</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      <AppNavbar>{children.props}</AppNavbar>
      <main role="main">{children}</main>
      <AppFooter>{children.props}</AppFooter>
    </>
  );
}