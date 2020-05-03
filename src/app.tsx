import React, { useEffect } from 'react';
import { registerRootComponent } from 'expo';
import { Provider } from 'react-redux';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import { ThemeProvider } from 'react-native-elements';
import { reduxStore } from './redux/store';
import { setAppLoading, loadPrimeAssets } from './redux/actions/app-actions';
import { restoreAuth } from './redux/actions/auth-actions';
import { startMatchPolling } from './redux/actions/local-state-actions';
import { Navigation } from '@src/navigation';

if (__DEV__) {
  // Отключает ворнинги поверх страницы.
  // Консоль можно смотреть в dev tools.
  console.disableYellowBox = true;
}

export default registerRootComponent(() => {
  useEffect(() => {
    Promise.all([
      reduxStore.dispatch(loadPrimeAssets()),
      reduxStore.dispatch(restoreAuth()),
    ]).then(() => {
      reduxStore.dispatch(setAppLoading(false));
      reduxStore.dispatch(startMatchPolling());
    });
  }, []);

  return (
    <Provider store={reduxStore}>
      <ThemeProvider>
        <ApplicationProvider {...eva} theme={eva.light}>
          <Navigation />
        </ApplicationProvider>
      </ThemeProvider>
    </Provider>
  );
});
