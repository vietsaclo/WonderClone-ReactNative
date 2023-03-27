import React, { useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { COLORS } from '../common//Consts';
import LoginPopup from '../components/common/LoginPopup';

const Home = () => {
  const [loginVisible, setLoginVisible] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.containerInner}>
        <LoginPopup visible={loginVisible} updateVisible={(newValue: boolean) => setLoginVisible(newValue)} />
        <Button title='Login' onPress={() => setLoginVisible(!loginVisible)} />
      </View>
    </View>
  )
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 7,
    paddingTop: 40,
    backgroundColor: COLORS.background_secondary,
  },
  containerInner: {
    flex: 1,
  }
});
