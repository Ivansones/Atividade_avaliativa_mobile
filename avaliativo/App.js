
import { StyleSheet, Text, View } from 'react-native';

import Home from './components/home';

import Login from './components/login';
import { ImageBackground } from 'react-native-web';

export default function App() {
  return (
    <View style = {styles.container}>
      <ImageBackground style={{width: '100%', height: '100%'}} source={{uri:'https://blog-static.petlove.com.br/wp-content/uploads/2024/04/29030254/cachorro-vira-lata-Petlove.jpg'}}>
      <Home/>
      <Login/>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
});
