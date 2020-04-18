import React from 'react';
import { registerRootComponent } from 'expo';
import { Provider } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import { ThemeProvider } from 'react-native-elements';
import { reduxStore } from './redux/store';
import { Navigation } from './navigation';

if (__DEV__) {
  console.disableYellowBox = true;
}

function App() {
  return (
    <Provider store={reduxStore}>
      <ThemeProvider>
        <ApplicationProvider {...eva} theme={eva.light}>
          <View style={styles.container}>
            <Navigation />
          </View>
        </ApplicationProvider>
      </ThemeProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default registerRootComponent(App);

// import { Navigation } from './Navigation';
// import { ThemeProvider } from 'react-native-elements';
// import { mapping, light as lightTheme } from '@eva-design/eva';
// import { ApplicationProvider, Layout } from 'react-native-ui-kitten';
// import store from './redux/store';

// export default function App() {
//   return (
//     <Provider store={store}>
//       <StatusBar barStyle="default" />

//       {/* <ThemeProvider>
//         <ApplicationProvider mapping={mapping} theme={lightTheme}>
//           <Layout style={{ flex: 1 }}>
//             <View style={styles.container}>
//               <StatusBar barStyle="default" />
//               <Navigation />
//             </View>
//           </Layout>
//         </ApplicationProvider>
//       </ThemeProvider> */}
//     </Provider>
//   );
// }
