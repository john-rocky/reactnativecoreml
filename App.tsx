import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, Button, Alert } from 'react-native';
import { Colors, Header } from 'react-native/Libraries/NewAppScreen';
import { ViewModule } from './src/nativeModules/ViewModule'; // カスタムモジュールのパス

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  // カメラを表示する関数
  const showView = async () => {
    try {
      const result = await ViewModule.showView();
      // Alert.alert("Success", result); // 成功時にアラートを表示
    } catch (error) {
      Alert.alert("Error", "Could not open camera view"); // エラー時にアラートを表示
    }
  };

  return (
    <SafeAreaView style={[backgroundStyle, styles.container]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} backgroundColor={backgroundStyle.backgroundColor} />
      
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
        <Header />
        <View style={[styles.sectionContainer, { backgroundColor: isDarkMode ? Colors.black : Colors.white }]}>
          <Text style={styles.sectionTitle}>React Native Camera App</Text>
          <Text style={styles.sectionDescription}>
            Press the button below to open the camera view.
          </Text>
          <Button title="Show Camera" onPress={showView} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    textAlign: 'center',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
