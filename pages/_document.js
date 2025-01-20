import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "GTM-W558ZCML";

    return (
      <Html>
        <Head>
          {/* Add support for Privacy Sandbox and first-party data */}
          <meta name="privacy-sandbox" content="enabled" />
          <script
            async
            src={`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`}
            data-cookieless="true"
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
