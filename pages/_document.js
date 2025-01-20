import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "GTM-W558ZCML";

    return (
      <Html>
        <Head>
          <meta
            httpEquiv="Content-Security-Policy"
            content="script-src 'self' 'wasm-unsafe-eval' 'inline-speculation-rules' chrome-extension: https://www.googletagmanager.com https://cache.consentframework.com; script-src-elem 'self' chrome-extension: https://www.googletagmanager.com https://cache.consentframework.com;"
          />
          <script
            async
            src={`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`}
          />
        </Head>
        <body>
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
