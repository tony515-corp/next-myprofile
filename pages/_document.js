import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

const beforeInteractiveScripts = [
  "/js/jquery-1.12.4.min.js",
  "/js/popper.min.js",
  "/js/bootstrap.min.js",
  "/js/jquery.easing.min.js",
  "/js/bootstrap-menu.js",
  "/js/jquery.magnific-popup.min.js",
  "/js/wow.min.js",
  "/js/isotope.pkgd.min.js",
  "/js/jquery.mixitup.min.js",
  "/js/imagesloaded.pkgd.min.js",
  "/js/jquery.appear.js",
  "/js/count-to.js",
  "/js/owl.carousel.min.js",
  "/js/progress-bar.min.js",
  "/js/typed.js",
  "/js/jquery.particles.min.js",
  "/js/active-class.js",
];

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {beforeInteractiveScripts.map((src) => (
            <Script key={src} src={src} strategy="beforeInteractive" />
          ))}
        </Head>
        <body id="bdy" className="scroll-style">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
