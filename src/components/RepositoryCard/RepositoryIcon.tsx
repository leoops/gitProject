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
    <View style={styles.row}>
      <Image style={styles.icon} source={image} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    alignContent: 'center',
    flexDirection: 'row',
  },
  text: {
    paddingLeft: 5,
    textAlign: 'center',
    fontSize: 12,
  },
  icon: {
    width: 16,
    height: 16,
  },
});
