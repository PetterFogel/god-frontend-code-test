import { AppProps } from "next/app";
import { Logo, StyleProvider, TabNav, ThemePicker, View } from "vcc-ui";
import React from "react";
import "../public/css/styles.css";
import Link from "next/link";
import { Header } from "../src/components/common/components/header/Header";

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
