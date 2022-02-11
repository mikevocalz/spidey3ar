import React from 'react';
import { WebView } from 'react-native-webview';

interface Props {
  route: any
}


function DetailsWebView({ route }: Props) {
  const { link } = route.params;

  return (
    <WebView
      style={{ flex: 1 }}
      source={{ uri: link }}
    />
  )
}


export default DetailsWebView