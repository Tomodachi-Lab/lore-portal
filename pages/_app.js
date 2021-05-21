import Header from '../src/components/Header';
import GlobalStyle from '../src/theme/GlobalStyle';

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
    </>
  );
}
