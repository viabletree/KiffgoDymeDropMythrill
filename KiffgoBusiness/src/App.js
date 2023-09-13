import React from 'react';
import './App.css';
import ReactGA from 'react-ga';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-redux-multilingual';
import { BarLoader } from 'react-spinners';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/lib/integration/react';
import JavascriptTimeAgo from 'javascript-time-ago';
import { hotjar } from 'react-hotjar';
import en from 'javascript-time-ago/locale/en';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/assets/css/general.css';
import translations from './translations';
import './index.css';
import configureStore from './store';
import Routing from './router';
import DataHandler from './services/DataHandler';
import { Colors } from './theme';
import Util from './services/Util';
import { PROD_ENV } from './constants';
import { DMLoader } from './components';

const reducers = require('./reducers').default;

// Initialize the desired locales.
JavascriptTimeAgo.locale(en);
export default class App extends React.Component {
  persistor = null;

  state = {
    isLoading: true,
    store: configureStore(reducers, () => {
      this._loadingCompleted();
      this.setState({ isLoading: false });
    })
  };

  _loadingCompleted = () => {
    DataHandler.setStore(this.state.store);
    // Util.getCsrfToken();
    this.persistor = persistStore(this.state.store);
  };

  componentDidMount() {
    if (process.env.REACT_APP_ENV === PROD_ENV) {
      hotjar.initialize(945626, 6);
      ReactGA.initialize('UA-128349332-2');
    }
  }

  render() {
    if (this.state.isLoading) {
      return (
        <div className="loader-wrapper">
          <DMLoader backgroundColor="white" isloading={this.state.isLoading} />
        </div>
      );
    }

    return (
      <Provider store={this.state.store}>
        <PersistGate
          loading={
            <div className="loader-wrapper">
              <BarLoader sizeUnit={'px'} size={150} color={Colors.kgGreen} />
            </div>
          }
          persistor={this.persistor}
        >
          <IntlProvider translations={translations}>
            <Routing />
          </IntlProvider>
        </PersistGate>
      </Provider>
    );
  }
}
