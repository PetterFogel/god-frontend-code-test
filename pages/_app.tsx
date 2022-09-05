import { AppProps } from "next/app";
import { StyleProvider, ThemePicker } from "vcc-ui";
import { Header } from "../src/components/common/components/header/Header";
import React from "react";
import "../public/css/styles.css";

function HomePage({ Component, pageProps }: AppProps) {
  return (
    <React.StrictMode>
      <StyleProvider>
        <ThemePicker variant="light">
          <Header />
          <Component {...pageProps} />
        </ThemePicker>
      </StyleProvider>
    </React.StrictMode>
  );
}

export default HomePage;
