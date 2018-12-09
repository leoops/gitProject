import React, { Component } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import Routes from './src/routes/Routes';

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Routes />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
