
import {Html, Head, Main, NextScript} from 'next/document'
import {Enviroment} from '../models/enviroments';
import useTranslation from 'next-translate/useTranslation';

export default function Document(props) {
    const {lang} = useTranslation();

    const isProduction = process.env.NEXT_PUBLIC_ENVIRONMENT === Enviroment.Production;
    return (
        <Html lang={lang}>
            <Head>
                <meta charSet="utf-8"></meta>
                <meta name="description" content="Koibanx es una compañía líder en proveer infraestructura blockchain en Latinoamérica, brindando tokenización y transacción de activos a la banca, gobiernos y al sector financiero de la región."/>
                <link rel="icon" href="/favicon.ico"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                    rel="stylesheet"
                />
                <link rel="stylesheet" href="https://use.typekit.net/gwd5pil.css"/>
                {isProduction && <script
                    dangerouslySetInnerHTML={{
                        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MDFCJ3C');`,
                    }}
                />
                }
            </Head>
            <body>
            <Main/>
            <NextScript/>

            {isProduction && <noscript
                dangerouslySetInnerHTML={{
                    __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MDFCJ3C"
                        height="0" width="0" style="display:none;visibility:hidden"/>`,
                }}
            />}
            </body>
        </Html>
    )
}