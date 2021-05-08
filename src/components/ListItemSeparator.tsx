import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function ListItemSeparator() {
  return <View style={styles.separator} />;
}

const styles = StyleSheet.create({
  separator: { padding: 5 },
});
