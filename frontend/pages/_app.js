import '../styles/globals.css';
import { Provider } from 'react-redux';
import { stores } from '../store';

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={stores}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
