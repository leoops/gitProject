import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface Props {
  text: string;
}

export default function RepositoryCardBody({ text }: Props) {
  return <Text style={styles.textDescription}>{text}</Text>;
}

const styles = StyleSheet.create({
  textDescription: {
    flex: 1,
    marginTop: 15,
    fontSize: 16,
    textAlign: 'auto',
  },
});
