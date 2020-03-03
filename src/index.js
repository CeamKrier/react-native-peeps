import React from 'react'
import {Dimensions} from 'react-native'
import Svg from 'react-native-svg'
import Head from './head'
import { Turtleneck } from './body/Turtleneck'

const Peep = () => {
  return (
    <Svg
      style={{
        width: 200,
        height: Dimensions.get('window').height,
        justifyContent: 'center',
        alignSelf: 'center'
      }}
      viewBox='0 0 820 1192'>
      <Turtleneck />
      <Head />
    </Svg>
  )
}

export default Peep
