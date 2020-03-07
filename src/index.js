import React from 'react'
import { View } from 'react-native'
import Svg from 'react-native-svg'

import Head from './head'

export {Body} from './body/z_options'
export {Hair} from './hair/z_options'
export {Face} from './face/z_options'
export {FacialHair} from './facialHair/z_options'
export {Accessories} from './accessories/z_options'

const Peep = ({style, accessory, body, face, facialHair, hair, viewBox}) => {
  const { x, y, width, height } = viewBox || { x: 0, y: 0, width: 850, height: 1200 }

  return (
    <Svg style={style} viewBox={`${x} ${y} ${width} ${height}`}>
      {// Body
      React.createElement(body)}
      {// Head
      React.createElement(Head, {hair, face, facialHair, accessory})}
    </Svg>
  )
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
  )
};

export default Peep
