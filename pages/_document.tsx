import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="ja">
        <Head>
          {/* Google Fonts */}
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
            rel="stylesheet"
          />

          {/* Google Analytics */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-XXXXXXXXX-X"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag() {
                dataLayer.push(arguments);
              }
              gtag("js", new Date());
              gtag("config", "UA-XXXXXXXXX-X");
            `,
            }}
          ></script>

          {/* Google Adsense */}
          <script
            data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          ></script>

          {/* Google Tag Manager */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({"gtm.start":
              new Date().getTime(),event:"gtm.js"});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!="dataLayer"?"&l="+l:"";j.async=true;j.src=
              "https://www.googletagmanager.com/gtm.js?id="+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,"script","dataLayer","GTM-XXXXXXX");
            `,
            }}
          ></script>

          {/* Google Adsense */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
              (adsbygoogle = window.adsbygoogle || []).push({
                google_ad_client: "ca-pub-XXXXXXXXXXXXXXXX",
                enable_page_level_ads: true
              });
            `,
            }}
          ></script>
        </Head>
        <body>
            {/* Google Tag Manager (noscript) */}
            <noscript>
              <iframe
                src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
                height="0"
                width="0"
                style={{ display: "none", visibility: "hidden" }}
              ></iframe>
            </noscript>
            <Main />
            <NextScript />
          </body>
        </Html>
      );
    }
  }

export default MyDocument;  