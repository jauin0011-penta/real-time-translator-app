import React from 'react';
import { SafeAreaView, Text, Button } from 'react-native';
import { ThemeProvider, createTheme } from '@rneui/themed';

const theme = createTheme({
  lightColors: { primary: '#ffffff' },
  darkColors: { primary: '#121212' },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 20 }}>Real-Time Translator App</Text>
        <Button title="Select Language" onPress={() => alert('Language selection')} />
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;