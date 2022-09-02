import { AppProps } from "next/app";
import { Logo, StyleProvider, TabNav, ThemePicker, View } from "vcc-ui";
import React from "react";
import "../public/css/styles.css";
import Link from "next/link";

function HomePage({ Component, pageProps }: AppProps) {
  return (
    <React.StrictMode>
      <StyleProvider>
        <ThemePicker variant="light">
          <TabNav textAlign="left">
            <View padding={3}>
              <Link href={"/"}>
                <Logo type="spreadmark" height={8} />
              </Link>
            </View>
          </TabNav>
          <Component {...pageProps} />
        </ThemePicker>
      </StyleProvider>
    </React.StrictMode>
  );
}

export default HomePage;
