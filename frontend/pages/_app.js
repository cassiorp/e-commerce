import '../styles/globals.css';
import { Provider } from 'react-redux';
import { stores, persistor } from '../store';
import { PersistGate } from 'redux-persist/integration/react';

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={stores}>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
};

export default MyApp;
