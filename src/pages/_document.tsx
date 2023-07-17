import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <meta name="description" content="Innoloft Frontend" />
                <link rel="icon" href="https://config.innoloft.com/7648562/favicons/favicon.ico" />
                <title>Innoloft Frontend</title>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
