import React from 'react'
import Head from 'next/head'
import MyThemeProvider from '../components/MyThemeProvider'

export default function MyApp(props) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>My page</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <MyThemeProvider>
        <Component {...pageProps} />
      </MyThemeProvider>
    </React.Fragment>
  );
}
