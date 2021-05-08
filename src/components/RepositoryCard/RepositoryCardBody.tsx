import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface Props {
  text: string;
}

export default function RepositoryCardBody({ text }: Props) {
  return (
    <Text numberOfLines={2} style={styles.textDescription}>
      {text}
    </Text>
  );
}

const styles = StyleSheet.create({
  textDescription: {
    paddingTop: 10,
    paddingRight: 10,
    paddingLeft: 5,
    fontSize: 16,
    lineHeight: 20,
  },
});
