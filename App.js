import React from 'react';
import {View, Text} from 'react-native';
import Screens from './src/utils/screens';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import store from './src/services/redux/store';
import StackNavigation from './src/components/navigation/StackNavigator';
const persistStore = store();
const App = props => {
  return (
    <Provider store={persistStore.store}>
      <PersistGate loading={null} persistor={persistStore.persistor}>
        <StackNavigation />
      </PersistGate>
    </Provider>
  );
};

export default App;
