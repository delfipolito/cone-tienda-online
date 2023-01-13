import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../components/layouts/main";
import AdminLayout from "../components/layouts/admin/main";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {

  if (!Component.pageLayout) {
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  };

  if (Component.pageLayout === 'admin') {

    return (
      <AdminLayout>
        <Component {...pageProps} />
      </AdminLayout>
    );

  }

  return <Component {...pageProps} />
}

export default MyApp;
