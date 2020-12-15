import withApollo from '../lib/withApollo';

import '../styles/globals.css';

function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default withApollo({ ssr: true })(App);
