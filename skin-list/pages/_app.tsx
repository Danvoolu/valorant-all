import "../styles/globals.css";
import type { AppProps } from "next/app";
import ResponsiveDrawer from "../src/components/responsiveDrawer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ResponsiveDrawer>
      <Component {...pageProps} />
    </ResponsiveDrawer>
  );
}

export default MyApp;
