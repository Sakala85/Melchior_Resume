import Head from "next/head";
import NextNProgress from "nextjs-progressbar";
import { CssBaseline } from "@material-ui/core";
import { MuiThemeProvider } from "@material-ui/core/styles";
import getTheme from "helpers/getTheme";
import { ThemeProvider } from "styled-components";

const theme = getTheme();

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Melchior's Resume</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta
          name="description"
          content="Melchior's Resume, Developer Fuul Stack Node.js, React, React Native"
        />
        <meta name="twitter:title" content="Melchior Bengtsson resume" />
        <meta
          name="twitter:description"
          content="Melchior's Resume, Developer Fuul Stack Node.js, React, React Native"
        />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta property="og:title" content="Melchior Bengtsson Resume" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:description"
          content="Resume Melchior Bengtsson Developer Node.js React Freelance"
        />
      </Head>
      <NextNProgress />
      <CssBaseline />
      {/* <MuiThemeProvider theme={theme}> */}
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
      {/* </MuiThemeProvider> */}
    </>
  );
}

export default MyApp;
