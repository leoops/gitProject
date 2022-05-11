import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageSourcePropType,
} from 'react-native';
import { getCurrentTheme } from '../../utils/Utils';

interface Props {
  image: ImageSourcePropType;
  text: number;
}
export default function RepositoryIcon(props: Props) {
  const theme = getCurrentTheme();

  const styles = StyleSheet.create({
    row: {
      alignContent: 'center',
      flexDirection: 'row',
    },
    text: {
      textAlign: 'center',
      opacity: theme.FONT_OPACITY_LOW,
      fontSize: theme.FONT_SIZE_LOW,
      color: theme.PRIMARY_TEXT_COLOR,
    },
    icon: {
      width: 16,
      height: 16,
      tintColor: theme.ICON_COLOR,
    },
  });

  const { image, text } = props;
  return (
    <View style={styles.row}>
      <Image style={styles.icon} source={image} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}
