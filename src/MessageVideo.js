/* eslint global-require: 0 */

import React from 'react';
import { View, Text } from 'react-native';
import Color from './Color';

export default class MessageVideo {

  constructor() {
    return (
      // eslint-disable-next-line no-use-before-define
      <View style={{ padding: 20 }}>
        <Text style={{ color: Color.alizarin, fontWeight: '600' }}>
          Video is not implemented by GiftedChat.
        </Text>
        <Text style={{ color: Color.alizarin, fontWeight: '600' }}>
          You need to provide your own implementation by using renderMessageVideo
          prop.
        </Text>
      </View>);
  }

}
