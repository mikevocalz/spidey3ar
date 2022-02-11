import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Box, NativeBaseProvider, Spinner } from "native-base";

import { Provider } from 'react-redux'
import { store } from './redux/store'

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { ImageBackground, LogBox } from 'react-native';
import { config, theme } from './config/config';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

LogBox.ignoreAllLogs();//Ignore all log notifications

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  return (
    <>

      <Provider store={store}>
        <NativeBaseProvider theme={theme} config={config}>
          <SafeAreaProvider>
            <StatusBar />
            {
              !isLoadingComplete ? <Spinner accessibilityLabel="Loading...Spidey Three AR" color="#FF000" size="lg" marginTop={220} /> :
                <Navigation colorScheme={colorScheme} />
            }
          </SafeAreaProvider>
        </NativeBaseProvider>
      </Provider>

    </>
  );
}
