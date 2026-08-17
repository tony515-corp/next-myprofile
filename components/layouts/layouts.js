import HeaderBar from "./header/headerbar";
import FooterBar from "./footer/footerbar";
import PreloaderComp from "../preloader.comp";

export default function Layout({ children }) {
  return (
    <>
      <PreloaderComp />
      <HeaderBar />
      {children}
      <FooterBar />
    </>
  );
}
