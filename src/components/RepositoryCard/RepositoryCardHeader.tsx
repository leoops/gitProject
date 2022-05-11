import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageSourcePropType,
} from 'react-native';
import { getCurrentTheme } from '../../utils/Utils';

interface Props {
  owner: { avatar_url: string; login: string };
}

export default (props: Props) => {
  const theme = getCurrentTheme();

  const styles = StyleSheet.create({
    cardHeader: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    authorAvatar: {
      width: 24,
      height: 24,
      borderRadius: 65,
    },
    text: {
      color: theme.PRIMARY_TEXT_COLOR,
      opacity: theme.FONT_OPACITY_LOW,
      fontSize: theme.FONT_SIZE_LOW,
      paddingLeft: 5,
    },
  });

  const { owner } = props;
  const { cardHeader, authorAvatar, text } = styles;
  const imageSource: ImageSourcePropType = {
    uri: owner.avatar_url,
    cache: 'force-cache',
  };

  return (
    <View style={cardHeader}>
      <Image style={authorAvatar} source={imageSource} resizeMode="contain" />
      <Text style={text} numberOfLines={1}>
        {owner.login}
      </Text>
    </View>
  );
};
