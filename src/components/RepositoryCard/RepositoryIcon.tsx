import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageSourcePropType,
} from 'react-native';

interface Props {
  image: ImageSourcePropType;
  text: number;
}
export default function RepositoryIcon(props: Props) {
  const { image, text } = props;
  return (
    <Text style={styles.row}>
      <Image style={styles.icon} source={image} />
      {text}
    </Text>
  );
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
  },
  icon: {
    width: 16,
    height: 16,
  },
});
