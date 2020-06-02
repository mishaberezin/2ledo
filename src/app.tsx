import React, { useEffect } from "react";
import { config } from "@app/config";
import { registerRootComponent } from "expo";
import { Provider } from "react-redux";
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";
import { ThemeProvider } from "react-native-elements";
import { reduxStore } from "./redux/store";
import { setAppLoading, resolveAuth } from "./redux/slices";
import { Navigation } from "@src/navigation";

if (__DEV__) {
  // Отключает ворнинги поверх страницы.
  // Консоль можно смотреть в dev tools.
  console.disableYellowBox = true;
}

const loadPrimeAssets = async () => {
  await Promise.all([
    Asset.loadAsync(config.primeAssets.images),
    Font.loadAsync(config.primeAssets.fonts),
  ]);
};

export default registerRootComponent(() => {
  useEffect(() => {
    async function warmUp() {
      try {
        await Promise.all([
          loadPrimeAssets(),
          reduxStore.dispatch(resolveAuth()),
        ]);
      } finally {
        reduxStore.dispatch(setAppLoading(false));
      }
    }

    reduxStore.dispatch(setAppLoading(true));
    warmUp();
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
