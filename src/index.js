import React from 'react'
import { Dimensions } from 'react-native'
import Svg from 'react-native-svg'
import { Bust } from './body/Bust'
import { Bun } from './head/Bun'

const Peep = () => {
  return (
    <Svg style={{ width: 95, height: Dimensions.get('window').height, justifyContent: 'center', alignSelf: 'center' }} viewBox='0 0 818 1192'>
      <Bust />
      <Bun />
    </Svg>
  )
}

export default Peep
