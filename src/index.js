import React from 'react';
import { View } from 'react-native'
import Svg from 'react-native-svg';

import Head from './head';
import {Body} from './body/z_options';
import {Hair} from './hair/z_options';

export {Body} from './body/z_options';
export {Hair} from './hair/z_options';
export {Face} from './face/z_options';
export {FacialHair} from './facialHair/z_options';
export {Accessories} from './accessories/z_options';

const Peep = ({style, accessory, body, face, facialHair, hair, viewBox}) => {
  let x = viewBox?.x || 0;
  let y = viewBox?.y || 0;
  let width = viewBox?.width || 840;
  let height = viewBox?.height || 1200;

  if (hair === Hair.LongAfro) {
    x = -100;
  }

  if (body === Body.Geek) {
    width = 950;
  }
  console.log(x, y, width, height);
  return (
    <Svg style={style} viewBox={`${x} ${y} ${width} ${height}`}>
      {// Body
      React.createElement(body)}
      {// Head
      React.createElement(Head, {hair, face, facialHair, accessory})}
    </Svg>
  );
};

export const CirclePeep = ({
  style,
  accessory,
  body,
  face,
  facialHair,
  hair,
  viewBox,
  circleStyle
}) => {
  return (
    <View
      style={[circleStyle, { overflow: 'hidden' }]}>
      {
        React.createElement(Peep, {style, accessory, body, face, facialHair, hair, viewBox})
      }
    </View>
  );
};

export default Peep;
