import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { BaseTheme } from './theme/base-theme';
import Config from '../nativebase.config';
import { Root } from './root';

export default function App() {
  return (
    <NativeBaseProvider theme={BaseTheme} config={Config}>
      <Root />
    </NativeBaseProvider>
  );
}
