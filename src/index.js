import React from 'react'
import { Dimensions } from 'react-native'
import Svg from 'react-native-svg'

import Head from './head'
export { Body } from './body/z_options'
export { Hair } from './hair/z_options'
export { Face } from './face/z_options'
export { FacialHair } from './facialHair/z_options'
export { Accessories } from './accessories/z_options'

const Peep = ({ style, accessory, body, face, facialHair, hair }) => {
  return (
    <Svg
      style={{
        width: 200,
        height: Dimensions.get('window').height,
        justifyContent: 'center',
        alignSelf: 'center'
      }}
      viewBox='0 0 1020 1192'
    >
      {// Body
      React.createElement(body)}
      {// Head
      React.createElement(Head, { hair, face, facialHair, accessory })}
    </Svg>
  )
}

export default Peep
